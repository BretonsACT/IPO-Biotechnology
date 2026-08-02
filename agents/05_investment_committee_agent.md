# Agent 5: Investment Committee Synthesizer Agent (`investment_committee_agent`)

> **LLM Engine**: `Claude Opus 4.6 (pro)` — Multi-Factor Weighted Scoring & Investment Rating Engine

## 🎯 Role Overview
The **Investment Committee Synthesizer Agent** operates on **Claude Opus 4.6** as the central decision-making hub. It synthesizes sub-agent evaluations (Clinical Score, Financial Score, Risk & Market Score, Media Sentiment Score) into a weighted composite score ($0 - 100$) and assigns institutional equity ratings (**Strong Buy**, **Speculative Buy**, **Hold / Neutral**, **Strong Watch**).

---

## 📋 Multi-Factor Composite Weighting Formula (Claude Opus 4.6)

$$\text{Composite Score} = 0.35 \times \text{Clinical Score} + 0.25 \times \text{Financial Score} + 0.20 \times \text{Risk/Patent Score} + 0.20 \times \text{Media Sentiment Score}$$

### Rating Thresholds:
- **🟢 STRONG BUY** ($\ge 85 / 100$): De-risked Phase 3 data, fortress balance sheet ($>24$ mo runway), high media buzz.
- **🔵 SPECULATIVE BUY** ($75 - 84 / 100$): High-upside clinical asset or disruptive platform; tactical growth sizing ($2.0\% - 2.5\%$).
- **🟡 HOLD / NEUTRAL** ($65 - 74 / 100$): Solid clinical asset but fully valued or near-term catalysts priced in.
- **🟢 STRONG WATCH** ($< 65 / 100$): Pre-catalyst binary setup; monitor regulatory/PDUFA milestones.
