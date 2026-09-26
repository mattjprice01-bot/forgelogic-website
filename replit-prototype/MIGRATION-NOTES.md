# ForgeLogic Replit visual consolidation

Source: RedLustrousChemistry export, 2026-09-26.

This directory is an isolated staging area for the Replit visual prototype. It must not replace the production root until integration checks are complete.

## Preserve from production
- CNAME/domain configuration
- beta-config.js and beta registration flow
- subscription page/flow
- privacy, terms, risk and data-disclosure pages
- existing US30 Copilot pages/assets
- Railway deployment and environment configuration

## Replit-specific items to remove/adapt before production
- Replit Vite plugins
- required REPL_ID assumptions
- workspace/catalog dependency references
- workspace-only API client references unless explicitly required
- PORT/BASE_PATH hard requirements where incompatible with production
- prototype/noindex wording and banners before public release, subject to final regulatory/legal wording review

## Deployment rule
Build and verify this branch first. Do not merge to main until navigation, registration, subscription, legal links, responsive layout, production build and domain/deployment behaviour have been checked.
