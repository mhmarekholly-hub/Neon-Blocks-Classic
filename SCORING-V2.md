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

On **2026-11-11**, the rules in [firestore.rules](firestore.rules) were published to project **neonblocks-31ee1**, database **(default)**, edition **Standard**, location **eur3**. The original scores match and its validator were preserved; only the scores_v2 match and its helpers were added. No score documents were created, modified or deleted during deployment or testing. This repository does not deploy rules automatically.

The v2 rules require Firebase Authentication (including the app's anonymous sign-in). Each player can create or update only their own UID document, containing exactly nickname (2–18 characters), country (two uppercase letters or --), and a positive integer score that is divisible by 100 and within JavaScript's safe integer range. Updates cannot lower the previous score. List queries require a limit of at most 20. Deletes and unrelated paths remain denied.

### Validation and rollout evidence

- Rules Playground compiled the draft without syntax errors.
- Unauthenticated get: denied. Authenticated get: allowed.
- Valid create by the owning UID: allowed (simulation only).
- Valid payload written by a different UID: denied (simulation only).
- Create missing required country/score fields: denied (simulation only).
- Live anonymous authentication: HTTP 200.
- Live application query (score descending, limit 20) against scores_v2: HTTP 200, zero rows at deployment time; previously HTTP 403.
- The same live query against legacy scores: HTTP 200, existing data retained.

Additional v2 rule review: anonymous unauthenticated reads, cross-user writes, ownership hijacking and document deletion are denied. Both create and update call the same validator, so missing/extra fields, wrong types, oversized strings, negative/overflow/non-line scores and schema pollution are rejected. Path ownership is fixed by the document ID. Updates cannot reduce the stored score. No role, timestamp, path-reference, counter or subcollection fields are accepted, so those escalation/replay vectors have no permitted schema or match. Queries without the bounded limit are denied. Only the intended public nickname, country and score are readable; no email or private profile fields can be stored in v2 records. The inherited legacy rules were preserved rather than broadened.

These are prototype Security Rules for review before broad release. Schema and ownership checks are not authoritative anti-cheat: client-provided scores still need server validation for competitive integrity. No Firebase administrator credentials are stored here. An Android device test is still needed to verify any separate device/network failure reported as Failed to fetch.

## Verification

Run `node --test tests/game.test.cjs` for game behavior and localization coverage. Run `gradle :app:assembleDebug --no-daemon` with JDK 17 and Android SDK 35 to build. The GitHub workflow runs both for the feature branch and pull requests.

On a real Android device verify: Home, app switching, lock/unlock, process termination/relaunch, Continue, new-game cancellation, leaderboard opening/closing, offline behavior, and writes to `scores_v2`.
