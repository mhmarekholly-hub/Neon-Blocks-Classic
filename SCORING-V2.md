# Menu, saved games and scoring v2

## Behavior

- Title menu: New game, Continue (when a valid save exists), Leaderboard.
- Menu and leaderboard pause the game. A new game requires confirmation when a game is in progress; returning to the menu preserves it.
- Visibility loss, focus loss, page exit and Android lifecycle callbacks save and pause. Returning never resumes automatically.
- A versioned local save includes the board, active/next piece, remaining bag, score, lines, level and gravity accumulator. Moves, rotations and piece locks also checkpoint progress. Invalid saves are discarded. Game over removes the save.
- Line clears award 100 / 300 / 500 / 800 times the level **before** clearing. Neither drop method awards points.
- Local bests use `neonBlocksBestV2`; the old local best remains intact.
- Menu and leaderboard text covers all 30 existing languages.

## Firebase rollout — no deletion

Both queries and uploads now use **`scores_v2`** instead of `scores`. Existing scores are not deleted, copied or overwritten. Existing nickname opt-in and anonymous identity are retained. Only completed v2 games submit scores.

Before distributing the new APK, add a match for `scores_v2` to the existing Firestore rules. Keep all existing rules for `scores` unchanged so older app versions continue to work. The fragment below belongs **inside** the existing `/databases/{database}/documents` match; review it alongside the current rules. This repository does not deploy Firebase rules automatically.

```text
match /scores_v2/{playerId} {
  allow read: if request.auth != null;
  allow create, update: if request.auth != null
    && request.auth.uid == playerId
    && request.resource.data.keys().hasOnly(['nickname', 'country', 'score'])
    && request.resource.data.nickname is string
    && request.resource.data.nickname.size() >= 2
    && request.resource.data.nickname.size() <= 18
    && request.resource.data.country is string
    && request.resource.data.country.matches('([A-Z]{2}|--)')
    && request.resource.data.score is int
    && request.resource.data.score > 0
    && request.resource.data.score % 100 == 0
    && (resource == null || request.resource.data.score >= resource.data.score);
  allow delete: if false;
}
```

No Firebase administrator credentials are stored here. Live rules and permissions must be verified in the Firebase project. Client-side scoring is not authoritative anti-cheat; that would require a separate server-side design.

## Verification

Run `node --test tests/game.test.cjs` for game behavior and localization coverage. Run `gradle :app:assembleDebug --no-daemon` with JDK 17 and Android SDK 35 to build. The GitHub workflow runs both for the feature branch and pull requests.

On a real Android device verify: Home, app switching, lock/unlock, process termination/relaunch, Continue, new-game cancellation, leaderboard opening/closing, offline behavior, and writes to `scores_v2` after its rules are configured.
