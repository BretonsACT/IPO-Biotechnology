# Agent 3: Financial Health & Valuation Agent (`financial_valuation_agent`)

## 🎯 Role Overview
The **Financial Health & Valuation Agent** performs quantitative analysis of the company's financial condition, cash runway, net burn rate, capitalization structure, enterprise value (EV), and valuation metrics relative to clinical peers.

---

## 📋 Core Responsibilities & Scope
1. **Cash Runway Calculation**:
   $$\text{Cash Runway (Months)} = \frac{\text{Cash, Cash Equivalents \& Short-term Investments}}{\text{Average Quarterly Net Operating Cash Burn}} \times 3$$
   - Determine if cash runway extends beyond major clinical trial data readouts (Catalyst Buffer).
2. **Capitalization & Dilution Risk**:
   - Total Shares Outstanding (Basic vs Diluted).
   - Outstanding Warrants, Options, and Convertible Debt overhang.
   - Secondary Offering Likelihood (if cash runway $< 12$ months).
3. **Valuation Frameworks**:
   - **Market Capitalization vs Enterprise Value**: $\text{EV} = \text{Market Cap} + \text{Total Debt} - \text{Cash}$.
   - **Risk-Adjusted Net Present Value (rNPV)**: Accounting for Probability of Success (PoS) per clinical phase:
     - Phase 1 $\rightarrow$ 10–15% PoS
     - Phase 2 $\rightarrow$ 25–40% PoS
     - Phase 3 $\rightarrow$ 60–75% PoS
     - NDA/BLA Submission $\rightarrow$ 85–90% PoS
   - **Peak Sales Multiples**: Benchmarking vs commercial-stage peer multiples ($3.0\text{x}$–$5.0\text{x}$ estimated peak sales).

---

## 💵 Financial Metric Benchmark Standards

| Metric | Healthy / Low Risk | Moderate Risk | High Dilution / Critical Risk |
| :--- | :--- | :--- | :--- |
| **Cash Runway** | $> 24\text{ Months}$ | $12\text{--}24\text{ Months}$ | $< 12\text{ Months}$ |
| **Gross IPO Raise** | $> \$250\text{M}$ | $\$100\text{M}\text{--}\$250\text{M}$ | $< \$100\text{M}$ |
| **Debt Level** | $\$0$ (Pure Equity) | $< 15\%$ Total Assets | Convertible Debt / Debt Covenants |
| **Institutional Backing** | Tier-1 VCs (Bain, OrbiMed, RTW) | Mid-tier Funds | Retail Heavy / Undisclosed |

---

## 📊 Standard Output Schema (JSON & Markdown)

```json
{
  "company_name": "Kailera Therapeutics",
  "ticker": "KLRA",
  "market_cap_usd_m": 2400.0,
  "enterprise_value_usd_m": 1250.0,
  "cash_balance_usd_m": 1225.0,
  "quarterly_burn_usd_m": 65.0,
  "implied_runway_months": 56.5,
  "cash_runway_status": "Excellent (Extends past Phase 3 readouts)",
  "dilution_risk": "Low",
  "financial_score": 90
}
```
