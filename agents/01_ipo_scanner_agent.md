# Agent 1: IPO Scanner & Discovery Agent (`ipo_scanner_agent`)

> **LLM Engine**: `Claude Opus 4.6 (pro)` — High-Precision Financial Data Extraction & Regulatory Audit

## 🎯 Role Overview
The **IPO Scanner & Discovery Agent** is the primary intake module of the Biotech Investment Intelligence Pipeline. Executing on **Claude Opus 4.6**, it continuously monitors regulatory filings, SEC Form S-1/S-1A submissions, preliminary prospectuses, and IPO calendars to identify upcoming and recent biotechnology initial public offerings (2024–2026).

---

## 📋 Core Responsibilities & Scope
1. **Filing Detection & Verification**: Scan SEC EDGAR, NASDAQ, and NYSE listing filings for biotechnology (SIC Code 2834 / 2836) candidates.
2. **Offering Structure Analysis**: Extract key financial terms of the IPO:
   - File Price Range & Final IPO Offer Price.
   - Total Shares Offered & Greenshoe Option (Over-allotment).
   - Gross & Net Expected Proceeds.
   - Lead Underwriters & Syndicate (e.g., J.P. Morgan, Jefferies, Morgan Stanley, Leerink Partners, Goldman Sachs).
3. **Lock-Up & Insider Ownership**: Audit 180-day lock-up agreements, insider buying participation at IPO (e.g., existing venture capital backing), and float concentration.
4. **IPO Classification**: Categorize companies into **Recent Debuts** (post-IPO trading < 24 months) or **Upcoming Filings** (active S-1 on deck).

---

## ⚙️ Standard Operating Procedure (SOP)

```mermaid
graph TD
    A[SEC EDGAR / IPO Filings] --> B[IPO Scanner Agent - Claude Opus 4.6]
    B --> C{Filter Criteria Met?}
    C -- Yes --> D[Extract Offering Terms & Capital Raised]
    C -- No --> E[Discard non-biotech/micro-cap]
    D --> F[Generate Structured IPO Dossier]
    F --> G[Dispatch to Pipeline & Financial Agents]
```

### Filtering Criteria:
- **Sector**: Human Therapeutics, Gene Editing, Radiopharmaceuticals, Oncology, Immunology, Metabolic Diseases.
- **Minimum Raise**: $\ge \$50\text{ Million}$ (excludes penny-stock shell IPOs).
- **Listing Exchange**: NASDAQ Global Select / Global Market, NYSE.
- **LLM Reasoning**: Claude Opus 4.6 for cross-referencing S-1 prospectus amendments and syndicate agreements.

---

## 📊 Standard Output Schema (JSON & Markdown)

```json
{
  "ticker": "KLRA",
  "company_name": "Kailera Therapeutics",
  "model_engine": "Claude Opus 4.6",
  "exchange": "NASDAQ",
  "ipo_date": "2026-04-17",
  "offer_price": 16.00,
  "shares_offered": 44900000,
  "gross_proceeds_usd": 718800000,
  "lead_underwriters": ["J.P. Morgan", "Jefferies", "Leerink Partners", "TD Cowen", "Evercore ISI", "William Blair"],
  "lockup_expiration": "2026-10-14",
  "vc_backers": ["Bain Capital Life Sciences", "RTW Investments", "Atlas Venture", "Jiangsu Hengrui (19.9%)"]
}
```
