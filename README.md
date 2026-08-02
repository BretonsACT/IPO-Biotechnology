# 🧬 IPO Biotechnology Intelligence & Multi-Agent Equity Research Suite

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Biotech IPO 2026](https://img.shields.io/badge/Biotech%20IPO-2026%20Report-0d9488.svg)](reports/BIOTECH_IPO_REPORT_2026.md)
[![Media Sentiment Audit](https://img.shields.io/badge/Media%20%26%20Social-Sentiment%20Report-8b5cf6.svg)](reports/MEDIA_SENTIMENT_REPORT_2026.md)
[![Multi-Agent System](https://img.shields.io/badge/Architecture-6--Agent%20Suite-38bdf8.svg)](agents/)

An institutional-grade **Biotechnology Initial Public Offering (IPO) Intelligence System** powered by a **6-Agent Autonomous Architecture**. Designed to analyze recent (2024–2026) and upcoming pipeline biotech IPOs, evaluating clinical trial endpoints, cash runway buffers, patent longevity, mainstream media headlines, Twitter/X cashtag activity, Reddit investor discourse, and risk-adjusted valuation models.

Created for GitHub repository: [`BretonsACT/IPO-Biotechnology`](https://github.com/BretonsACT/IPO-Biotechnology)  
Live Web App: [`https://bretonsact.github.io/IPO-Biotechnology/`](https://bretonsact.github.io/IPO-Biotechnology/)

---

## 🌐 Interactive Web Report Interface

This repository includes a standalone, high-performance **Web Application Dashboard** (`index.html`) featuring glassmorphism UI, real-time recommendation filtering, dynamic search, institutional metric matrices, media sentiment audits, and modal deep-dives.

### Features:
- 📊 **Executive Dashboard**: KPI counters tracking total analyzed assets, average cash runways, and capital raised.
- 📰 **Agent 6 Media & Social Audit**: Tracks headlines from *The Lancet*, *BioSpace*, *Fierce Biotech*, Twitter/X cashtag buzz, and Reddit investor subreddits (`r/biotech`, `r/stocks`).
- 🔍 **Interactive Filters**: Instant filtering by recommendation ratings (🟢 **Strong Buy**, 🔵 **Speculative Buy**, 🟡 **Hold / Neutral**, 🟢 **Strong Watch**).
- 📋 **Comparative Market Matrix**: Sortable table comparing Market Cap, Cash Runway, Lead Candidates, Phase, Media Scores, and Agent Scores.
- 🤖 **Agent Architecture Explorer**: Interactive view of the 6 specialized agent specs.

---

## 🤖 Multi-Agent Architecture Specifications (`agents/`)

Each agent in the pipeline operates under strict standard operating procedures and JSON schema data contracts:

1. 📡 [`agents/01_ipo_scanner_agent.md`](agents/01_ipo_scanner_agent.md): **IPO Scanner & Discovery Agent**  
   *Scans SEC EDGAR S-1 filings, offering terms, gross proceeds, syndicate underwriters, and lock-up agreements.*
2. 🔬 [`agents/02_clinical_pipeline_agent.md`](agents/02_clinical_pipeline_agent.md): **Clinical Pipeline Evaluator Agent**  
   *Audits Mechanism of Action (MoA), Phase 1/2/3 trial primary endpoints, adverse event safety profiles, and FDA Fast Track/Breakthrough designations.*
3. 💵 [`agents/03_financial_valuation_agent.md`](agents/03_financial_valuation_agent.md): **Financial Health & Valuation Agent**  
   *Calculates quarterly net operating cash burn, implied cash runway buffers, Enterprise Value (EV), and dilution risk.*
4. ⚠️ [`agents/04_risk_market_agent.md`](agents/04_risk_market_agent.md): **Risk, Patent & Market Landscape Agent**  
   *Evaluates Total Addressable Market (TAM), patent composition-of-matter cliffs, standard of care competition, and CDMO manufacturing risks.*
5. 🏛️ [`agents/05_investment_committee_agent.md`](agents/05_investment_committee_agent.md): **Investment Committee Synthesizer Agent**  
   *Synthesizes weighted scores into institutional ratings (**Strong Buy**, **Speculative Buy**, **Hold**, **Avoid**) and issues full investment memos.*
6. 📰 [`agents/06_media_sentiment_agent.md`](agents/06_media_sentiment_agent.md): **Media, Social & Community Sentiment Agent**  
   *Scans mainstream press coverage (*The Lancet Oncology*, *BioSpace*), Twitter/X cashtags, Reddit investor subreddits (`r/biotech`, `r/stocks`), and insider transaction trends.*

---

## 📊 Summary of Analyzed Biotech IPOs (2024–2026)

| Ticker | Company Name | IPO Date / Status | Lead Candidate | Indication | Cash Runway | Media Score | Recommendation | Score |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **KLRA** | **Kailera Therapeutics** | April 2026 (Recent) | KAI-9531 (Ribupatide) | Obesity (Phase 3 Dual GLP-1/GIP) | 56 Mos | **91/100** | 🟢 **STRONG BUY** | **88/100** |
| **BCAX** | **Bicara Therapeutics** | Sept 2024 (Recent) | Ficerafusp Alfa | Head & Neck Cancer (Phase 2/3) | 32 Mos | **74/100** | 🔵 **SPECULATIVE BUY** | **79/100** |
| **CGON** | **CG Oncology** | Jan 2024 (Recent) | Cretostimogene | NMIBC Bladder Cancer (Phase 3) | 38 Mos | **94/100** | 🟡 **HOLD / NEUTRAL** | **68/100** |
| **SCTX** | **Scribe Therapeutics** | 2026 (Recent) | STX-101 | *In Vivo* CRISPR Gene Editing | 28 Mos | **83/100** | 🔵 **SPECULATIVE BUY** | **76/100** |
| **MANE** | **Veradermics** | 2026 (Recent) | VD-401 | Oral Minoxidil Hair Loss (Phase 3) | 36 Mos | **80/100** | 🔵 **SPECULATIVE BUY** | **77/100** |
| **APNI** | **Apnimed** | Upcoming (S-1 Filings) | AD109 | Obstructive Sleep Apnea (Phase 3) | 30 Mos (Est) | **86/100** | 🟢 **STRONG WATCH** | **82/100** |

---

## 📄 Executive Markdown Reports

- 📈 [**Biotechnology IPO Investment Report (2024–2026)**](reports/BIOTECH_IPO_REPORT_2026.md)
- 📰 [**Media & Social Community Sentiment Audit Report**](reports/MEDIA_SENTIMENT_REPORT_2026.md)

---

## 👤 Author & Maintainer
- **GitHub User**: [BretonsACT](https://github.com/BretonsACT)
- **Repository**: [IPO-Biotechnology](https://github.com/BretonsACT/IPO-Biotechnology)
- **Live Site**: [https://bretonsact.github.io/IPO-Biotechnology/](https://bretonsact.github.io/IPO-Biotechnology/)
