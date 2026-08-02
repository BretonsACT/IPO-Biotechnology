# 🧬 Multi-Agent System Architecture for Biotech IPO Intelligence

This directory contains the formal markdown specifications and execution rules for the 5 autonomous agents designed to evaluate biotechnology companies with recent or upcoming Initial Public Offerings (IPOs).

---

## 🤖 Agent Roster

| Agent File | Role | Focus Area | Key Output Metric |
| :--- | :--- | :--- | :--- |
| [`01_ipo_scanner_agent.md`](file:///home/ACT/Downloads/Biotechnology/agents/01_ipo_scanner_agent.md) | **IPO Scanner** | Filings (S-1), IPO proceeds, Syndicate, Lock-ups | Target list, Gross raise, Lock-up date |
| [`02_clinical_pipeline_agent.md`](file:///home/ACT/Downloads/Biotechnology/agents/02_clinical_pipeline_agent.md) | **Clinical Evaluator** | Phase, MoA, Efficacy endpoints, Safety (AEs), FDA status | Clinical Score (0–100) |
| [`03_financial_valuation_agent.md`](file:///home/ACT/Downloads/Biotechnology/agents/03_financial_valuation_agent.md) | **Financial Analyst** | Cash runway, Burn rate, Enterprise Value, Dilution risk | Financial Score & Implied Runway |
| [`04_risk_market_agent.md`](file:///home/ACT/Downloads/Biotechnology/agents/04_risk_market_agent.md) | **Risk & Market Specialist** | TAM, Competition, Patent expiration, FTO, Manufacturing | Risk Matrix Rating & Score |
| [`05_investment_committee_agent.md`](file:///home/ACT/Downloads/Biotechnology/agents/05_investment_committee_agent.md) | **Investment Committee** | Synthesis of all 4 sub-agent scores into final rating | Rating (**Strong Buy**, **Speculative Buy**, **Hold**, **Avoid**) |

---

## 🔄 Workflow Diagram

```mermaid
flowchart TD
    Sub1[1. IPO Scanner Agent] -->|Identifies IPO Candidates| Sub2[2. Clinical Pipeline Agent]
    Sub1 -->|Delivers Financial Filings| Sub3[3. Financial Valuation Agent]
    Sub1 -->|Delivers Market Data| Sub4[4. Risk & Market Agent]
    
    Sub2 -->|Clinical Score & Data| Synthesis[5. Investment Committee Agent]
    Sub3 -->|Runway & EV Score| Synthesis
    Sub4 -->|TAM & Patent Score| Synthesis
    
    Synthesis -->|Generates Final Institutional Memo| FinalReport[Biotech IPO Investment Web Report]
```

---

## 💡 How to Review & Inspect Agent Behavior
Each agent file contains:
- **Role Overview**: The core objective and boundaries of the agent.
- **Core Responsibilities & Scope**: Step-by-step evaluation tasks.
- **Standard Operating Procedure (SOP)**: Flowcharts, mathematical formulas, or weighting matrices.
- **Standard Output Schema**: Structured JSON data contracts passed between agents.
