
package com.neonblocks.classic;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;

public class MainActivity extends Activity {
    private WebView game;
    private boolean activityPaused;

    @Override
    public void onCreate(Bundle state) {
        super.onCreate(state);

        getWindow().getDecorView()
            .setSystemUiVisibility(5894 | 1024 | 512);

        game = new WebView(this);
        game.setBackgroundColor(0xff0b1020);

        WebViewAssetLoader assetLoader =
            new WebViewAssetLoader.Builder()
                .addPathHandler(
                    "/assets/",
                    new WebViewAssetLoader.AssetsPathHandler(this)
                )
                .build();

        game.setWebViewClient(new WebViewClientCompat() {
            @Override
            public android.webkit.WebResourceResponse
                shouldInterceptRequest(
                    WebView view,
                    android.webkit.WebResourceRequest request
                ) {
                return assetLoader.shouldInterceptRequest(
                    request.getUrl()
                );
            }
        });

        game.setWebChromeClient(new WebChromeClient());

        WebSettings settings = game.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);

        game.setOverScrollMode(View.OVER_SCROLL_NEVER);
        setContentView(game);

        game.loadUrl(
            "https://appassets.androidplatform.net/assets/index.html"
        );
    }

    @Override
    protected void onPause() {
        activityPaused = true;
        if (game != null) {
            game.evaluateJavascript("window.neonGameMenu && window.neonGameMenu()", ignored -> {
                if (game != null && activityPaused) game.onPause();
            });
        }
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        activityPaused = false;
        if (game != null) game.onResume();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (!hasFocus && game != null) {
            game.evaluateJavascript("window.neonGameMenu && window.neonGameMenu()", null);
        }
    }

    @Override
    protected void onDestroy() {
        if (game != null) {
            game.destroy();
            game = null;
        }
        super.onDestroy();
    }
}
