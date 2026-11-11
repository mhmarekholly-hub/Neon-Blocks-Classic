package com.neonblocks.classic;

import android.app.Activity;
import android.os.SystemClock;
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

    GameAds(Activity activity) {
        this.activity = activity;
        if (!BuildConfig.DEBUG) return;
        MobileAds.setRequestConfiguration(new RequestConfiguration.Builder()
            .setTagForChildDirectedTreatment(RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE)
            .setTagForUnderAgeOfConsent(RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE)
            .setMaxAdContentRating(RequestConfiguration.MAX_AD_CONTENT_RATING_G).build());
        new Thread(() -> MobileAds.initialize(activity, status -> activity.runOnUiThread(this::load))).start();
    }

    private void load() {
        if (!BuildConfig.DEBUG || destroyed || loading || ready != null) return;
        loading = true;
        InterstitialAd.load(activity, "ca-app-pub-3940256099942544/1033173712",
            new AdRequest.Builder().build(), new InterstitialAdLoadCallback() {
                @Override public void onAdLoaded(InterstitialAd ad) {
                    loading = false;
                    if (!destroyed) { ready = ad; loadedAt = SystemClock.elapsedRealtime(); }
                }
                @Override public void onAdFailedToLoad(LoadAdError error) { loading = false; }
            });
    }

    void message(String event) {
        if (destroyed) return;
        if ("started".equals(event)) { eligible = true; load(); return; }
        if ("menu".equals(event)) { eligible = false; return; }
        if (!"gameOver".equals(event) || !eligible) return;
        eligible = false;
        if (activity.isFinishing() || !activity.hasWindowFocus() || showing) return;
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

    boolean isShowing() { return showing; }
    void destroy() { destroyed = true; ready = null; eligible = false; }
}
