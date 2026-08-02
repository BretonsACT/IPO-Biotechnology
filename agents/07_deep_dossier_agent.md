# Agent 7: Deep Dossier & Comprehensive Research Agent (`deep_dossier_agent`)

## 🎯 Role Overview
The **Deep Dossier & Comprehensive Research Agent** acts as an exhaustive institutional intelligence compiler. It synthesizes findings from all prior agents and performs deep-dive primary source verification to produce individual, multi-page dossiers per company. Every dossier includes executive leadership profiles, clinical trial NCT identifiers, balance sheet cash runways, Total Addressable Market (TAM) models, patent estate cliffs, 5-point Bull vs Bear cases, and direct clickable web citations.

---

## 📋 Core Responsibilities & Scope
1. **Corporate & Leadership Profiling**:
   - Headquarters location, founding history, corporate structure.
   - C-suite executive background (CEO, CMO, CFO, CTO, CCO).
2. **Granular Clinical Trial Audit (ClinicalTrials.gov & Journals)**:
   - Trial registration identifiers (NCT numbers, e.g. NCT07284875, NCT06788990, NCT04452591, NCT05811247).
   - Sample sizes ($n$), patient populations, primary/secondary endpoints, response rates (CR %, ORR %, AHI reduction %, OS months), $p$-values, and safety profiles.
3. **Financial Runway & Licensing Deal Structures**:
   - Gross/net IPO proceeds, cash & marketable securities, quarterly cash burn, implied cash runway buffer (with target year), underwriting syndicate, and licensing milestone obligations (e.g., Hengrui Pharma, Eli Lilly, Sanofi).
4. **Bull vs Bear Investment Case Synthesis**:
   - 5 granular institutional Bull Case drivers (upside catalysts).
   - 5 granular institutional Bear Case risks (operational & clinical headwinds).
5. **Direct Source Attribution & Citation Links**:
   - Link all claims directly to SEC filings, clinical trial pages, medical journals (*The Lancet Oncology*), news press (*BioSpace*, *Fierce Biotech*, *Endpoints News*), and social platforms (Twitter/X, Reddit).

---

## 📊 Standard Output Schema (JSON & Markdown)

```json
{
  "company_name": "Kailera Therapeutics",
  "ticker": "KLRA",
  "version": "v1.0.0",
  "headquarters": "Waltham, Massachusetts, USA",
  "ceo": "Ron Renaud",
  "cmo": "Scott Wasserman, M.D.",
  "cfo": "Douglas W. Pagan",
  "licensing_partner": "Jiangsu Hengrui Pharmaceuticals ($110M upfront, $200M milestones)",
  "cash_runway_year": "Mid-2028 (56 Months)",
  "bull_case_points": 5,
  "bear_case_points": 5,
  "clinical_trials_nct": ["NCT07284875", "NCT07284901", "NCT07284979"],
  "source_citations": [
    "https://clinicaltrials.gov/study/NCT07284875",
    "https://www.biospace.com/article/kailera-therapeutics-ipo",
    "https://www.thelancet.com"
  ]
}
```
