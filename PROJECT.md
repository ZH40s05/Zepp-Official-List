# Zepp Official List Project Notes

## Scope

- Type: ZeppOS page-level list library with a bundled example app
- Status: maintained library
- Target devices: round 480px and square 390px example profiles
- Entry files: `zolist.js`, `example/utils/zolist.js`

## Current Behavior

- Main workflow: build native-style list rows with touch, physical-key focus, and crown scrolling.
- Touch scrolling hides focus while moving and rebuilds it on the item nearest the screen center only after scrolling completes.
- Crown scrolling keeps focus visible and switches it to the nearest centered item after every crown update; settling only performs a final calibration.
- Each real-time crown focus change uses a 20ms `STRONG_SHORT` scene when supported; legacy runtimes use a tested short-medium fallback. `crownVibrate: false` disables both.

## Build And Verification

- Package check: `npm pack --dry-run`
- Example build: run `zeus build` in `example/`
- True-device note: a directly compiled example on Balance only vibrated after switching to the documented `setMode()` → `start()` sequence; the new scene path and legacy fallback still require follow-up device verification.

## Local Decisions

- Decision: keep touch focus deferred until `scroll_complete_func`, but update crown focus immediately after each scroll-position change.
- Reason: touch focus should represent the final released position, while the crown needs continuous selection feedback as rows cross the screen center.
- Date: 2026-07-19
- Decision: trigger haptic feedback once per real-time crown-driven focus-index change, not on every raw crown event.
- Reason: this maps feedback to a visible item switch while avoiding duplicate vibration when several crown events remain within the same row.
- Date: 2026-07-19
- Decision: prefer the API_LEVEL 3.6 `STRONG_SHORT` Action and fall back by capability, not by an assumed Zepp OS version threshold.
- Reason: the exact legacy mode-mapping fix point around Zepp OS 4 is unknown; feature detection avoids encoding an unsupported version claim.
- Date: 2026-07-19
- Decision: on the API_LEVEL 2.0 path, call `setMode(VIBRATOR_SCENE_DURATION)` before `start()`.
- Reason: Balance confirms that `setMode()` → `start()` is required to produce vibration, while Shimmer true-device notes show that affected legacy firmware maps `DURATION` to a short-medium pulse. No legacy mode has verified exact short-strong output.
- Date: 2026-07-19

## Dependencies And Reuse

- Shared code: keep `zolist.js` and `example/utils/zolist.js` identical.
- Reusable ZeppOS docs consumed: official `Vibrator` API (legacy API_LEVEL 2.0 and scene API_LEVEL 3.6) plus `NormalApps/已提交/Shimmer/page/page.js` true-device mappings.
- Knowledge conclusion type: official API plus true-device confirmed compatibility behavior.

## Open Issues

- Re-test both the scene API and legacy fallback on the reporting Balance device; record firmware/API_LEVEL when available.
- Identify the exact firmware or Zepp OS release that corrected the legacy mode mapping.
