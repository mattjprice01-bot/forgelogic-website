# ForgeLogic US30 Copilot — V7.9.2 Source of Truth

**Last updated:** 26 September 2026
**Status:** LIVE TEST BUILD DEPLOYED — HOLD UNTIL FRESH MARKET DATA
**Purpose:** Canonical chat/development handover for the V7.9.2 swing engine. Read this file before continuing V7 work in any future ChatGPT conversation.

## 1. Current Position

V7.9.2 is the live experimental/proving version of the ForgeLogic US30 swing engine. It remains separate from RC1 development. RC1 is the main product baseline; proven V7 improvements can later be deliberately merged into RC1.

V7.9.2 production is hosted on Railway project `v 7.9.2`, service `web`, production environment. Source code is in GitHub repository `mattjprice01-bot/v7-8.2`, branch `main`.

On 26 September 2026 the revised `server.py` was committed to GitHub and Railway automatically deployed it successfully. Railway reported a successful build/container start, FastAPI/Uvicorn started normally, and the Databento YM background worker/subscription started. The only observed startup warning was FastAPI deprecation of `@app.on_event("startup")`; this is non-fatal and can be modernised later.

## 2. Why V7.9.2 Was Changed

Historical V7.9.1 behaviour showed that the engine was missing some very large US30 moves that were visually obvious to a skilled human observer.

A compressed analysis copy of the historical SQLite database was extracted from Railway and analysed. The database contained **24,773 stored snapshots** covering approximately 27 August to 22 September 2026, plus the clean V7.9.1 ENTRY_READY prediction history available at the time of analysis.

The important diagnosis was that V7.9.1 was often **seeing the correct directional move internally but refusing to promote it into a usable public signal**.

### Key example — 10 September 2026

During a major bearish session:

- Internal direction: SHORT on **1,380 / 1,380 snapshots**.
- Public direction: NONE on **1,380 / 1,380 snapshots**.
- State: WATCHING throughout.
- Timing aligned: approximately **1,020 / 1,380 (74%)**.
- Databento confirmed: approximately **134 / 1,380 (9.7%)**.
- Contradiction flag: **1,380 / 1,380 (100%)**.
- HTF zone confirmed: **0 / 1,380**.
- Raw probability remained roughly **47.4–54.6%**.

Conclusion: the model was not blind to the bearish move. Its downstream qualification architecture was vetoing its own directional analysis.

## 3. Root Cause Identified

The historical replay indicated a structural problem rather than a one-day glitch:

1. Contradiction handling could behave like a blanket veto.
2. Higher-timeframe context could dominate shorter-horizon evidence too strongly.
3. HTF-zone confirmation was too restrictive for genuine momentum/breakout moves that did not originate neatly from a zone.
4. Databento/order-flow confirmation was effectively too binary in the qualification path.
5. Persistent directional agreement over many snapshots was not being given enough value.
6. Simply lowering thresholds produced poor replay results because entries were often triggered too early and stopped before the major move developed.

Therefore the fix is **not** to make the engine generally less selective.

## 4. Decision Architecture Direction

The intended architecture is a two-stage/two-route approach:

### Conservative route

Preserve the existing high-quality confirmation pathway for traditional zone/fully-confirmed entries.

### Momentum / continuation route

Allow a strong persistent directional thesis to survive conflicting slower context, but require sufficient timing/momentum/context/order-flow support before ENTRY_READY.

Core principles agreed:

- Direction can be identified internally earlier than entry timing.
- Persistent direction should accumulate evidential value.
- Weekly/slow HTF disagreement is context/caution, not automatically an absolute veto against a strong daily/4H/1H move.
- Contradictions should eventually be classified by source, timeframe, magnitude and relevance rather than represented as one undifferentiated boolean.
- HTF zones remain useful but should not be mandatory for every momentum expansion.
- Databento should contribute graded evidence; genuinely adverse order flow can remain a strong blocker.
- ENTRY_READY must remain difficult. Do not solve missed moves by making the system trigger-happy.

## 5. Replay Test Finding

Alternate decision rules were replayed against the stored historical snapshots.

Important result: **simply loosening vetoes performed poorly**. Many early entries would have hit the 50-point stop before the eventual directional move developed.

This established that V7.9.1 often had useful directional intelligence but insufficient entry timing. The correct improvement is therefore:

**form/retain the directional thesis earlier, then require a dedicated momentum/timing confirmation before ENTRY_READY.**

## 6. Existing V7 System Features to Preserve

The V7 codebase includes:

- TradingView webhook ingestion.
- Multi-timeframe scoring.
- FRED macro context.
- News and intermarket context.
- Databento YM live order-flow feed.
- Session awareness.
- HTF swing-zone analysis.
- Persistent SQLite snapshots.
- Persistent signal state.
- Prediction history and self-test performance.
- Clean probability calibration gates.
- Manual active-trade tracking.
- 50-point execution stop logic with separate structural invalidation.
- TP1 at approximately 1.5–2.0R and TP2 at approximately 2.5–3.0R.
- Trade-health/risk alerts.
- Phone notifications with deduplication/cooldowns.
- Public direction hidden until ENTRY_READY/ACTIVE_TRADE.

Do not casually remove these while developing the momentum pathway.

## 7. Historical Prediction Baseline

At the point of the database analysis there were five clean V7.9.1 ENTRY_READY predictions using the then-current 100-point target / 50-point stop test definition. Three reached target and two reached stop. This sample is far too small to treat as statistically reliable; retain it as baseline history only.

Probability calibration intentionally remains unavailable until sufficient clean resolved samples exist. Do not present an uncalibrated score as an empirically proven win probability.

## 8. Current Live Deployment State

**Date deployed:** 26 September 2026

The revised V7.9.2 server file was committed manually to GitHub and automatically deployed by Railway.

Confirmed after deployment:

- Railway deployment status: SUCCESS.
- Container started.
- Uvicorn/FastAPI application startup completed.
- Databento SDK/key detected.
- Databento dataset: `GLBX.MDP3`.
- Databento schema: `mbp-1`.
- Continuous YM subscription queued.
- No fatal import/startup errors observed.

Because deployment occurred on Saturday night, the revised decision logic has **not yet been validated against a meaningful fresh live US30/YM market session**.

## 9. NEXT ACTION — DO THIS FIRST

When market data resumes, do **not** immediately change more code.

First validate V7.9.2 live:

1. Confirm TradingView feed is fresh/live.
2. Confirm Databento YM is live and updating.
3. Confirm fresh snapshots are being written after the new deployment.
4. Observe internal direction persistence versus public state transitions.
5. Watch for WATCHING → SETUP_FORMING → ENTRY_READY behaviour.
6. Specifically record any large directional move that V7 identifies internally but still fails to qualify.
7. Record false/early momentum qualifications as carefully as missed moves.
8. Compare new live behaviour with the historical V7.9.1 failure pattern before altering thresholds.

The objective is not maximum signal frequency. The objective is to catch more genuine large moves **without materially increasing bad entries or early stop-outs**.

## 10. RC1 Relationship

Keep V7.9.2 and RC1 conceptually separate during testing.

- **RC1:** primary ForgeLogic product development baseline.
- **V7.9.2:** swing-engine proving ground / live experimental branch.
- **This file:** canonical V7.9.2 chat/development handover.
- **Historical SQLite analysis database:** evidence/test bench, not production source code.

Only port V7 logic into RC1 after it demonstrates measurable improvement in replay and/or live out-of-sample behaviour.

## 11. Safety Rules for Future Development

- Do not lower all thresholds just to increase signals.
- Do not erase the conservative pathway.
- Do not allow persistence alone to fire ENTRY_READY.
- Do not treat every contradiction as equally important.
- Do not let one slow timeframe automatically smother strong relevant shorter-horizon evidence without justification.
- Do not claim statistical improvement from tiny samples.
- Preserve historical snapshots/predictions so before/after comparisons remain possible.
- Prefer measured out-of-sample improvement over attractive backtest-only behaviour.

## 12. Files / Repositories

- V7 code repository: `mattjprice01-bot/v7-8.2`
- V7 deployed branch: `main`
- Railway project: `v 7.9.2`
- Railway service: `web`
- Chat/source-of-truth backup location: `mattjprice01-bot/forgelogic-website/V7_9_2_SOURCE_OF_TRUTH.md`
- Historical analysis archive used on 26 September 2026: `v7_swing_analysis.db.gz`

---

### Resume instruction for ChatGPT

When the user asks to continue V7.9.2 development, read this file first, then inspect the current GitHub `mattjprice01-bot/v7-8.2` source and Railway deployment state before making claims about what is currently live. Treat live market validation of the 26 September 2026 decision-architecture changes as the next unresolved engineering task unless this file has subsequently been updated.