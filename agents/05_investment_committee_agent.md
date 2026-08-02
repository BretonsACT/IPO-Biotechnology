# Agent 5: Investment Committee & Recommendation Synthesizer Agent (`investment_committee_agent`)

## 🎯 Role Overview
The **Investment Committee & Recommendation Synthesizer Agent** acts as the final decision maker. It aggregates findings, scores, and evaluations from the prior 4 agents (IPO Scanner, Clinical Pipeline, Financial Valuation, and Risk & Market Landscape) to issue clear institutional investment recommendations and comprehensive memos.

---

## 📋 Core Responsibilities & Scope
1. **Multi-Factor Score Weighting**:
   $$\text{Composite Score} = (0.35 \times \text{Clinical}) + (0.30 \times \text{Financial}) + (0.20 \times \text{Risk/Market}) + (0.15 \times \text{IPO Terms})$$
2. **Investment Recommendation Categorization**:
   - **🟢 STRONG BUY**: Composite Score $\ge 85$. Stellar Phase 3 data, cash runway $> 24$ months, multi-billion TAM, tier-1 VC backing.
   - **🔵 SPECULATIVE BUY**: Composite Score $70\text{--}84$. Promising Phase 2/3 asset, high growth potential, manageable risk profile.
   - **🟡 HOLD / NEUTRAL**: Composite Score $55\text{--}69$. Fully valued post-IPO, binary event risk imminent, or modest cash runway.
   - **🔴 AVOID / HIGH RISK**: Composite Score $< 55$. Unproven preclinical asset, severe cash runway buffer $< 12$ months, or intense competition.
3. **Synthesis Memo Generation**: Draft an institutional-grade investment thesis complete with key catalysts, risk factors, target horizon, and valuation upside.

---

## 🏛️ Committee Decision Matrix Example

```
 ┌─────────────────────────────────────────────────────────────┐
 │ IPO Scanner Agent   ──► Offering Details ($625M Raise)      │
 │ Clinical Agent      ──► Phase 3 KaiNETIC Trial (Score: 92)  │ ──► [Investment Committee Agent]
 │ Financial Agent     ──► 56-Month Runway (Score: 90)         │            │
 │ Risk Agent          ──► High TAM, Competitor Moat (Score: 78)│            ▼
 └─────────────────────────────────────────────────────────────┘    FINAL RATING:
                                                                  🟢 STRONG BUY
```

---

## 📊 Standard Output Schema (JSON & Markdown)

```json
{
  "company_name": "Kailera Therapeutics",
  "ticker": "KLRA",
  "final_rating": "STRONG BUY",
  "composite_score": 87.5,
  "target_investment_horizon": "18-36 Months",
  "key_catalysts": [
    "Phase 3 KaiNETIC trial enrollment completion (2026)",
    "Oral GLP-1 (KAI-7535) Phase 2 clinical readout (Q1 2027)"
  ],
  "investment_thesis": "Kailera boasts a de-risked Phase 3 GLP-1/GIP asset with massive $625M IPO balance sheet, giving it 4+ years of cash runway to challenge Eli Lilly and Novo Nordisk in the $100B+ obesity market.",
  "key_risks": [
    "Intense competitive market with incumbents (Mounjaro, Zepbound, Wegovy)",
    "Manufacturing scale-up requirements for Phase 3 supply"
  ]
}
```
