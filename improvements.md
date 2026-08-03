# Improvements & Review Notes — v2.4 Hybrid Multi-Agent LLM Architecture

> Review of commit `267a1ef`: "Release v2.4: Implement task-optimized Hybrid Multi-Agent LLM Architecture"

---

## 1. Agent 4 (Risk & Market) assigned to wrong engine

Agent 4 was switched from Claude Opus 4.6 → Gemini 3.6 Flash. This agent handles patent estate auditing, FTO analysis, composition-of-matter expiry verification (>2038), competitive moat evaluation, and CDMO supply chain risk assessment — all deep analytical reasoning, not high-volume data intake.

The stated rationale ("High-Speed Market Epidemiology & Patent Landscape Analysis") doesn't hold up. TAM modeling and competitive moat analysis are multi-variable judgment tasks comparable to financial modeling (Agent 3), which correctly stayed on Claude Opus 4.6.

**Fix**: Revert Agent 4 back to Claude Opus 4.6 (pro).

**Files to change**:
- `agents/04_risk_market_agent.md` — restore `Claude Opus 4.6 (pro)` engine and role description
- `agents/README.md` — update Agent 4 row in the roster table
- `app.js` — update Agent 4 entry in the `agentSpecs` array

---

## 2. Filtering criteria deleted from Agent 1 spec

The following critical business-logic bullets were removed from `agents/01_ipo_scanner_agent.md`:

- **Sector filters**: Human Therapeutics, Gene Editing, Radiopharmaceuticals, Oncology, Immunology, Metabolic Diseases
- **Minimum raise threshold**: ≥$50 Million (excludes penny-stock shell IPOs)
- **Listing exchange requirements**: NASDAQ Global Select / Global Market, NYSE
- **LLM reasoning role**: "Claude Opus 4.6 for cross-referencing S-1 prospectus amendments and syndicate agreements"

These are the guardrails that define what qualifies as a valid IPO candidate. If they were intentionally relocated, the destination is not visible in the diff. If they were accidentally dropped during the engine rewrite, the agent spec is now incomplete.

**Fix**: Restore the filtering criteria section in `agents/01_ipo_scanner_agent.md`, or document where they now live.

**File to change**: `agents/01_ipo_scanner_agent.md`

---

## 3. PDFs regenerated with no content changes

All 8 PDFs under `reports/pdf/` were regenerated, but the diffs show only timestamp and ID-hash changes — zero content modification. If the v2.4 release is purely an engine-label rebrand with no report content changes, regenerating 8 binary files to bump `CreationDate` is churn with no benefit. This adds noise to the commit history and increases diff size needlessly.

**Fix**: Skip PDF regeneration in future label-only releases unless the report content actually changes.

---

## 4. `agents/README.md` uses absolute file:// URLs

The agent roster table uses hardcoded machine-local paths:

```
[01_ipo_scanner_agent.md](file:///home/ACT/Downloads/Biotechnology/agents/01_ipo_scanner_agent.md)
```

These won't resolve on anyone else's machine or if the repo is cloned elsewhere.

**Fix**: Replace with relative links:

```
[01_ipo_scanner_agent.md](./01_ipo_scanner_agent.md)
```

**File to change**: `agents/README.md` (this was pre-existing, not introduced by v2.4)

---

## What's solid

- **Version bump is thorough**: All the right surfaces — `index.html` (title, meta, badges, headers, footer, cache-busting), `app.js` (version constant, company objects, agent specs), `agents/README.md`, and agent spec files.
- **Cache-busting query params updated**: `styles.css?v=2.4.0_hybrid` and `app.js?v=2.4.0_hybrid` correctly force cache invalidation.
- **Hybrid architecture concept is sound**: Gemini Flash for high-volume intake (SEC scraping, web scanning via Agents 1 and 6) and Claude Opus for deep reasoning (clinical, financial, committee, dossier — Agents 2, 3, 5, 7) is a coherent rubric.
- **Agents 2, 3, 5, 7 correctly left on Claude Opus**: Clinical evaluation, rNPV financial modeling, committee synthesis, and dossier compilation are clearly deep-reasoning tasks.

---

## Summary

| Priority | Item | Action |
|----------|------|--------|
| **High** | Agent 4 engine assignment | Revert to Claude Opus 4.6 |
| **High** | Agent 1 missing filtering criteria | Restore or document relocation |
| **Low** | Empty PDF regeneration | Skip in future label-only releases |
| **Low** | Absolute `file://` links in README | Replace with relative links |
