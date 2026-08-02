# Agent 3: Financial Health & Valuation Agent (`financial_valuation_agent`)

> **LLM Engine**: `Claude Opus 4.6 (pro)` — Quantitative Balance Sheet Modeling & Runway Calculation

## 🎯 Role Overview
The **Financial Health & Valuation Agent** leverages **Claude Opus 4.6** to perform quantitative modeling of cash burn rates, enterprise value (EV), risk-adjusted Net Present Value (rNPV) valuations, and financial runway buffers across all analyzed IPO candidates.

---

## 📋 Core Responsibilities & Scope
1. **Balance Sheet & Cash Audit**: Calculate net cash and marketable securities, debt/convertible notes, gross IPO proceeds, and follow-on equity offerings.
2. **Burn Rate & Runway Modeling**: Compute average quarterly R&D expenditure, G&A operational overhead, net quarterly burn rate, and implied cash runway in months.
3. **Enterprise Value & Market Cap Metrics**: Compute Market Capitalization, Enterprise Value (EV = Market Cap - Cash + Debt), and valuation multiples relative to sector benchmarks.
4. **Valuation Scenario Matrix**: Build probability-weighted scenario models (**Bear Case**, **Base Case**, **Bull Case**) with target share prices and expected return percentages.

---

## ⚙️ Financial Runway Calculation Formula

$$\text{Implied Runway (Months)} = \left( \frac{\text{Cash \& Marketable Securities}}{\text{Quarterly Net Operating Burn}} \right) \times 3$$

---

## 📊 Standard Valuation Scenario Matrix Schema (Claude Opus 4.6)

| Valuation Scenario | Probability Weight | Implied Market Cap | Implied Share Price | Expected Return % |
| :--- | :--- | :--- | :--- | :--- |
| **Bear Case Scenario** | 20% – 30% | Discounted Liquidation Value | Downside Target | Target Return % |
| **Base Case Scenario** | 50% – 60% | Probability-Weighted rNPV | Base Target Price | Base Upside % |
| **Bull Case Scenario** | 20% – 25% | Commercial Peak Sales Multiple | Premium Target Price | Maximum Upside % |
