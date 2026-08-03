# Agent 5: Investment Committee Synthesizer Agent (`investment_committee_agent`)

> **LLM Engine**: `Claude Opus 4.6 (pro)` — Multi-Factor Weighted Scoring & Investment Rating Engine

## 🎯 Role Overview
The **Investment Committee Synthesizer Agent** operates on **Claude Opus 4.6** as the central decision-making hub. It synthesizes sub-agent evaluations (Clinical Score, Financial Score, Risk & Market Score, Media Sentiment Score) into a weighted composite score ($0 - 100$) and assigns institutional equity ratings (**Strong Buy**, **Speculative Buy**, **Hold / Neutral**, **Avoid**).

---

## 📋 Multi-Factor Composite Weighting Formula (Claude Opus 4.6)

$$\text{Composite Score} = 0.40 \times \text{Clinical Score} + 0.15 \times \text{Financial Score} + 0.30 \times \text{Risk/Moat Score} + 0.15 \times \text{Media Sentiment Score}$$

**Rationale**: Clinical data is the dominant value driver in pre-revenue biotechnology. Risk assessment (binary clinical, IP, regulatory, competitive) is the primary source of permanent capital impairment. Financial health matters primarily for dilution horizon; Media provides market-sentiment context.

### Rating Thresholds:
- **🟢 STRONG BUY** ($\ge 85 / 100$): Best-in-class clinical data with durable IP moat, strong balance sheet, and near-term catalysts.
- **🔵 SPECULATIVE BUY** ($75 - 84 / 100$): High-upside clinical asset with manageable risk profile; tactical growth sizing ($2.0\% - 2.5\%$).
- **🟡 HOLD / NEUTRAL** ($65 - 74 / 100$): Pre-clinical or early-stage asset, or fully valued with meaningful outstanding risks.
- **🔴 AVOID** ($< 65 / 100$): Excessive binary risk, weak IP, inadequate runway, or competitive displacement.
