# ForgeLogic Launch/FCA Checkpoint — 29 September 2026

Status: RC1 launch/compliance checkpoint.

## Decision
Do not make further compliance-driven changes to RC1 until the external UK regulatory perimeter opinion is received and reviewed.

## Two possible routes
1. If a genuine customer-controlled analytical architecture can operate outside FCA authorisation, implement the required controls and preserve as much useful RC1 functionality as legally supportable.
2. If the intended functionality remains regulated despite genuine user controls, stop weakening RC1 and investigate the appropriate FCA authorisation route for the full product.

## Issues under review
- Article 53 regulated investment advice and FCA guidance on software-generated signals.
- Whether sufficient customer control over analytical parameters/inputs can make outputs user-generated.
- Separate FSMA section 21 / financial-promotion requirements.

## V7.9 relevance
Existing configurable settings include setup-warning probability, perfect-entry probability, self-test target points, prediction horizon and HTF-zone requirement. Probability/confirmation controls may be relevant if they genuinely affect qualification; alert/testing-only controls are weaker.

## Functionality we want to preserve if legally possible
LONG/SHORT direction, qualified/entry-ready states, confidence/probability, entry/invalidation/target levels, alerts, manual trade confirmation and post-entry monitoring.

ForgeLogic does not execute orders, hold client money, automatically trade, connect to a broker for execution, or determine customer position size.

## External legal review
A solicitor brief named ForgeLogic_FCA_Perimeter_Opinion_Brief.docx was prepared.

James Burnie at gunnercooke was contacted on 29 September 2026 requesting a fixed-fee written perimeter opinion. The brief was attached and the Gmail message was confirmed SENT.

## Next action
Wait for and review the solicitor response before choosing the non-authorised architecture or FCA-authorisation route. RC1 remains unchanged in the meantime.

## Resume instruction
When resuming ForgeLogic launch/FCA work, read this checkpoint and FORGELOGIC-MASTER-SOURCE-OF-TRUTH.md first. Do not assume authorisation is or is not required until the external opinion is reviewed.
