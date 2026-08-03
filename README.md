# 🧬 IPO Biotechnology Intelligence & Multi-Agent Equity Research Suite `v2.5`

[![System Version](https://img.shields.io/badge/version-2.5.0-38bdf8.svg)](README.md)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Institutional Deep Dive v2.5.0](https://img.shields.io/badge/Institutional%20Deep%20Dive-v2.5.0-0d9488.svg)](reports/INSTITUTIONAL_BIOTECH_DEEP_DIVE_2026.md)
[![Media Sentiment Audit v2.5.0](https://img.shields.io/badge/Media%20%26%20Social-Sentiment%20v2.5.0-8b5cf6.svg)](reports/MEDIA_SENTIMENT_REPORT_2026.md)
[![Multi-Agent System](https://img.shields.io/badge/Architecture-7--Agent%20Hybrid%20Suite-10b981.svg)](agents/)

An institutional-grade **Biotechnology Initial Public Offering (IPO) Intelligence System (v2.5.0)** powered by a **7-Agent Hybrid LLM Architecture** (Gemini 3.6 Flash & Claude Opus 4.6). Designed to analyze recent (2024–2026) and upcoming pipeline biotech IPOs, evaluating clinical trial endpoints (NCT Identifiers), cash runway buffers, patent longevity, **Bull vs. Bear investment cases**, mainstream media headlines, Twitter/X cashtag activity, Reddit investor discourse, and risk-adjusted valuation models.

Created for GitHub repository: [`BretonsACT/IPO-Biotechnology`](https://github.com/BretonsACT/IPO-Biotechnology)  
Live Web App: [`https://bretonsact.github.io/IPO-Biotechnology/`](https://bretonsact.github.io/IPO-Biotechnology/)

---

## 🌐 Interactive Web Report Interface (`v2.5.0`)

This repository includes a standalone, high-performance **Web Application Dashboard** (`index.html`) featuring glassmorphism UI, real-time recommendation filtering, dynamic search, institutional metric matrices, media sentiment audits, and modal deep-dives.

### Features in Version 2.5.0:
- 📌 **Version Tracking (`v2.5.0`)**: Explicit version tag displayed across header navigation, hero section, modals, and reports for version management.
- 🤖 **Hybrid Multi-Agent LLM Engine Assignment**: Task-optimized model distribution — high-speed ingestion via **Gemini 3.6 Flash** (Agents 1 & 6) and deep analytical reasoning via **Claude Opus 4.6** (Agents 2, 3, 4, 5 & 7).
- 📊 **Executive Dashboard**: KPI counters tracking total analyzed assets, average cash runways, and capital raised.
- 🐂🔴 **Bull vs. Bear Investment Cases**: Dedicated multi-section tab (`Deep Dive & Cases`) displaying granular upside drivers and operational risks for each company.
- 🔬 **Clinical Trial Registration Data**: NCT Identifiers (`NCT07284875`, `NCT06788990`, `NCT04452591`, `NCT05811247`), primary efficacy endpoints, and $p$-value metrics.
- 📰 **Agent 6 Media & Social Audit**: Tracks headlines from *The Lancet*, *BioSpace*, *Fierce Biotech*, Twitter/X cashtag buzz, and Reddit investor subreddits (`r/biotech`, `r/stocks`).
- 🔍 **Interactive Filters**: Instant filtering by recommendation ratings (🟢 **Strong Buy**, 🔵 **Speculative Buy**, 🟡 **Hold / Neutral**, 🟢 **Strong Watch**).
- 📋 **Comparative Market Matrix**: Sortable table comparing Market Cap, Cash Runway, Lead Candidates, Phase, Media Scores, and Agent Scores.

---

## 🤖 Multi-Agent Architecture Specifications (`agents/`)

Each agent in the pipeline operates under strict standard operating procedures and JSON schema data contracts:

1. 📡 [`agents/01_ipo_scanner_agent.md`](agents/01_ipo_scanner_agent.md): **IPO Scanner & Discovery Agent** (`Gemini 3.6 Flash`)  
   *Scans SEC EDGAR S-1 filings, offering terms, gross proceeds, syndicate underwriters, and lock-up agreements with strict qualification filters.*
2. 🔬 [`agents/02_clinical_pipeline_agent.md`](agents/02_clinical_pipeline_agent.md): **Clinical Pipeline Evaluator Agent** (`Claude Opus 4.6`)  
   *Audits Mechanism of Action (MoA), Phase 1/2/3 trial primary endpoints, adverse event safety profiles, and FDA Fast Track/Breakthrough designations.*
3. 💵 [`agents/03_financial_valuation_agent.md`](agents/03_financial_valuation_agent.md): **Financial Health & Valuation Agent** (`Claude Opus 4.6`)  
   *Calculates quarterly net operating cash burn, implied cash runway buffers, Enterprise Value (EV), and dilution risk.*
4. ⚠️ [`agents/04_risk_market_agent.md`](agents/04_risk_market_agent.md): **Risk, Patent & Market Landscape Agent** (`Claude Opus 4.6`)  
   *Evaluates Total Addressable Market (TAM), patent composition-of-matter cliffs (>2038), standard of care competition, FTO, and CDMO manufacturing risks.*
5. 🏛️ [`agents/05_investment_committee_agent.md`](agents/05_investment_committee_agent.md): **Investment Committee Synthesizer Agent** (`Claude Opus 4.6`)  
   *Synthesizes weighted scores into institutional ratings (**Strong Buy**, **Speculative Buy**, **Hold**, **Avoid**) and issues full investment memos.*
6. 📰 [`agents/06_media_sentiment_agent.md`](agents/06_media_sentiment_agent.md): **Media, Social & Community Sentiment Agent** (`Gemini 3.6 Flash`)  
   *Scans mainstream press coverage (*The Lancet Oncology*, *BioSpace*), Twitter/X cashtags, Reddit investor subreddits (`r/biotech`, `r/stocks`), and insider transaction trends.*
7. 📝 [`agents/07_deep_dossier_agent.md`](agents/07_deep_dossier_agent.md): **Deep Dossier Research Compiler Agent** (`Claude Opus 4.6`)  
   *Compiles comprehensive multi-page institutional research dossiers and citation matrices.*

---

## 📊 Summary of Analyzed Biotech IPOs (2024–2026) — Version 2.5.0

| Ticker | Company Name | Version | IPO Date / Status | Lead Candidate | Indication | Cash Runway | Media Score | Recommendation | Score |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **KLRA** | **Kailera Therapeutics** | `v2.5` | April 2026 (Recent) | Ribupatide (KAI-9531) | Obesity (Phase 3 Dual GLP-1/GIP) | Mid-2028 | **91/100** | 🔵 **SPECULATIVE BUY** | **80/100** |
| **BCAX** | **Bicara Therapeutics** | `v2.5` | Sept 2024 (Recent) | Ficerafusp Alfa | Head & Neck Cancer (Phase 2/3) | 1H 2029 | **74/100** | 🔵 **SPECULATIVE BUY** | **75/100** |
| **CGON** | **CG Oncology** | `v2.5` | Jan 2024 (Recent) | Cretostimogene | NMIBC Bladder Cancer (Phase 3) | Thru 2029 | **94/100** | 🟢 **STRONG BUY** | **87/100** |
| **SCTX** | **Scribe Therapeutics** | `v2.5` | July 2026 (Recent) | STX-1150 | *In Vivo* CRISPR Gene Editing | Early 2029 | **83/100** | 🟡 **HOLD / NEUTRAL** | **70/100** |
| **MANE** | **Veradermics** | `v2.5` | 2026 (Recent) | VDPHL01 | Oral Minoxidil Hair Loss (Phase 3) | Thru 2030 | **80/100** | 🔵 **SPECULATIVE BUY** | **76/100** |
| **APMD** | **Apnimed** | `v2.5` | July 31, 2026 (Recent) | AD109 / Oxnimbi | Obstructive Sleep Apnea (Phase 3) | Thru 2028+ | **86/100** | 🔵 **SPECULATIVE BUY** | **75/100** |

---

## 📄 Executive Markdown Reports (v2.5.0)

- 🔬 [**Institutional Biotechnology Multi-Page Deep Dive Report v2.5.0**](reports/INSTITUTIONAL_BIOTECH_DEEP_DIVE_2026.md)
- 📰 [**Media & Social Community Sentiment Audit Report v2.5.0**](reports/MEDIA_SENTIMENT_REPORT_2026.md)

---

## 👤 Author & Maintainer
- **GitHub User**: [BretonsACT](https://github.com/BretonsACT)
- **Repository**: [IPO-Biotechnology](https://github.com/BretonsACT/IPO-Biotechnology)
- **Live Site**: [https://bretonsact.github.io/IPO-Biotechnology/](https://bretonsact.github.io/IPO-Biotechnology/)
