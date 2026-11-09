package com.neonblocks.classic;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
  private WebView game;
  @Override public void onCreate(Bundle state) {
    super.onCreate(state);
    getWindow().getDecorView().setSystemUiVisibility(5894 | 1024 | 512);
    game = new WebView(this);
    game.setBackgroundColor(0xff0b1020);
    game.setWebViewClient(new WebViewClient());
    game.setWebChromeClient(new WebChromeClient());
    WebSettings settings = game.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setAllowFileAccess(true);
    settings.setAllowFileAccessFromFileURLs(false);
    settings.setAllowUniversalAccessFromFileURLs(false);
    game.setOverScrollMode(View.OVER_SCROLL_NEVER);
    setContentView(game);
    game.loadUrl("file:///android_asset/index.html");
  }
  @Override protected void onDestroy() { if (game != null) { game.destroy(); game = null; } super.onDestroy(); }
}
