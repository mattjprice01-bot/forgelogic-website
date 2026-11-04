# Automotive website and launch review — 4 November 2026

## Confirmed application and customer testing
- Matt reports production payment, activation, refresh, logout/login and billing invoice checks passed. These are customer-reported checks, not a new agent payment test.
- Production custom domain auto.forgelogic-tech.co.uk: Railway reports ownership verified and valid TLS certificate. Its CNAME currentValue is stale in the platform response; direct HTTPS readiness returned 200 with status ok and install.html returned 200.
- Manifest retrieved: ForgeLogic Automotive AI Assistant, standalone, launch /conversation, 192/512 PNG icons.
- Website source: mattjprice01-bot/forgelogic-website; live Railway source branch main. Prepared install branch eb5b748 was not yet on main when this review started.

## Website changes
- Publish prepared branded Install/Open/Create account links and show GBP9.99 monthly recurring subscription prominently.
- Explain AI usage limits, AI safety limitations and installation requirements.
- Link automotive registration to separate automotive subscription/cancellation and privacy pages.
- Preserve US30 pricing and product terms separately.
- No new real charge, refund, cancellation or synthetic customer registration performed.

## Legal and privacy findings — unresolved before declaring launch compliance
1. Supplier identity: verified company number, registered office and business correspondence address are missing from the reviewed public material. The garage address must not be assumed to be the software company's legal address. Obtain verified company details and display where required. GOV.UK pre-contract guidance requires business/contact/address information and tax-inclusive pricing: [official guidance](https://www.gov.uk/online-and-distance-selling-for-businesses).
2. Checkout contract: source checkoutParams has no terms-consent collection or express immediate-performance request, and no versioned consent/durable contract-confirmation implementation was evidenced. The correct treatment of ongoing SaaS versus digital content needs review. Adding website links does not fix checkout consent or confirmation. [Regulation 30](https://www.legislation.gov.uk/uksi/2013/3134/regulation/30?view=plain+extent) addresses the 14-day period; [official online selling guidance](https://www.gov.uk/online-and-distance-selling-for-businesses/online-selling) addresses digital-content consent. No waiver or new refund policy has been assumed.
3. Privacy: application uses Google Gemini for relevant questions/history/photos/research and Google natural speech; browser dictation uses browser recognition. Railway hosts database and private photos; Stripe handles payment. Actual provider agreements, paid/free API data-use treatment, international transfer countries/mechanism and retention schedules still require verification. Do not promise no AI training, UK-only processing or automatic account erasure without evidence. [ICO information requirements](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/?q=consent).
4. Deletion: case API deletes related DB records and attempts photo/research cleanup. Failed cleanup only logs a warning; an automated orphan-cleanup process and backup expiry/deletion handling were not evidenced. Account-wide erasure workflow and operational response procedure require verification.
5. Tax: live price metadata previously recorded tax_behavior=unspecified. Checkout source does not request automatic_tax. Confirm VAT registration and treatment with accountant; do not claim VAT-inclusive/exempt status from this metadata alone. Do not change the authorised GBP9.99 charge.
6. Operations: Matt reports backups configured; isolated restore test remains unverified. Live renewal/failure handling and full new-domain browser registration/payment return journey remain to be checked without repeating a real purchase unnecessarily.

## Scope of conclusion
Website copy and notices improve disclosure; this review is not legal sign-off. Product terms should receive qualified review for the actual operating model. No completed compliance certification is claimed.

## Sources
- GOV.UK online and distance selling: https://www.gov.uk/online-and-distance-selling-for-businesses
- GOV.UK online selling: https://www.gov.uk/online-and-distance-selling-for-businesses/online-selling
- Consumer Contracts Regulations 2013, regulation 30: https://www.legislation.gov.uk/uksi/2013/3134/regulation/30?view=plain+extent
- ICO privacy information requirements: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/?q=consent
