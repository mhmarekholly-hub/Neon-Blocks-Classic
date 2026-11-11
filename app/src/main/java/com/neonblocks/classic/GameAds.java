package com.neonblocks.classic;

import android.app.Activity;
import android.os.SystemClock;
import android.os.Handler;
import android.os.Looper;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.UserMessagingPlatform;
import java.util.function.BiConsumer;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.RequestConfiguration;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.AdError;

/** Demo ads only. Release makes no SDK initialization or ad requests. */
final class GameAds {
    private final Activity activity;
    private InterstitialAd ready;
    private long loadedAt;
    private boolean showing, destroyed, loading, eligible;
    private boolean adult, initialized, consentBusy, consentChecked;
    private int generation;
    private final ConsentInformation consent;
    private final BiConsumer<Boolean, Boolean> state;

    GameAds(Activity activity, BiConsumer<Boolean, Boolean> state) {
        this.activity = activity;
        this.state = state;
        consent = UserMessagingPlatform.getConsentInformation(activity);
    }

    private boolean allowed() {
        return BuildConfig.DEBUG && adult && consentChecked && !consentBusy && consent.canRequestAds();
    }

    private void initialize() {
        if (!allowed() || initialized || destroyed) return;
        initialized = true;
        // Demo requests remain conservative even for adults during preparation.
        MobileAds.setRequestConfiguration(new RequestConfiguration.Builder()
            .setTagForChildDirectedTreatment(RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE)
            .setTagForUnderAgeOfConsent(RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE)
            .setMaxAdContentRating(RequestConfiguration.MAX_AD_CONTENT_RATING_G).build());
        new Thread(() -> MobileAds.initialize(activity, status -> activity.runOnUiThread(this::load))).start();
    }

    private void load() {
        if (!allowed() || destroyed || loading || ready != null) return;
        final int requestGeneration = generation;
        loading = true;
        InterstitialAd.load(activity, "ca-app-pub-3940256099942544/1033173712",
            new AdRequest.Builder().build(), new InterstitialAdLoadCallback() {
                @Override public void onAdLoaded(InterstitialAd ad) {
                    loading = false;
                    if (!destroyed && requestGeneration == generation && allowed()) { ready = ad; loadedAt = SystemClock.elapsedRealtime(); }
                }
                @Override public void onAdFailedToLoad(LoadAdError error) { loading = false; }
            });
    }

    void message(String event) {
        if (destroyed) return;
        if ("age:restricted".equals(event)) {
            adult = false; generation++; ready = null; eligible = false; consentChecked = false;
            consentBusy = false; state.accept(false, false); return;
        }
        if ("age:adult".equals(event)) {
            if (!adult) { adult = true; requestConsent(); }
            return;
        }
        if ("privacy".equals(event)) {
            if (!adult || consentBusy || consent.getPrivacyOptionsRequirementStatus() != ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED) return;
            ready = null; generation++; eligible = false; consentBusy = true;
            UserMessagingPlatform.showPrivacyOptionsForm(activity, error -> finishConsent(error != null));
            return;
        }
        if ("started".equals(event)) { eligible = true; load(); return; }
        if ("menu".equals(event)) { eligible = false; return; }
        if (!"gameOver".equals(event) || !eligible) return;
        eligible = false;
        if (!allowed() || activity.isFinishing() || !activity.hasWindowFocus() || showing) return;
        InterstitialAd ad = ready;
        ready = null;
        if (ad == null || SystemClock.elapsedRealtime() - loadedAt >= 3600000L) { load(); return; }
        showing = true;
        ad.setFullScreenContentCallback(new FullScreenContentCallback() {
            @Override public void onAdDismissedFullScreenContent() { showing = false; load(); }
            @Override public void onAdFailedToShowFullScreenContent(AdError error) { showing = false; load(); }
        });
        ad.show(activity);
    }

    private void requestConsent() {
        consentBusy = true;
        final int attempt = ++generation;
        // A network/configuration problem must never prevent offline play.
        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            if (!destroyed && consentBusy && generation == attempt) {
                generation++; consentBusy = false; consentChecked = false;
                state.accept(false, true);
            }
        }, 20000);
        consent.requestConsentInfoUpdate(activity, new ConsentRequestParameters.Builder().build(), () -> {
            if (destroyed || generation != attempt || !adult) return;
            if (!activity.hasWindowFocus()) { finishConsent(true); return; }
            // Invalidate the network timeout before a person interacts with the form.
            generation++;
            UserMessagingPlatform.loadAndShowConsentFormIfRequired(activity, error -> finishConsent(error != null));
        }, error -> { if (!destroyed && generation == attempt) finishConsent(true); });
    }

    private void finishConsent(boolean error) {
        if (destroyed) return;
        consentBusy = false;
        // Fail closed on errors in this preparatory version, even with cached consent.
        consentChecked = !error;
        state.accept(adult && consent.getPrivacyOptionsRequirementStatus() == ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED, error);
        initialize();
        if (initialized) load();
    }

    boolean isShowing() { return showing || consentBusy; }
    void destroy() { destroyed = true; generation++; ready = null; eligible = false; }
}
