# Automotive AI Assistant — launch checkpoint
Updated: 9 November 2026, Europe/London. This is a checkpoint summary, not a verbatim transcript.

## 9 November morning handover — registration lookup and AI guidance

**Status:** Both workflows failed in signed-in production tests. Pause investigation until the evening session. Recovery is unverified.

- **Registration lookup:** Sign-in and the subscription check returned 200. The Automotive AI service returned 502 on repeated lookup attempts. The configured endpoint matches the official DVSA MOT History API. A credential-free probe from a separate Windows client reached the host over TCP, then received TLS alert 112 (`unrecognized_name`) before any HTTP response. DVSA's public status page showed the API operational. The Windows result is a diagnostic lead for the production failure.
- **AI guidance:** Reopening a saved Transit job bypassed registration lookup. At 08:04:49 UTC, the guidance request returned 503 after 12.8 seconds. Railway logged web research failure, then a provider HTTP 503 in structured guidance. DNS resolved for both providers and traffic was observed in both directions during the relevant attempts. A shared cause is unconfirmed.
- **Production baseline:** Railway deployment `fad5afde-a68f-4e1b-98ce-3daa12a94277`, app commit `732562507a25038dd5e27f922c0d9352d7aee58d`. Morning work consisted of diagnostics and this handover.
- **Evening restart:** Test `gemini-3.7-flash` with the existing key away from customer traffic. Verify structured guidance and Google Search grounding separately, then run a signed-in Transit task end to end before switching production. If the alternate model also returns 503, test a second provider.
- **Lookup fallback:** Add manual year, make, model and optional engine entry to the live new-task screen, which currently requires registration confirmation. Test creating a task through manual entry with lookup unavailable. Send the endpoint, TLS alert and UTC timestamps to DVSA API support and recheck the authenticated lookup after the endpoint responds.
- Keep paid promotion paused until signed-in guidance is reliable.

## 6 November evening handover — Gemini generation incident

**Decision:** Pause incident work overnight. Keep the current Gemini model configuration in place. AI guidance recovery has not been verified.

- A signed-in Ford Transit tyre-pressure request reached production. Vehicle lookup succeeded, but web research and structured guidance each exhausted their then-configured 60-second limit. The app returned HTTP 503 after approximately 120 seconds. A later signed-in retest returned to the saved job and offered Retry. Railway recorded the client connection closing after 27.8 seconds and the server reaching its then-configured 35-second AI deadline. A separate request returned 504 at 35 seconds.
- On the latest production build, the pre-deploy check verified the Gemini key and configured model metadata. A direct native generation probe returned Google HTTP 503 in 2.1 seconds. The OpenAI-compatible generation and Google Search-grounded probes both timed out at 12 seconds. The 28 observed HTTP 401s were all on the app's sign-in check. All 32 observed subscription checks returned 200. Google DNS resolved and Railway recorded zero drops in 12 matching outbound flows. These observations identify a generation failure on our production path. They do not establish Google's internal cause or the incident's full scope. Public users reported intermittent problems on 6 November. No service-wide Gemini API outage was confirmed.
- Latest production deployment: Railway `fad5afde-a68f-4e1b-98ce-3daa12a94277`, status SUCCESS, app commit `732562507a25038dd5e27f922c0d9352d7aee58d`. This build gives AI work a shared 24-second deadline, caps web research at 8 seconds, and logs generation probes at Railway startup. The retry message is present on the live app. These changes limit waiting and help diagnose failures. A successful signed-in AI reply remains unverified.
- **Resume on 7 November:** Refresh the live app and resend the same Transit tyre-pressure question from a signed-in account. Confirm usable guidance reaches the screen and correlate the request with Railway logs. If it still fails, test Gemini 3.7 Flash with the existing key before moving customer traffic. Verify both grounded research and structured guidance. Gemini 3.6 Flash is the next candidate. No separate backup provider is configured.
- **Still open:** Test account deletion with a disposable account, review subscription confirmation wording and refund email delivery, and verify Google Ads campaign status, conversion tag and billing. Keep paid promotion paused until replies are reliable. The £70 ad test was a draft budget, with spend unverified.

## 5 November evening handover

- Production is live and selling. Stripe showed four paid initial invoices on active £9.99/month subscriptions. Matt confirmed customer receipts and subscription confirmations arrived, and verified cancellation, access cutoff and resubscription.
- The 30-second advert is on the website. The 15-second captioned air-filter video was posted organically on TikTok and left unboosted. It had 246 organic views at the reported evening check. Saved video: ForgeLogic-Automotive-AI-15s-Vertical.mp4 (libfile_b3c6512ef66481918732ed4b549afa7f).
- Google Ads: Matt clicked Submit and reached conversion tracking setup with “Test installation”. The setup screen referred to review before ads could go live. Tag installation, campaign delivery and actual spend remain unverified. The £70 test was discussed as a draft budget, not confirmed spend.
- Resume by checking campaign status, billing activity and tag installation in Google Ads before enabling or boosting any paid activity. Separately, test account deletion on a disposable account and review the wording of the subscription confirmation and refund email delivery.
- The Stripe screenshot showing both receipt switches off is the earlier setup image. Matt subsequently confirmed the switches stayed on after refresh.

## 5 November resume notes
Matt signed off the production build and moved the project into advertising. Live billing is active at £9.99/month. Stripe showed four paid initial invoices on active subscriptions. The approved consumer advert is on the website.

## Completed and confirmed
- Production application: the earlier session reported successful deployment, health/schema checks and 40 backend tests passing. Treat those as prior-session verification, not tests repeated during the advert work.
- Registration, privacy, install and company/terms pages: reported checked in the earlier session; checkout terms link corrected to the working www address.
- Backups and expiry: Matt confirmed tested and checked; record as owner-confirmed, not independently re-audited.
- Live £9.99 subscription payment: independently read in the live Stripe API and confirmed successful. App showed an active Automotive subscription.
- Stripe customer receipt settings: screenshot initially showed Successful payments and Refunds OFF. Matt enabled both and refreshed; he confirmed both remained ON.
- Customer receipts: Matt reported that the four live customers received purchase receipts and subscription confirmations. The exact confirmation wording and refund-email delivery were not verified.
- Signed-in cancellation acceptance: Matt confirmed he cancelled a live subscription, checked access after the paid period ended and verified it was blocked, then resubscribed. Marked complete on 5 November 2026 based on Matt's test.
- Consumer workflow observed through Opera: registration lookup returned a 2010 Ford Transit 2402 cc diesel; Matt confirmed the match. Air-filter task produced a three-step plan, video references and illustrated guide links. Next moved from step 1 to step 2. Voice/photo/read-aloud controls were visible; this walkthrough did not test those functions or independently validate every mechanical instruction.

## Advert and website
- Approved final creative: everyday car owner, casual grey jumper and jeans, family hatchback on a home driveway. Matt requested removal of the trade-garage/workshop/overalls theme and approved the consumer direction.
- 30-second, 1920x1080 MP4, British narration, background music, real app screenshot walkthrough, £9.99 monthly price, website call to action.
- Generated narrative is illustrative. The app walkthrough uses actual captured screens; its vehicle example is a Ford Transit. Do not claim the screenshots are the hatchback's own lookup.
- Final file: ForgeLogic-Automotive-AI-Launch-30s.mp4. Persistent file ID: libfile_3fe74c5355fc819197759541f3d296de, version 1 (consumer revision).
- Website embed: native playback controls, playsinline, no autoplay, preload none, poster, English caption track and readable transcript.
- Published assets: /media/automotive-ai-introduction.mp4, .jpg and .vtt.
- Live HTTP checks returned 200 for page/video/poster/captions. Published MP4 hash matched the approved consumer file.
- Website commits: 145055e74ebabff8310d0037267bfe6702fe9f9a (video/embed), 205f53c555f9099699f1bf6dd351ddbb2c824e13 (card sizing and stylesheet cache refresh).
- Website deployment 8d4d380b-b3fd-433f-bd9f-87eebb322791 reached SUCCESS. Matt confirmed he could see the advert on the website.
- Registration smoke tests: 2 passed on the Windows project checkout. The scratch-only run lacked the sibling app checkout; it was not an application regression.
- Full mobile playback and post-sizing visual acceptance were not independently completed.

## Advertising and remaining follow-up
- Start with a small UK advertising test. Use the approved consumer video or a short cut, direct visitors to the Automotive signup page, and track cost per paid subscriber. No advertising spend was committed in this session.
- Verify disposable-account deletion, including linked subscription handling and retained records.
- Review the customer subscription confirmation against the recurring price, renewal and cancellation details, access and agreed terms/version. Test refund-email delivery when applicable.
- Gather device-specific feedback and monitor AI cost, usage, support demand and conversion before increasing spend.

## Feedback to collect
Can testers sign up, pay and get access without help? Are price, renewal and cancellation clear? Is vehicle lookup correct? Are guidance and source references relevant? Do voice/photo/read-aloud and installation work on their device? For problems, capture attempted action, actual result, device/browser and screenshot.

## Distribution decision
Website/browser installation remains the current route. Google Play is a later project requiring store packaging, account verification, store materials and a review of its billing/privacy/deletion requirements. No store submission completed.

## Important access limitation
Stripe's API connection can read payments, but did not expose the customer-receipt toggle. Opera returned "Reading page content is not allowed for AI on this site" for the dashboard. Do not bypass this restriction. The email settings and final receipt delivery were confirmed through Matt's screenshots/actions.

## Useful links
- Website / advert: https://www.forgelogic-tech.co.uk/#diagnostic-copilot
- App: https://auto.forgelogic-tech.co.uk/conversation
- Registration: https://www.forgelogic-tech.co.uk/automotive-register.html
- App repository: https://github.com/mattjprice01-bot/Forgelogic-diagnostic-copilot
- Website repository and this checkpoint: https://github.com/mattjprice01-bot/forgelogic-website
- Stable checkpoint path in Git: docs/AUTOMOTIVE-AI-CURRENT-CHECKPOINT.md

## 5 November next-session notes
Check Google Ads campaign status, billing and tag installation first. The signed-in cancellation check is complete. Use the signup page as the campaign destination and measure paid subscriptions once tracking is verified.

## Closing update: domain and next-session social creative
- Live app domain auto.forgelogic-tech.co.uk: Railway independently reported verified ownership, propagated CNAME to the production app, and a valid HTTPS certificate. Public /conversation and /api/readyz returned HTTP 200; readyz reported status ok. Raw DNS resolution in scratch failed, so DNS propagation was verified via Railway rather than claiming a successful local DNS lookup.
- Keep the approved 30-second advert for the website.
- Next creative task: make more exciting, shorter TikTok/social cuts for everyday car owners. Matt specifically requested shorter runtime because viewers scroll away.
- Proposed starting brief: 10–15 seconds, vertical 9:16; hook in the first 1–2 seconds; one simple maintenance question per clip; large readable captions, quick cuts, energetic music and natural delivery; show real app help and finish with a brief clear call to action.
- Prepare a few hook variations to compare, rather than assuming one length or creative will perform best. Stay with ordinary people, casual clothes and their own cars; avoid workshop/overalls framing and unsupported savings or guaranteed repair claims.
- The first social cut is published organically on TikTok. Paid delivery and spend are unverified.
