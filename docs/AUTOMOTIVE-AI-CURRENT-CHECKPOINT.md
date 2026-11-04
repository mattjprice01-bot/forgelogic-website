# Automotive AI Assistant — launch checkpoint
Updated: 4 November 2026, Europe/London. This is a checkpoint summary, not a verbatim transcript.

## Resume here
The production app and website are online, live billing is active at £9.99/month, and a real payment succeeded. The approved consumer advert is on the website. Friends are testing the customer journey. This is a small pilot, not a completed public advertising rollout.

## Completed and confirmed
- Production application: the earlier session reported successful deployment, health/schema checks and 40 backend tests passing. Treat those as prior-session verification, not tests repeated during the advert work.
- Registration, privacy, install and company/terms pages: reported checked in the earlier session; checkout terms link corrected to the working www address.
- Backups and expiry: Matt confirmed tested and checked; record as owner-confirmed, not independently re-audited.
- Live £9.99 subscription payment: independently read in the live Stripe API and confirmed successful. App showed an active Automotive subscription.
- Stripe customer receipt settings: screenshot initially showed Successful payments and Refunds OFF. Matt enabled both and refreshed; he confirmed both remained ON.
- Existing payment receipt: Matt manually sent it from the payment detail page and confirmed arrival. Manual delivery is verified. Automatic delivery on a NEW payment still needs a real customer confirmation.
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

## Still outstanding — do not mark complete
1. Friends' fresh-user tests: signup, consent, checkout, return to app, active subscription access, installation/use on their devices.
2. Confirm an automatic customer receipt arrives for a NEW successful payment after enabling the setting. Refund email delivery itself has not been tested.
3. Test live cancellation: renewal stops as intended and access ends at the correct time. Do not cancel Matt's active subscription without instruction.
4. Test account deletion with a disposable test account, including linked subscription handling and retained records. Do not delete the owner's account.
5. Configure and verify customer subscription/contract confirmation containing product, recurring price, renewal/cancellation, access and agreed terms/version. Matt confirmed a custom welcome/contract email has not been set up. A Stripe payment receipt is not evidence that this additional confirmation content is delivered.
6. Collect usability feedback and check vehicle advice against appropriate vehicle-specific sources; visible links alone do not verify accuracy or video suitability.
7. Fix material/repeated issues, then prepare a small advertising test. No ad campaign has been activated or ad spend committed in this work.
8. Monitor actual AI costs, usage limits, customer support and conversion before increasing advertising.

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

## Next session
Read this checkpoint first. Ask for friends' results; verify automatic receipt delivery, cancellation and disposable-account deletion; implement the missing subscription confirmation; resolve findings before starting a small advertising trial. Older notes saying billing is disabled or production is only a placeholder are historical.

## Closing update: domain and next-session social creative
- Live app domain auto.forgelogic-tech.co.uk: Railway independently reported verified ownership, propagated CNAME to the production app, and a valid HTTPS certificate. Public /conversation and /api/readyz returned HTTP 200; readyz reported status ok. Raw DNS resolution in scratch failed, so DNS propagation was verified via Railway rather than claiming a successful local DNS lookup.
- Matt deferred cancellation and account-deletion tests until the next session, after allowing the live system to sit for approximately 24 hours. No reminder or automatic test was scheduled.
- Keep the approved 30-second advert for the website.
- Next creative task: make more exciting, shorter TikTok/social cuts for everyday car owners. Matt specifically requested shorter runtime because viewers scroll away.
- Proposed starting brief: 10–15 seconds, vertical 9:16; hook in the first 1–2 seconds; one simple maintenance question per clip; large readable captions, quick cuts, energetic music and natural delivery; show real app help and finish with a brief clear call to action.
- Prepare a few hook variations to compare, rather than assuming one length or creative will perform best. Stay with ordinary people, casual clothes and their own cars; avoid workshop/overalls framing and unsupported savings or guaranteed repair claims.
- Social cuts are planned, not produced or published. Advertising spend remains unstarted; acceptance checks still come first.
