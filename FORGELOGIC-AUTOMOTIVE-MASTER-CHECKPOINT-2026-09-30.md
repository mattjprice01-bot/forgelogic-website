# ForgeLogic Automotive Programme — Master Chat Checkpoint
**Date:** 30 September 2026
**Status:** Canonical handover for current automotive product work
**Instruction:** Read this file before resuming Workshop Copilot or Diagnostic Copilot development.

## 1. Programme structure agreed
ForgeLogic now has three distinct product streams:

1. **US30 Copilot / RC1** — financial intelligence product. Separate regulatory/FCA workstream. Do not alter it as part of automotive development.
2. **ForgeLogic Diagnostic Copilot** — standalone automotive diagnostic assistant for DIY users, enthusiasts, mobile mechanics and professional technicians.
3. **ForgeLogic Workshop Copilot** — complete garage operating system for independent workshops, with the shared diagnostic capability embedded into relevant work orders.

Architectural principle: **two automotive products, one diagnostic intelligence concept.**

Shared concept: **ForgeLogic Core Diagnostics** — vehicle context + evidence model + hypotheses + missing/contradictory evidence + next-best-test reasoning + case history + technical-data connectors. Improvements should ultimately benefit both Diagnostic Copilot and Workshop Copilot rather than creating two unrelated diagnostic brains.

## 2. Workshop Copilot — real garage workflow captured
Current real workflow from Matt's garage:
- Customer arrives with a problem.
- Natalie runs the office.
- Natalie currently writes a paper work order: customer/name, registration, work required.
- Job is written onto a physical board in an available day/time slot.
- Paper work order goes onto the board.
- Simple known work (e.g. service): parts can be ordered immediately.
- Diagnostic/unknown work (e.g. front knock): flagged for assessment.
- When a ramp is free, vehicle is pulled in for a quick assessment.
- Technician identifies likely fault/parts and writes information onto work order.
- Job returns to board while awaiting parts/ramp time.
- Natalie prices the job once information is complete.
- Customer authorises work.
- Workshop repairs vehicle.
- Paper work order returns to Natalie.
- Natalie invoices through Xero.

Product strategy: digitise this familiar workflow rather than impose generic software-company workflow.

## 3. Natalie / Office Command Centre
Central operational screen should be a **digital workshop board**, because the physical board is effectively the garage's existing state machine.

Core lanes currently agreed:
BOOKED → WAITING ASSESSMENT → WAITING PRICE → AWAITING AUTHORISATION → WAITING PARTS → IN WORKSHOP → HOLD → AT MOT/OFF-SITE → READY TO INVOICE → COMPLETE.

Office features:
- main dashboard / attention queue
- booking system and calendar
- customer database
- vehicle database/history
- technician allocation
- ramp allocation/status
- quote → authorisation → work order → invoice
- parts / cost / margin
- MOT/off-site management
- customer communications
- Xero/accounting connector
- reporting / labour sold vs actual / blockage time / margin
- AI office assistant: e.g. "What am I waiting for?"

Natalie must be able to add mechanics, rename them and allocate jobs based on who she believes is best suited.

## 4. Technician mobile app
Technicians get their own daily schedule and relevant jobs, not the entire office system.

Job view includes:
- vehicle
- customer complaint verbatim
- requested work
- relevant history
- parts
- technical information
- allocated labour time
- expected completion
- job state

Large workshop controls:
START / HOLD / EXTRA WORK / ADD PART / PHOTO / ASK AI / WAITING PARTS / COMPLETE.

Expected completion/elapsed time should be visible to create useful time awareness.

## 5. HOLD workflow
Technician can HOLD an active job with mandatory reason and optional ETA.

Reasons include:
- wrong part
- waiting parts
- waiting customer authorisation
- technical information
- specialist assistance
- external/MOT
- road test
- other

Important architecture: track **vehicle state, technician state and ramp state separately**.

Example:
Vehicle dismantled on Bay 2 + wrong part ETA 60 min:
- vehicle ON HOLD / dismantled
- Bay 2 OCCUPIED
- technician AVAILABLE

Productive labour timer pauses; blockage time continues separately.

After HOLD, technician app should offer **Next Available Work** based on:
- ready jobs
- parts availability
- technician suitability
- available time window

Technician chooses; system should not silently auto-assign.

Long-term reporting should quantify productive time vs blockage time (parts, approvals, etc.).

## 6. External MOT workflow
Natalie frequently books MOTs at another garage.

Work order supports:
- MOT station
- appointment date/time
- travel allowance
- person taking/collecting
- notes

State model:
MOT BOOKED → NEEDS TAKING → AT MOT STATION → RETURN REQUIRED → RETURNED → PASS/FAIL → REPAIR REQUIRED → COMPLETE.

Office board includes dedicated AT MOT / OFF-SITE state.

Automatic reminders should include:
- upcoming departure
- vehicle still marked on-site near/after appointment
- collection/status check when at MOT station too long

MOT failure items become additional-work items on the existing work order for pricing/customer authorisation.

## 7. Extra-work / customer authorisation
Workflow implemented conceptually/prototype:
Technician finds extra work → description → photo/video evidence → parts + labour → office review → customer mobile authorisation → APPROVED/DECLINED → work order updated.

Declined work remains in vehicle/job history.

## 8. Workshop Copilot integrations
Target connectors:
- **Autodata**: repair/labour times, technical procedures, specifications, diagrams/images/documentation. Must investigate proper commercial/API/licensing access; do not use passwords or brittle scraping.
- **Xero**: first accounting target for completed invoice/accounting workflow.
- messaging: SMS/email customer updates/authorisation
- VRM/VIN data provider
- parts suppliers/motor factors later

Core workflow must work independently before external connectors become foundational dependencies.

## 9. Workshop Copilot current technical state
Private GitHub repo:
**mattjprice01-bot/Forgelogic-workshop-copilot**

Railway project:
**ForgeLogic Workshop Copilot**

Railway service:
**workshop-copilot-web**

Live test domain:
https://workshop-copilot-web-production.up.railway.app

The Vite/Railway allowed-host issue discovered during first phone test was fixed via vite.config.ts.

Current frontend has been rebuilt toward the approved premium ForgeLogic visual direction:
- dark/glass high-tech UI
- cyan/neon accents
- nine-column workshop board
- vehicle/job cards
- technician management
- ramp status
- workshop overview
- AI attention assistant
- responsive/mobile treatment

Approved visual principle:
**Do not make it look like ordinary garage software. It should feel like the garage moved ten years forward, while remaining readable and practical.**

## 10. Diagnostic Copilot — product decision
Standalone product is commercially separate from Workshop Copilot.

Target users:
- DIY owners ("Jeff in his garage")
- enthusiasts
- mobile mechanics
- professional technicians

Jeff does not need bookings/Xero/ramps; he needs intelligent diagnostic assistance.

MVP loop:
Vehicle → complaint → evidence → hypotheses → next best test → result → updated reasoning → confirmed fault → repair/outcome.

Example first case:
2014 VW Golf, driver's electric window inoperative, passenger windows work, fuse checked.

The system should not give generic AI parts-cannon advice. It should:
- preserve evidence
- rank hypotheses
- identify missing/contradictory evidence
- recommend smallest useful next test
- accept measurements/DTCs/photos/screenshots/wiring diagrams
- update reasoning when new evidence arrives
- explicitly distinguish suspected vs confirmed
- state when there is insufficient evidence to order a part

Desired differentiator:
**Case Confidence / Evidence Quality**, e.g.
Fault hypothesis: door harness 71%
Evidence quality: MEDIUM
Missing: voltage at motor under load
PARTS DECISION: DO NOT ORDER YET
Next test: back-probe motor supply while commanding window DOWN.

## 11. Diagnostic Copilot current technical state
Private GitHub repo:
**mattjprice01-bot/Forgelogic-diagnostic-copilot**

Railway project:
**ForgeLogic Diagnostic Copilot**

Railway service:
**diagnostic-copilot-web**

Initial responsive React/Vite MVP has been created and deployment triggered.

Prototype includes:
- active diagnostic case
- vehicle context
- evidence record
- hypothesis ranking
- evidence confidence
- next-best-test panel
- explicit "do not replace yet" state
- add-to-case interaction
- placeholders for photos / scan screenshots / wiring diagrams

## 12. Commercial concept
Potential product family (pricing NOT final):
- Diagnostic Copilot Personal — low-cost standalone subscription
- Diagnostic Copilot Pro — professional mechanic tier
- Workshop Copilot — higher-value B2B SaaS with diagnostic capability included

Diagnostic Copilot can become a customer-acquisition funnel into Workshop Copilot as users grow their businesses.

Potential future feature, not current scope:
OBD/Bluetooth hardware → phone → live vehicle data/DTCs → ForgeLogic interpretation.

Do not start hardware yet.

## 13. Development tooling decision
GitHub remains source of truth.

Replit may be used as a rapid UI/prototyping accelerator where useful, but should not become an uncontrolled second source of truth. Replit-generated work should be reviewed before becoming the production baseline.

Railway is currently used for live test deployments.

## 14. Next engineering priorities
Do not spend the next block creating more mock-ups. Prioritise functionality:

1. **Diagnostic Copilot real case engine**
   - create vehicle/case
   - symptom intake
   - DTCs
   - measurements
   - tests
   - attachments/photos
   - hypothesis history
   - next-test reasoning
   - suspected vs confirmed
   - reasoning changes with evidence

2. **Workshop Copilot real operational board**
   - create customer/vehicle/job
   - allocate mechanic/ramp
   - move job state
   - HOLD + reason + ETA
   - next-task suggestion
   - MOT appointment/reminders
   - additional-work authorisation

3. **Persistent shared backend/database**
   - office PC and technician phones see same records/state
   - real accounts/roles
   - changes sync rapidly

4. **Technician mobile experience**
   - purpose-built mobile UI, not merely shrunk desktop
   - large controls
   - voice input prominent

5. **Real integrations after core loop**
   - Xero
   - Autodata/licensed technical data
   - messaging
   - VRM/VIN
   - parts suppliers

6. **Commercial Diagnostic Copilot MVP**
   - account
   - vehicle
   - diagnosis
   - usage/subscription boundary
   - test whether strangers will pay

## 15. ForgeLogic automotive design principle
**Intelligence underneath, simplicity on top.**

ForgeLogic should watch for things that are not progressing as expected rather than merely storing records.

The product family should embody:
**messy information in → structured evidence → intelligent decision support out.**

## Resume instruction
When Matt asks to resume the automotive programme, Workshop Copilot or Diagnostic Copilot:
1. Read this file first.
2. Read the relevant product repository's own docs/SOURCE_OF_TRUTH.md.
3. Inspect current GitHub main branch and Railway deployment before claiming current live status.
4. Keep US30 RC1/FCA work separate.
5. Continue from the engineering priorities above unless a newer checkpoint supersedes this file.
