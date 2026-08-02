/**
 * Biotech IPO Intelligence Suite - Client Script
 * Multi-Agent Biotechnology Investment Research & Analytics
 * Enhanced with Agent 6: Media, Social & Community Sentiment Monitoring
 */

// Dataset of Analyzed Biotechnology IPO Companies (2024-2026)
const biotechCompanies = [
  {
    id: "klra",
    ticker: "KLRA",
    name: "Kailera Therapeutics",
    ipoStatus: "Recent IPO (April 2026)",
    recommendation: "STRONG BUY",
    recClass: "rec-strong-buy",
    recIcon: "fa-circle-check",
    score: 88,
    mediaScore: 91,
    marketCap: "$2.40B",
    enterpriseValue: "$1.25B",
    cashBalance: "$1.22B",
    cashRunway: "56 Months",
    grossRaise: "$625M",
    leadCandidate: "KAI-9531 (Ribupatide)",
    clinicalPhase: "Phase 3 (KaiNETIC Trial)",
    indication: "Obesity & Overweight (Dual GLP-1/GIP Agonist)",
    tam: "$100B+ Global Obesity",
    underwriters: ["Bain Capital", "Jefferies", "Morgan Stanley"],
    clinicalSummary: "Evaluates once-weekly injectable dual GLP-1/GIP agonist in global Phase 3 KaiNETIC trials. Pipeline also includes oral GLP-1 (KAI-7535) and triple agonist (KAI-4729).",
    financialSummary: "Fortress balance sheet following $600M Series B and $625M IPO raise. Cash runway of 56 months completely de-risks capital needs past Phase 3 readouts.",
    riskFactors: [
      "Heavy incumbent market competition (Eli Lilly's Mounjaro/Zepbound, Novo Nordisk's Wegovy).",
      "Large-scale peptide manufacturing expansion required for commercial scale."
    ],
    thesis: "Kailera provides an institutional-grade, de-risked Phase 3 entry into the cardiometabolic megatrend backed by a $1.2B+ cash buffer and top-tier healthcare VC syndicate.",
    mediaSentiment: {
      rating: "Strongly Bullish (88% Bullish)",
      pressHighlight: "Featured in BioSpace & Endpoints News as largest 2026 biotech IPO; positive Phase 3 ADA 2026 trial readouts.",
      twitterBuzz: "High cashtag engagement ($KLRA) on challenging Eli Lilly & Novo Nordisk in obesity market.",
      redditBuzz: "r/stocks & r/StockTitan highlight $1.2B cash runway insulating from near-term dilution."
    }
  },
  {
    id: "bcax",
    ticker: "BCAX",
    name: "Bicara Therapeutics",
    ipoStatus: "Recent IPO (Sept 2024)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-arrow-trend-up",
    score: 79,
    mediaScore: 74,
    marketCap: "$1.80B",
    enterpriseValue: "$1.32B",
    cashBalance: "$480M",
    cashRunway: "32 Months",
    grossRaise: "$362M",
    leadCandidate: "Ficerafusp Alfa",
    clinicalPhase: "Phase 2/3 (FORTIFI-HN01)",
    indication: "Head & Neck Cancer (EGFR x TGF-β Bispecific)",
    tam: "$6.5B Head & Neck Oncology",
    underwriters: ["Morgan Stanley", "Leerink Partners", "Piper Sandler"],
    clinicalSummary: "First-in-class bifunctional antibody combining EGFR mAb with TGF-β trap. Outstanding 3-year Phase 1b survival data in HPV-negative HNSCC when paired with Keytruda.",
    financialSummary: "$480M in cash reserves provides over 2.5 years of runway through pivotal mid-2027 interim trial readouts.",
    riskFactors: [
      "Single-asset clinical concentration risk tied to FORTIFI-HN01 outcome.",
      "Complex bispecific antibody manufacturing yield optimization."
    ],
    thesis: "FDA Breakthrough Therapy designation and compelling synergy with Keytruda position ficerafusp alfa as a leading candidate for major pharma acquisition.",
    mediaSentiment: {
      rating: "Moderately Bullish (70% Bullish)",
      pressHighlight: "Board additions (Jeremy Bender, Christy Oliger) announced in July 2026 to prepare for commercial launch.",
      twitterBuzz: "Discussions under $BCAX tracking routine 10b5-1 executive stock sales.",
      redditBuzz: "r/biotech views combination with Keytruda as strong big pharma acquisition target."
    }
  },
  {
    id: "cgon",
    ticker: "CGON",
    name: "CG Oncology",
    ipoStatus: "Recent IPO (Jan 2024)",
    recommendation: "HOLD / NEUTRAL",
    recClass: "rec-hold",
    recIcon: "fa-pause-circle",
    score: 68,
    mediaScore: 94,
    marketCap: "$6.40B",
    enterpriseValue: "$5.81B",
    cashBalance: "$590M",
    cashRunway: "38 Months",
    grossRaise: "$380M",
    leadCandidate: "Cretostimogene Grenadenorepvec",
    clinicalPhase: "Phase 3 (BOND-003)",
    indication: "High-Risk NMIBC Bladder Cancer (Oncolytic Immunotherapy)",
    tam: "$4.2B NMIBC Bladder Cancer",
    underwriters: ["Morgan Stanley", "Goldman Sachs", "Cantor"],
    clinicalSummary: "Phase 3 BOND-003 published in The Lancet Oncology (July 2026) showed a stellar 75.5% Complete Response (CR) rate with 81% 24-month bladder preservation.",
    financialSummary: "$590M cash balance with zero debt. Stock has appreciated >300% since its $19 IPO, expanding market cap to $6.4B.",
    riskFactors: [
      "Current valuation ($6.4B) fully prices in BLA approval and near-term commercial execution.",
      "Requires establishing specialized intravesical delivery commercial infrastructure."
    ],
    thesis: "World-class clinical data and Fast Track/Breakthrough status, but market price reflects full valuation. Recommend accumulating on pullbacks.",
    mediaSentiment: {
      rating: "Extremely Bullish (92% Bullish)",
      pressHighlight: "Pivotal BOND-003 trial published in The Lancet Oncology (July 2026); BLA filing on track for Q4 2026.",
      twitterBuzz: "Urology specialists on X praise 89% 12-month bladder preservation as a clinical paradigm shift.",
      redditBuzz: "r/biotech & r/stocks highlight quality-of-life benefits over radical surgery."
    }
  },
  {
    id: "sctx",
    ticker: "SCTX",
    name: "Scribe Therapeutics",
    ipoStatus: "Recent IPO (2026)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-dna",
    score: 76,
    mediaScore: 83,
    marketCap: "$850M",
    enterpriseValue: "$610M",
    cashBalance: "$240M",
    cashRunway: "28 Months",
    grossRaise: "$129M",
    leadCandidate: "STX-101 / Custom CasX Engine",
    clinicalPhase: "Phase 1/2 Clinical",
    indication: "Cardiometabolic & Monogenic Diseases (In Vivo Gene Editing)",
    tam: "$15B Gene Editing Target",
    underwriters: ["BofA Securities", "Evercore ISI", "Stifel"],
    clinicalSummary: "Co-founded by Nobel Laureate Jennifer Doudna. Engineering custom CRISPR CasX enzymes for high specificity in vivo liver and tissue target editing.",
    financialSummary: "$240M cash reserves bolstered by major pharma partnerships with Eli Lilly and Sanofi providing milestone non-dilutive funding.",
    riskFactors: [
      "In vivo CRISPR off-target editing safety validation.",
      "Early clinical stage development horizon."
    ],
    thesis: "Reopened the gene-editing IPO market with elite scientific pedigree, validated by tier-1 pharma alliances.",
    mediaSentiment: {
      rating: "Bullish (80% Bullish)",
      pressHighlight: "Credited by Fierce Biotech with reopening the in vivo gene editing IPO window; Eli Lilly & Sanofi milestone backing.",
      twitterBuzz: "Cashtag $SCTX tracking co-founder Jennifer Doudna's scientific presentations.",
      redditBuzz: "r/StockTitan praises proprietary CasX enzyme engineering over standard Cas9."
    }
  },
  {
    id: "mane",
    ticker: "MANE",
    name: "Veradermics",
    ipoStatus: "Recent IPO (2026)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-arrow-trend-up",
    score: 77,
    mediaScore: 80,
    marketCap: "$1.10B",
    enterpriseValue: "$790M",
    cashBalance: "$310M",
    cashRunway: "36 Months",
    grossRaise: "$294.8M",
    leadCandidate: "VD-401 (Oral Minoxidil Micro-dose)",
    clinicalPhase: "Phase 3 Registration",
    indication: "Androgenetic Alopecia (Hair Loss)",
    tam: "$8.5B Aesthetic Dermatology",
    underwriters: ["Jefferies", "Guggenheim", "BTIG"],
    clinicalSummary: "Proprietary oral minoxidil targeted formulation optimizing pharmacokinetics while eliminating systemic hypotension side-effects. Phase 3 ongoing.",
    financialSummary: "$310M cash balance provides 3 years of runway through Phase 3 readout and NDA filing.",
    riskFactors: [
      "Competition from generic off-label minoxidil compounders and telehealth platforms.",
      "Consumer cash-pay market adoption sensitivity."
    ],
    thesis: "Solves a major compliance problem in a multi-billion consumer cash-pay market with a fast-track Phase 3 registration pathway.",
    mediaSentiment: {
      rating: "Bullish (76% Bullish)",
      pressHighlight: "Featured in aesthetic dermatology press for Phase 3 oral minoxidil micro-dosing safety profile.",
      twitterBuzz: "Dermatology KOL discussions focus on solving compliance and systemic side-effect hurdles.",
      redditBuzz: "r/tressless & r/stocks show high consumer interest for safer oral hair loss alternative."
    }
  },
  {
    id: "apni",
    ticker: "APNI",
    name: "Apnimed",
    ipoStatus: "Upcoming IPO Candidate (S-1)",
    recommendation: "STRONG WATCH",
    recClass: "rec-watch",
    recIcon: "fa-eye",
    score: 82,
    mediaScore: 86,
    marketCap: "$750M (Est)",
    enterpriseValue: "$590M (Est)",
    cashBalance: "$160M (Target)",
    cashRunway: "30 Months (Est)",
    grossRaise: "$160M Target",
    leadCandidate: "AD109 (Aroxybutynin / Atomoxetine)",
    clinicalPhase: "Phase 3 (Lunaria & Synapse)",
    indication: "Obstructive Sleep Apnea (Oral Combination Pill)",
    tam: "$12B Sleep Apnea Market",
    underwriters: ["Barclays", "RBC Capital", "Needham"],
    clinicalSummary: "First-in-class once-daily oral combination therapy designed to activate upper airway muscles during sleep, offering an alternative to CPAP machines.",
    financialSummary: "Filing S-1 to raise ~$160M in public offering to complete Phase 3 registration trials.",
    riskFactors: [
      "Regulatory approval hurdles for novel oral combination mechanism in sleep medicine.",
      "CPAP market incumbent resistance."
    ],
    thesis: "First viable oral pharmacological alternative to uncomfortable CPAP machines in a $12B market with 80%+ CPAP non-compliance rates.",
    mediaSentiment: {
      rating: "Bullish Pre-IPO (84% Bullish)",
      pressHighlight: "S-1 filing covered across healthcare financial press for disruptor potential in CPAP market.",
      twitterBuzz: "Sleep medicine researchers highlight high demand for non-CPAP oral therapies.",
      redditBuzz: "Patient advocacy and investor subreddits note 80%+ CPAP discontinuation rate as major TAM driver."
    }
  }
];

// Multi-Agent Architecture Specifications Data
const agentSpecs = [
  {
    num: "1",
    file: "01_ipo_scanner_agent.md",
    name: "IPO Scanner & Discovery Agent",
    desc: "Monitors SEC Form S-1/S-1A filings, target valuations, syndicate underwriters, lock-up expiration dates, and initial offering price ranges."
  },
  {
    num: "2",
    file: "02_clinical_pipeline_agent.md",
    name: "Clinical Pipeline Evaluator Agent",
    desc: "Audits primary trial endpoints (CR, ORR, PFS, DOR), statistical significance, adverse event safety profiles, and FDA designations (Fast Track, Breakthrough)."
  },
  {
    num: "3",
    file: "03_financial_valuation_agent.md",
    name: "Financial Health & Valuation Agent",
    desc: "Calculates cash runway buffers, quarterly net operating burn, enterprise value (EV), rNPV valuation models, and equity dilution risk."
  },
  {
    num: "4",
    file: "04_risk_market_agent.md",
    name: "Risk, Patent & Market Agent",
    desc: "Evaluates Total Addressable Market (TAM), patent estate longevity (>2038 composition of matter), competitive standard of care moat, and CDMO manufacturing risks."
  },
  {
    num: "5",
    file: "05_investment_committee_agent.md",
    name: "Investment Committee Synthesizer",
    desc: "Synthesizes multi-agent scores into weighted institutional investment ratings (Strong Buy, Speculative Buy, Hold, Avoid) and drafts full investment memos."
  },
  {
    num: "6",
    file: "06_media_sentiment_agent.md",
    name: "Media, Social & Sentiment Monitor",
    desc: "Scans healthcare press (BioSpace, The Lancet), Twitter/X cashtag engagement, Reddit investor subreddits (r/biotech, r/stocks), and insider trading sentiment."
  }
];

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  renderCards(biotechCompanies);
  renderMatrixTable(biotechCompanies);
  renderAgentCards(agentSpecs);
  setupNavigation();
  setupFilters();
  setupModal();
});

// Render Cards Grid
function renderCards(data) {
  const grid = document.getElementById("company-cards-grid");
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
        <p>No biotech IPO assets match your search or filter criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = data.map(co => `
    <div class="company-card">
      <div>
        <div class="card-top">
          <span class="ticker-badge">${co.ticker}</span>
          <span class="rec-badge ${co.recClass}">
            <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
          </span>
        </div>
        <h3 class="company-title">${co.name}</h3>
        <p class="company-status"><i class="fa-regular fa-calendar-check"></i> ${co.ipoStatus}</p>

        <div class="metrics-row">
          <div class="metric-item">
            <span class="metric-val">${co.marketCap}</span>
            <span class="metric-lbl">Market Cap</span>
          </div>
          <div class="metric-item">
            <span class="metric-val">${co.cashRunway}</span>
            <span class="metric-lbl">Cash Runway</span>
          </div>
          <div class="metric-item">
            <span class="metric-val" style="color:var(--accent-purple);">${co.mediaScore}/100</span>
            <span class="metric-lbl">Media Buzz</span>
          </div>
        </div>

        <div class="asset-box">
          <span class="asset-lbl">Lead Asset & Indication</span>
          <div class="asset-name">${co.leadCandidate} (${co.clinicalPhase})</div>
          <div class="asset-indication">${co.indication}</div>
        </div>
      </div>

      <div class="card-footer">
        <div class="score-badge">
          Agent Score: <span class="score-val">${co.score}/100</span>
        </div>
        <button class="btn-detail" onclick="openCompanyModal('${co.id}')">
          Deep Dive <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  `).join("");
}

// Render Matrix Table
function renderMatrixTable(data) {
  const tbody = document.getElementById("matrix-table-body");
  if (!tbody) return;

  tbody.innerHTML = data.map(co => `
    <tr>
      <td>
        <strong>${co.name}</strong>
        <br><span class="ticker-badge" style="font-size:0.75rem;">${co.ticker}</span>
      </td>
      <td><span style="font-size:0.8rem; color:var(--text-muted);">${co.ipoStatus}</span></td>
      <td><strong style="color:var(--accent-cyan);">${co.leadCandidate}</strong></td>
      <td><span style="font-size:0.825rem;">${co.clinicalPhase}</span></td>
      <td><strong>${co.marketCap}</strong></td>
      <td><span style="color:var(--accent-teal); font-weight:700;">${co.cashRunway}</span></td>
      <td><strong style="color:var(--accent-purple);">${co.mediaScore}/100</strong></td>
      <td><strong style="color:var(--accent-teal);">${co.score}/100</strong></td>
      <td>
        <span class="rec-badge ${co.recClass}">
          <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
        </span>
      </td>
      <td>
        <button class="btn-detail" onclick="openCompanyModal('${co.id}')" style="padding:0.3rem 0.6rem; font-size:0.775rem;">
          View
        </button>
      </td>
    </tr>
  `).join("");
}

// Render Multi-Agent Architecture Cards
function renderAgentCards(specs) {
  const grid = document.getElementById("agent-architecture-grid");
  if (!grid) return;

  grid.innerHTML = specs.map(a => `
    <div class="agent-card">
      <div class="agent-header">
        <div class="agent-num">0${a.num}</div>
        <div>
          <h4 class="agent-title">${a.name}</h4>
          <span class="agent-file">${a.file}</span>
        </div>
      </div>
      <p class="agent-desc">${a.desc}</p>
      <div style="font-size:0.8rem; color:var(--accent-cyan); font-weight:600;">
        <i class="fa-regular fa-file-code"></i> Spec File: <code>agents/${a.file}</code>
      </div>
    </div>
  `).join("");
}

// Setup Tab Navigation
function setupNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      document.getElementById(targetTab)?.classList.add("active");
    });
  });
}

// Setup Filters & Search
function setupFilters() {
  const searchInput = document.getElementById("search-input");
  const chips = document.querySelectorAll(".chip");
  let currentFilter = "all";

  function applyFilters() {
    const query = (searchInput?.value || "").toLowerCase();
    const filtered = biotechCompanies.filter(co => {
      const matchesSearch = co.name.toLowerCase().includes(query) ||
                            co.ticker.toLowerCase().includes(query) ||
                            co.indication.toLowerCase().includes(query) ||
                            co.leadCandidate.toLowerCase().includes(query);
      const matchesRating = currentFilter === "all" || co.recommendation === currentFilter;
      return matchesSearch && matchesRating;
    });
    renderCards(filtered);
    renderMatrixTable(filtered);
  }

  searchInput?.addEventListener("input", applyFilters);

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });
}

// Modal Handlers
function setupModal() {
  const modal = document.getElementById("company-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  closeBtn?.addEventListener("click", () => {
    modal?.classList.remove("active");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// Open Company Modal with Dynamic Agent Synthesis Content
function openCompanyModal(companyId) {
  const co = biotechCompanies.find(c => c.id === companyId);
  if (!co) return;

  const header = document.getElementById("modal-header-content");
  const body = document.getElementById("modal-body-content");
  const modal = document.getElementById("company-modal");

  if (header) {
    header.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:0.75rem;">
        <div>
          <span class="ticker-badge" style="font-size:1.1rem; padding:0.3rem 0.8rem;">${co.ticker}</span>
          <h2 style="font-size:1.8rem; font-weight:800; display:inline; margin-left:0.5rem;">${co.name}</h2>
        </div>
        <span class="rec-badge ${co.recClass}" style="font-size:0.9rem; padding:0.4rem 1rem;">
          <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
        </span>
      </div>
      <p style="color:var(--text-muted); font-size:0.9rem;">${co.ipoStatus} • Target TAM: <strong>${co.tam}</strong></p>
    `;
  }

  if (body) {
    body.innerHTML = `
      <div class="metrics-row" style="margin-top:1rem;">
        <div class="metric-item">
          <span class="metric-val">${co.marketCap}</span>
          <span class="metric-lbl">Market Cap</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">${co.enterpriseValue}</span>
          <span class="metric-lbl">Enterprise Value</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">${co.cashBalance}</span>
          <span class="metric-lbl">Cash Balance</span>
        </div>
        <div class="metric-item">
          <span class="metric-val" style="color:var(--accent-teal);">${co.cashRunway}</span>
          <span class="metric-lbl">Implied Runway</span>
        </div>
        <div class="metric-item">
          <span class="metric-val" style="color:var(--accent-purple);">${co.mediaScore}/100</span>
          <span class="metric-lbl">Media Sentiment</span>
        </div>
        <div class="metric-item">
          <span class="metric-val" style="color:var(--accent-cyan);">${co.score}/100</span>
          <span class="metric-lbl">Agent Composite</span>
        </div>
      </div>

      <div class="modal-sec-title"><i class="fa-solid fa-newspaper"></i> Agent 6: Media, Twitter/X & Reddit Sentiment Audit</div>
      <div style="background:rgba(139, 92, 246, 0.08); border-left:4px solid var(--accent-purple); padding:0.85rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; font-size:0.9rem; margin-bottom:1rem;">
        <p style="margin-bottom:0.4rem;"><strong>Overall Sentiment Rating:</strong> <span style="color:var(--accent-purple); font-weight:700;">${co.mediaSentiment.rating}</span></p>
        <p style="margin-bottom:0.4rem;"><strong>Press Highlights:</strong> ${co.mediaSentiment.pressHighlight}</p>
        <p style="margin-bottom:0.4rem;"><strong>Twitter / X Buzz:</strong> ${co.mediaSentiment.twitterBuzz}</p>
        <p><strong>Reddit Community Sentiment:</strong> ${co.mediaSentiment.redditBuzz}</p>
      </div>

      <div class="modal-sec-title"><i class="fa-solid fa-flask"></i> Clinical & Scientific Evaluation</div>
      <p style="font-size:0.925rem; color:var(--text-main); margin-bottom:0.5rem;">
        <strong>Lead Candidate:</strong> ${co.leadCandidate} (${co.clinicalPhase})
      </p>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">
        ${co.clinicalSummary}
      </p>

      <div class="modal-sec-title"><i class="fa-solid fa-coins"></i> Financial Health & Runway Buffer</div>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">
        ${co.financialSummary}
      </p>

      <div class="modal-sec-title"><i class="fa-solid fa-triangle-exclamation"></i> Risk Matrix & Market Bottlenecks</div>
      <ul style="padding-left:1.25rem; color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">
        ${co.riskFactors.map(r => `<li style="margin-bottom:0.3rem;">${r}</li>`).join("")}
      </ul>

      <div class="modal-sec-title"><i class="fa-solid fa-lightbulb"></i> Investment Thesis</div>
      <div style="background:rgba(56, 189, 248, 0.08); border-left:4px solid var(--accent-cyan); padding:1rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; font-size:0.925rem; color:var(--text-main);">
        ${co.thesis}
      </div>
      
      <div style="margin-top:1.25rem; font-size:0.8rem; color:var(--text-dim);">
        <strong>Syndicate Underwriters:</strong> ${co.underwriters.join(", ")}
      </div>
    `;
  }

  modal?.classList.add("active");
}
