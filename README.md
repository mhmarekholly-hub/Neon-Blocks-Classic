# Neon Blocks Classic — Android prototype

This is an Android WebView game with offline play, saved games, a standalone home screen, touch controls and 30 interface languages. The optional Firebase leaderboard uses internet access.

## Build from an iPad (GitHub Actions)
1. Create a GitHub repository (private is fine) in Safari.
2. Upload the **contents** of this ZIP into the repository, preserving directories including `.github/workflows/build-android.yml`. GitHub web upload may not reliably upload nested folders; the easiest reliable method is a Git client or a computer, or use GitHub Codespaces to unzip and commit the project.
3. Open **Actions** > **Build Android APK** > **Run workflow** (or push to `main`).
4. After the build finishes, open the workflow run > **Artifacts** > **Neon-Blocks-Android-APK**. Download and extract the APK ZIP.
5. Transfer `app-debug.apk` to an **Android phone** and install it after granting installation permission to the file manager/browser. The iPad cannot install APK files.

Alternatively build locally using Android Studio (JDK 17, Android SDK 36, Gradle 8.11.1): `gradle :app:assembleDebug`.

## Google Play preparation

See [GOOGLE-PLAY.md](GOOGLE-PLAY.md) for account setup, release signing, planned post-game ads and tester recruitment. CI also builds an **unsigned AAB preview** and runs release lint. This preview is not a Play upload. The separate manual signed-bundle workflow requires the owner's upload-keystore secrets and never publishes to Play automatically.

## Status and limitations
- This is a test/debug build, **not** a signed Google Play release.
- No AdMob SDK, analytics, payments, or privacy policy is included. Ads require further integration, user consent where applicable, and Google Play compliance.
- No automated Android-device test was run in this environment.
- Before public release: test different screen sizes, verify game mechanics, create original app icon, verify branding/IP rights, add proper release signing, privacy disclosures, and Play Store assets.
- Android debug APK should only be installed from your own trusted build.
