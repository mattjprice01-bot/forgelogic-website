# FORGELOGIC — MASTER SOURCE OF TRUTH

**Authority:** This file is the canonical project-control record for ForgeLogic / US30 Copilot.  
**Last reconciled:** 26 September 2026  
**Rule:** If chat recollection conflicts with this file, verify the live system and update this file. Do not silently revive superseded decisions.

---

## 1. CURRENT AUTHORITATIVE STATE

### Commercial product — US30 Copilot RC1
- **RC1 is the protected commercial baseline.**
- Do not casually tune RC1 from individual trades or isolated observations.
- Core commercial architecture includes account/auth flow, Stripe-linked entitlement, multi-user isolation and the established market/data workflow.
- RC1 UI requirements already agreed include modernised market visuals, permanently active learning/analysis, neutral scanning before qualification, and separate **direction identified** vs **entry ready** states.

### RC1.1 Shadow Intelligence
- RC1.1 Shadow is a **separate experimental evidence-collection system**, not the production baseline.
- Development line: `rc1.1-development` / RC1.1 Shadow Intelligence.
- Separate Railway deployment and isolated Postgres database.
- Production mirrors TradingView packets to Shadow asynchronously/fail-open; Shadow must not interrupt production behaviour.
- Purpose: investigate RC1 thesis fragmentation, especially `INVALIDATED → RESETTING → REQUALIFIED`, repeated re-arming and false resets.
- Prior analysis indicated roughly 160 recorded trades require deduplication into unique market episodes before changing logic/thresholds.
- **Collection window:** leave Shadow collecting through **Friday 2 October 2026**.
- **Friday review:** analyse thesis continuity, false resets, missed moves, entry-readiness timing, Shadow-vs-RC1 differences and unique invalidation episodes.
- Only promote a Shadow change into RC1 when evidence shows a measurable improvement; do not tune RC1 on single examples.

### v7.9.x
- v7.9.x is a **separate personal/swing-trading application**.
- It is not the commercial RC1 baseline and must not be merged conceptually or operationally into RC1 without an explicit decision.

---

## 2. WEBSITE / COMMERCIAL PLATFORM

### Production
- Repository: `mattjprice01-bot/forgelogic-website`.
- `main` is the protected production website baseline.
- Existing customer-facing pages/configuration must remain intact until the replacement candidate passes testing.

### Replit visual redesign
- Replit project: `RedLustrousChemistry`.
- Safe GitHub branch: `replit-visual-optimisation-2026-09-26`.
- Replit visual source has been captured under `replit-prototype/` on that branch.
- Portable React/Vite conversion is prepared: standalone `main.tsx`, Vite config, TypeScript config and reduced dependency set.
- **Blocker:** clean build has not yet been proven. Local dependency installation repeatedly exceeded the available execution window before TypeScript/Vite compilation began.
- **Do not merge the redesign into `main` until build + integration + customer-flow checks pass.**

### Website integration sequence
1. Prove portable Replit candidate builds cleanly in an environment without the local package-install timeout.
2. Integrate visual candidate with existing production functionality.
3. Preserve registration/account, subscription/billing, legal/risk/disclosure and US30 customer journey.
4. Run responsive/browser/performance checks.
5. Run full customer-flow acceptance test.
6. Only then approve merge/deployment.

---

## 3. CUSTOMER / BILLING ARCHITECTURE

- Website/beta API handles marketing, intake and onboarding.
- RC1/Stripe entitlement should remain the authoritative access decision; avoid creating competing entitlement truth in duplicate systems.
- Full customer-flow/email testing is deliberately deferred until website integration is complete.
- Required acceptance journey: registration → approval/account → email → Stripe/payment state → entitlement → Copilot access → cancellation/failure-state behaviour.

---

## 4. FCA / REGULATORY

### Current route
- Previous **Innovation Pathways** approach did not progress and is historical, not pending.
- Current route: **FCA Pre-Application Support Service (PASS) — Consumer Investments**.
- PASS reference recorded by ForgeLogic: **0004917147**.
- This is a pre-application/perimeter discussion request, **not an FCA authorisation application**.
- Core question: whether real-time market analysis, directional bias, entry readiness, suggested zones, invalidation levels and targets constitute investment advice or another regulated activity in the proposed customer context.

### Current action
- FCA interview preparation pack completed on 26 September 2026.
- **Physical task:** print and read the 11-page FCA PASS interview pack.
- Await FCA response / meeting arrangement.
- Do not materially change the product’s regulatory characteristics without considering perimeter implications.
- After FCA guidance: determine required permissions/authorisation route and align launch wording/product structure accordingly.

---

## 5. SECURITY STATUS

### Completed first-pass findings
- No obvious committed `.env` files, private keys, database URLs, Stripe live secret keys, GitHub tokens or obvious API-secret assignments were found in the website/Replit source audit.
- Railway keeps important secrets/configuration as server-side environment variables.
- Backend already uses password hashing, secure/HttpOnly/SameSite session cookies, CSRF protection, parameterised SQL, one-time hashed invite tokens with expiry and Stripe webhook signature verification.

### Pre-launch hardening still required
1. Add rate limiting / brute-force protection to public registration, customer login and admin login.
2. Add security headers: HSTS, CSP, `X-Content-Type-Options`, frame protection and suitable referrer policy.
3. Tighten CORS to only the final required HTTPS ForgeLogic origins.
4. Final Railway environment-variable/credential sanity review and rotate credentials where warranted.
5. Review purpose/retention/privacy wording for stored applicant IP address and user-agent data.

**Security state:** fundamentally sound first pass; launch hardening remains mandatory.

---

## 6. LAUNCH CONTROL — ORDERED PATH

1. **RC1.1 Shadow:** leave collecting until Friday 2 October 2026.
2. **Website:** prove portable Replit build.
3. **Website:** complete integration without disturbing production functionality.
4. **Security:** complete hardening list.
5. **Customer flow:** end-to-end registration/email/payment/entitlement/access test.
6. **FCA:** receive/respond to PASS guidance; determine permissions route.
7. **Legal/disclosures:** final wording aligned with actual product and FCA position.
8. **Production candidate:** mobile/browser/performance/broken-link/error checks.
9. **Deploy:** approved candidate only; retain rollback path.
10. **Production acceptance:** one complete real-world customer journey.
11. **Monitoring/analytics:** uptime, errors, traffic and conversion monitoring.
12. **Search/marketing:** Search Console, sitemap/indexing, Google presence, Facebook/social launch material.
13. **Public launch:** only after launch gates above are closed.

---

## 7. NEXT ACTIONS

### Next active engineering action
**WEBSITE-01 — Prove the portable Replit visual candidate builds cleanly.**
- Use GitHub Actions, Railway, Replit or a suitable local environment that can complete dependency installation.
- Resolve actual compiler/import/build errors if any.
- Do not merge to `main` merely because source files look correct.

### Dated evidence action
**SHADOW-01 — Friday 2 October 2026: analyse RC1.1 Shadow evidence.**
- Deduplicate events into unique market episodes.
- Review `INVALIDATED → RESETTING → REQUALIFIED` continuity.
- Quantify false resets/re-arms and missed moves.
- Compare RC1 vs Shadow behaviour.
- Recommend promotion only where evidence supports measurable improvement.

### Waiting external action
**FCA-01 — Await FCA PASS response.**
- Print/read interview pack while waiting.
- When meeting is scheduled, refresh pack against current product state.

---

## 8. BACKLOG / FUTURE R&D — NOT CURRENT LAUNCH SCOPE

### Advanced analytics / quantum R&D
- Investigate quantum, quantum-inspired and hybrid quantum/classical ML only in isolated experimental work.
- Relevant areas: ensemble modelling, regime detection, false-breakout detection, probability calibration and other analytical methods.
- No technique enters RC1 without measurable out-of-sample improvement over the existing engine.
- Do not use “quantum” as marketing decoration.

### Visual technology stockpile
- WebGL fluid simulation, particle systems, Float32Array GPU buffers, Three.js/WebGL shaders, RK4/dynamical-system trajectories and related visual techniques are retained as possible future website/Copilot presentation layers.
- These are UX/visual technologies, not analytical-engine requirements.
- Use selectively so readability and performance are not compromised.

### Nova / Jarvis
- Personal AI/Nova/Jarvis work is a separate workstream.
- Do not mix Nova development state into ForgeLogic RC1 production control.

---

## 9. SUPERSEDED / HISTORICAL DECISIONS

- Innovation Pathways is **not pending**; PASS is the current FCA route.
- v7.9.x is **not** the commercial RC1 baseline.
- Replit redesign is **not** production merely because it exists in GitHub; build/integration verification is outstanding.
- Quantum/WebGL/particle concepts are **not** launch requirements.
- Individual trade anecdotes are **not** sufficient evidence to change RC1 logic; Shadow evidence and episode-level analysis control that decision.

---

## 10. DECISION LOG

### 25 September 2026
- Protect RC1 commercial baseline.
- Use separate RC1.1 Shadow Intelligence deployment/database for evidence gathering.
- Investigate thesis fragmentation and deduplicate recorded trades into unique market episodes before altering logic.

### 26 September 2026
- Replit visual source captured safely on `replit-visual-optimisation-2026-09-26`; production `main` not merged.
- Portable Replit conversion prepared; build verification remains outstanding because dependency install testing timed out before compilation.
- FCA PASS interview pack completed; print/read and await FCA response.
- Security first pass completed; no obvious source-secret exposure found; launch-hardening list established.
- Email/customer journey testing deferred until website integration so the whole customer flow can be tested in one controlled pass.
- RC1.1 Shadow evidence review scheduled for Friday 2 October 2026.
- Established this Master Source of Truth as the canonical project-control record.

---

## 11. OPERATING RULES FOR FUTURE CHATS

When the user says **“Sync ForgeLogic”**:
1. Read this file first.
2. Check the relevant live GitHub/Railway state when it could have changed.
3. Continue from `NEXT ACTIONS`; do not restart completed work.
4. Keep RC1, RC1.1 Shadow, v7.9.x, website, FCA and future R&D as distinct workstreams.
5. Record material decisions, blockers and completed actions back into this file at the end of meaningful work.
6. Move superseded information into history rather than deleting the reasoning trail.
7. Never treat chat memory alone as authoritative when this file or live-system evidence is available.
