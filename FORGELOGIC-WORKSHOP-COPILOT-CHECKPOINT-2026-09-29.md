# ForgeLogic Workshop Copilot — Project Checkpoint — 29 September 2026

## Decision
Start a separate non-financial ForgeLogic product intended to reach revenue quickly and help fund the larger US30 Copilot / RC1 programme.

Working product name: **ForgeLogic Workshop Copilot**.

Do not alter RC1 for this project. RC1 remains frozen from further compliance-driven changes while the external FCA perimeter opinion is pending.

## Why this project
Reuse the core ForgeLogic engineering approach outside financial services:
- ingest multiple inputs
- structure and score evidence
- identify conflicts/missing information
- progress through meaningful states
- learn from outcomes
- alert a human only when something requires attention
- keep the human in control

The first vertical is independent vehicle workshops/garages because Matt can test the product in his own operating garage and validate whether it saves time, improves workflow and protects margin before selling it externally.

## Initial Workshop Copilot concept
Potential workflow:
JOB RECEIVED → DIAGNOSIS / INFORMATION GATHERING → PARTS / LABOUR → QUOTE READY → CUSTOMER APPROVAL → JOB READY / IN PROGRESS → COMPLETED

Potential V1 capabilities:
- voice/text job intake
- structured vehicle/customer/job card
- symptoms and fault-code capture
- structured diagnostic reasoning / next-test suggestions
- confidence and missing-evidence indication
- parts and labour requirements
- quotation assistance and margin rules
- customer approval/status workflow
- job priority / overdue / waiting-parts warnings
- concise “what needs attention?” workshop view
- outcome recording so the system can improve

Example intended behaviour:
For a vehicle fault, the system should not merely produce generic AI text. It should structure symptoms, DTCs, tests already performed and evidence, then recommend the next diagnostic checks and explicitly indicate when evidence is insufficient to order a part.

## Commercial hypothesis
Aim for a workshop-level SaaS subscription rather than a very low consumer price. Initial working range discussed: approximately £79–£149/month per workshop, subject to validation.

Illustrative target at £99/month:
- 50 workshops ≈ £4,950 MRR
- 100 workshops ≈ £9,900 MRR

Do not treat these as forecasts; they are initial commercial targets for product design.

## Aggressive validation plan
Week 1: build a ruthlessly small internal MVP.
Week 2: operate it in Matt’s garage and remove friction / fix real workflow failures.
Week 3: put it into roughly 3–5 friendly garages for real-world testing.
Week 4: attempt first paid workshop subscriptions.

Primary validation question:
**Does Workshop Copilot materially make Matt’s garage easier and more profitable to run?**

## Architecture rule
Create Workshop Copilot as a **separate product and separate repository**. Reuse ForgeLogic architectural patterns and lessons where appropriate, but do not modify or couple it to RC1.

Potential future verticals (not current build scope):
- plant/fleet maintenance
- fabrication/engineering quotation
- field-service triage/dispatch
- broader ForgeLogic Operations Engine

Do not build these now. Prove the workshop vertical first.

## RC1 / FCA parallel track
James Burnie at gunnercooke has quoted £6,500 + VAT for the requested FCA perimeter opinion. A follow-up email has been sent asking him to confirm exact deliverables and turnaround, including Article 53/user-control, Section 21/financial promotions, concrete non-authorised product conditions if viable, and the appropriate authorisation route if not.

## Next action — tomorrow
Start **Workshop Copilot V1 product design**.

First task:
Define the smallest feature set that a real independent garage would pay for within 30 days, based on Matt’s actual workshop workflow.

Do not begin by building a large platform. Map the real garage workflow first, identify the highest-value bottlenecks, then define the MVP.

## Resume instruction
When Matt says **“load Workshop Copilot”** or asks to start the Workshop Copilot project, read this checkpoint first. Also retain the separate ForgeLogic Launch/FCA checkpoint for RC1. Treat Workshop Copilot and RC1 as separate workstreams.
