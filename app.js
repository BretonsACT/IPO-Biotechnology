/**
 * Biotech IPO Intelligence Suite - Client Script
 * Multi-Agent Biotechnology Investment Research & Analytics
 * Enhanced with Deep Clinical Research, Granular NCT Identifiers & Cash Runway Projections
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
    cashRunway: "Mid-2028 (56 Mos)",
    grossRaise: "$625M",
    leadCandidate: "Ribupatide (KAI-9531)",
    clinicalPhase: "Phase 3 (KaiNETIC Program)",
    indication: "Obesity & Overweight (Dual GLP-1/GIP Agonist)",
    tam: "$100B+ Global Obesity",
    underwriters: ["Bain Capital", "Jefferies", "Morgan Stanley", "Leerink Partners"],
    clinicalSummary: "Evaluates once-weekly injectable dual GLP-1/GIP agonist in global Phase 3 KaiNETIC trials (KaiNETIC-1 NCT07284875, KaiNETIC-2 NCT07284901, KaiNETIC-3 NCT07284979 vs Wegovy). KAI-7535 oral GLP-1 Phase 3 positive top-line reported in July 2026 (HARBOR-1 & OUTSTAND-2).",
    financialSummary: "Fortress balance sheet following $600M Series B and $625M IPO raise ($1.22B cash). Cash runway through mid-2028 completely de-risks capital needs past Phase 3 readouts.",
    riskFactors: [
      "Heavy incumbent market competition (Eli Lilly's Mounjaro/Zepbound, Novo Nordisk's Wegovy).",
      "Large-scale commercial peptide & small molecule manufacturing expansion required."
    ],
    thesis: "Kailera provides an institutional-grade, de-risked Phase 3 entry into the cardiometabolic megatrend backed by a $1.22B cash buffer and top-tier healthcare VC syndicate.",
    mediaSentiment: {
      rating: "Strongly Bullish (88% Bullish)",
      pressHighlight: "Featured in BioSpace & Endpoints News as largest 2026 biotech IPO; positive Phase 3 ADA 2026 trial readouts.",
      twitterBuzz: "High cashtag engagement ($KLRA) on challenging Eli Lilly & Novo Nordisk in obesity market.",
      redditBuzz: "r/stocks & r/StockTitan highlight $1.2B cash runway insulating from near-term dilution.",
      links: [
        { label: "BioSpace Coverage", icon: "fa-newspaper", url: "https://www.biospace.com/search?q=Kailera" },
        { label: "Fierce Biotech Article", icon: "fa-solid fa-square-rss", url: "https://www.fiercebiotech.com/search?q=Kailera" },
        { label: "Twitter / X ($KLRA)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24KLRA" },
        { label: "Reddit Discourse", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/stocks/search/?q=Kailera" }
      ]
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
    cashBalance: "$539.8M",
    cashRunway: "1H 2029 (36+ Mos)",
    grossRaise: "$362M",
    leadCandidate: "Ficerafusp Alfa (BCA101)",
    clinicalPhase: "Phase 2/3 (FORTIFI-HN01)",
    indication: "Head & Neck Cancer (EGFR x TGF-β Bispecific)",
    tam: "$6.5B Head & Neck Oncology",
    underwriters: ["Morgan Stanley", "Leerink Partners", "Piper Sandler", "BofA Securities"],
    clinicalSummary: "First-in-class bifunctional antibody combining EGFR mAb with TGF-β trap. Global pivotal FORTIFI-HN01 Phase 2/3 trial (NCT06788990, n=650) evaluating 1500mg dose + Keytruda. Phase 1b 3-year OS data exceeded 23 months vs 12.3 mo historical Keytruda benchmark.",
    financialSummary: "$539.8M in cash reserves as of Q1 2026 provides runway into 1H 2029 through pivotal mid-2027 interim trial readouts.",
    riskFactors: [
      "Single-asset clinical concentration risk tied to FORTIFI-HN01 outcome.",
      "Complex bispecific antibody manufacturing yield optimization."
    ],
    thesis: "FDA Breakthrough Therapy designation and compelling synergy with Keytruda position ficerafusp alfa as a leading candidate for major pharma acquisition.",
    mediaSentiment: {
      rating: "Moderately Bullish (70% Bullish)",
      pressHighlight: "Board additions (Jeremy Bender, Christy Oliger) announced in July 2026 to prepare for commercial launch.",
      twitterBuzz: "Discussions under $BCAX tracking routine 10b5-1 executive stock sales.",
      redditBuzz: "r/biotech views combination with Keytruda as strong big pharma acquisition target.",
      links: [
        { label: "BioSpace HNSCC News", icon: "fa-newspaper", url: "https://www.biospace.com/search?q=Bicara" },
        { label: "MarketBeat Financials", icon: "fa-solid fa-chart-bar", url: "https://www.marketbeat.com/stocks/NASDAQ/BCAX/" },
        { label: "Twitter / X ($BCAX)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24BCAX" },
        { label: "Reddit Community", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/biotech/search/?q=Bicara" }
      ]
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
    cashBalance: "$1.076B",
    cashRunway: "Through 2029 (40+ Mos)",
    grossRaise: "$380M",
    leadCandidate: "Cretostimogene Grenadenorepvec",
    clinicalPhase: "Phase 3 (BOND-003)",
    indication: "High-Risk NMIBC Bladder Cancer (Oncolytic Immunotherapy)",
    tam: "$4.2B NMIBC Bladder Cancer",
    underwriters: ["Morgan Stanley", "Goldman Sachs", "Cantor Fitzgerald"],
    clinicalSummary: "Pivotal Phase 3 BOND-003 (NCT04452591) published in The Lancet Oncology (July 2026) demonstrated a 75.5% Complete Response (CR) rate, median DOR of 27.9+ months, and 81% 24-month bladder preservation. Rolling BLA submission completing in Q4 2026.",
    financialSummary: "$1.076 Billion in cash and marketable securities as of Q1 2026 with zero debt, funding operations through 2029. Stock up >300% from $19 IPO.",
    riskFactors: [
      "Current valuation ($6.4B) fully prices in BLA approval and near-term commercial execution.",
      "Requires establishing specialized intravesical delivery commercial infrastructure."
    ],
    thesis: "World-class clinical data and Fast Track/Breakthrough status, but market price reflects full valuation. Recommend accumulating on pullbacks.",
    mediaSentiment: {
      rating: "Extremely Bullish (92% Bullish)",
      pressHighlight: "Pivotal BOND-003 trial published in The Lancet Oncology (July 2026); BLA filing on track for Q4 2026.",
      twitterBuzz: "Urology specialists on X praise 89% 12-month bladder preservation as a clinical paradigm shift.",
      redditBuzz: "r/biotech & r/stocks highlight quality-of-life benefits over radical surgery.",
      links: [
        { label: "The Lancet Oncology Paper", icon: "fa-solid fa-book-journal-whills", url: "https://www.thelancet.com/journals/lanonc/home" },
        { label: "BioSpace Clinical News", icon: "fa-newspaper", url: "https://www.biospace.com/search?q=CG+Oncology" },
        { label: "Twitter / X ($CGON)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24CGON" },
        { label: "Reddit Urology Thread", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/biotech/search/?q=CG+Oncology" }
      ]
    }
  },
  {
    id: "sctx",
    ticker: "SCTX",
    name: "Scribe Therapeutics",
    ipoStatus: "Recent IPO (July 2026)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-dna",
    score: 76,
    mediaScore: 83,
    marketCap: "$850M",
    enterpriseValue: "$610M",
    cashBalance: "$240M",
    cashRunway: "Early 2029 (30 Mos)",
    grossRaise: "$155.51M",
    leadCandidate: "STX-1150 (CasX Silencing Engine)",
    clinicalPhase: "Phase 1 First-in-Human",
    indication: "Cardiometabolic PCSK9 Silencing (In Vivo Gene Editing)",
    tam: "$15B Gene Editing Target",
    underwriters: ["BofA Securities", "Evercore ISI", "Stifel"],
    clinicalSummary: "Co-founded by Nobel Laureate Jennifer Doudna. STX-1150 targets PCSK9 for LDL-C lowering via epigenetic silencing without double-stranded DNA cuts. Australia Phase 1 trial active (data 1H 2027). Pipeline includes STX-1200 (LPA) and STX-1400 (APOC3).",
    financialSummary: "$240M post-IPO cash balance bolstered by strategic equity investment from Sanofi and $1.5B+ milestone collaboration with Eli Lilly. Runway into early 2029.",
    riskFactors: [
      "In vivo CRISPR off-target editing safety validation.",
      "Early clinical stage development horizon."
    ],
    thesis: "Reopened the gene-editing IPO market with elite scientific pedigree, validated by tier-1 pharma alliances.",
    mediaSentiment: {
      rating: "Bullish (80% Bullish)",
      pressHighlight: "Credited by Fierce Biotech with reopening the in vivo gene editing IPO window; Eli Lilly & Sanofi milestone backing.",
      twitterBuzz: "Cashtag $SCTX tracking co-founder Jennifer Doudna's scientific presentations.",
      redditBuzz: "r/StockTitan praises proprietary CasX enzyme engineering over standard Cas9.",
      links: [
        { label: "Fierce Biotech Article", icon: "fa-newspaper", url: "https://www.fiercebiotech.com/search?q=Scribe" },
        { label: "BioPharma Dive Alliances", icon: "fa-solid fa-handshake", url: "https://www.biopharmadive.com/search?q=Scribe" },
        { label: "Twitter / X ($SCTX)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24SCTX" },
        { label: "Reddit Stock Titan", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/StockTitan/search/?q=Scribe" }
      ]
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
    cashBalance: "$766.8M (Raised)",
    cashRunway: "Into 2030 (48+ Mos)",
    grossRaise: "$766.8M",
    leadCandidate: "VDPHL01 (Oral Minoxidil XR)",
    clinicalPhase: "Phase 3 Pivotal",
    indication: "Androgenetic Alopecia (Hair Loss)",
    tam: "$8.5B Aesthetic Dermatology",
    underwriters: ["Jefferies", "Guggenheim", "BTIG"],
    clinicalSummary: "Proprietary extended-release oral minoxidil tablet optimizing target area hair count while eliminating cardiac hypotension risks. Phase 2/3 Study '302' (NCT06724614, n>500) reported positive top-line data April 2026 (p<0.001). Study '304' (NCT06972264) readout expected 2H 2026.",
    financialSummary: "$766.8M aggregate gross proceeds raised via 2026 IPO, follow-on offering, and private placement. Cash runway extends into 2030.",
    riskFactors: [
      "Competition from generic off-label minoxidil compounders and telehealth platforms.",
      "Consumer cash-pay market adoption sensitivity."
    ],
    thesis: "Solves a major compliance problem in a multi-billion consumer cash-pay market with a fast-track Phase 3 registration pathway.",
    mediaSentiment: {
      rating: "Bullish (76% Bullish)",
      pressHighlight: "Featured in aesthetic dermatology press for Phase 3 oral minoxidil micro-dosing safety profile.",
      twitterBuzz: "Dermatology KOL discussions focus on solving compliance and systemic side-effect hurdles.",
      redditBuzz: "r/tressless & r/stocks show high consumer interest for safer oral hair loss alternative.",
      links: [
        { label: "Business Wire Press Release", icon: "fa-newspaper", url: "https://www.businesswire.com" },
        { label: "BioSpace Dermatology News", icon: "fa-solid fa-briefcase-medical", url: "https://www.biospace.com/search?q=Veradermics" },
        { label: "Twitter / X ($MANE)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24MANE" },
        { label: "Reddit Hairloss Thread", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/tressless/search/?q=Veradermics" }
      ]
    }
  },
  {
    id: "apni",
    ticker: "APMD",
    name: "Apnimed",
    ipoStatus: "Recent IPO (July 31, 2026)",
    recommendation: "STRONG WATCH",
    recClass: "rec-watch",
    recIcon: "fa-eye",
    score: 82,
    mediaScore: 86,
    marketCap: "$750M",
    enterpriseValue: "$590M",
    cashBalance: "$228.8M",
    cashRunway: "Into 2028+ (30 Mos)",
    grossRaise: "$192M ($16/share)",
    leadCandidate: "AD109 / Oxnimbi",
    clinicalPhase: "FDA NDA Accepted (PDUFA Feb 2027)",
    indication: "Obstructive Sleep Apnea (Oral Combination Pill)",
    tam: "$12B Sleep Apnea Market",
    underwriters: ["Barclays", "RBC Capital", "Needham"],
    clinicalSummary: "First-in-class once-daily oral combination of aroxybutynin + atomoxetine activating upper airway muscles during sleep. Phase 3 LunAIRo (NCT05811247, n=660) showed 46.8% AHI reduction vs 6.8% placebo (p<0.001). FDA NDA accepted July 2026; PDUFA date February 28, 2027.",
    financialSummary: "Priced upsized IPO on July 30, 2026 at $16.00/share ($192M gross raise). $228.8M total capital buffer funds FDA approval and commercial launch into 2028.",
    riskFactors: [
      "Regulatory approval hurdles for novel oral combination mechanism in sleep medicine.",
      "CPAP market incumbent resistance."
    ],
    thesis: "First viable oral pharmacological alternative to uncomfortable CPAP machines in a $12B market with 80%+ CPAP non-compliance rates.",
    mediaSentiment: {
      rating: "Bullish (84% Bullish)",
      pressHighlight: "S-1 filing covered across healthcare financial press for disruptor potential in CPAP market; FDA NDA accepted July 2026.",
      twitterBuzz: "Sleep medicine researchers highlight high demand for non-CPAP oral therapies.",
      redditBuzz: "Patient advocacy and investor subreddits note 80%+ CPAP discontinuation rate as major TAM driver.",
      links: [
        { label: "Endpoints News S-1 Raise", icon: "fa-newspaper", url: "https://endpoints.news" },
        { label: "BioSpace Phase 3 Study", icon: "fa-solid fa-flask", url: "https://www.biospace.com/search?q=Apnimed" },
        { label: "Twitter / X ($APMD)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24APMD" },
        { label: "Reddit Sleep Apnea Thread", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/stocks/search/?q=Apnimed" }
      ]
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
  renderMediaTab(biotechCompanies);
  renderMatrixTable(biotechCompanies);
  renderAgentCards(agentSpecs);
  setupNavigation();
  setupFilters();
  setupModal();
});

// Render Main Dashboard Cards Grid
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
            <span class="metric-val" style="color:var(--accent-teal); font-size:0.85rem;">${co.cashRunway}</span>
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

// Render Dedicated Media & Sentiment Tab Grid
function renderMediaTab(data) {
  const grid = document.getElementById("media-cards-grid");
  if (!grid) return;

  grid.innerHTML = data.map(co => `
    <div class="company-card" style="border-top: 4px solid var(--accent-purple);">
      <div>
        <div class="card-top">
          <span class="ticker-badge">${co.ticker}</span>
          <span class="score-badge" style="font-size:0.9rem; color:var(--accent-purple);">
            Media Score: <strong>${co.mediaScore}/100</strong>
          </span>
        </div>
        <h3 class="company-title">${co.name}</h3>
        <p class="company-status" style="color:var(--accent-teal); font-weight:600;">
          <i class="fa-solid fa-bullhorn"></i> ${co.mediaSentiment.rating}
        </p>

        <div style="background:rgba(9, 13, 22, 0.6); padding:0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-glass); margin-bottom:1rem; font-size:0.85rem; color:var(--text-muted);">
          <p style="margin-bottom:0.4rem; color:var(--text-main);"><strong>Press Highlight:</strong> ${co.mediaSentiment.pressHighlight}</p>
          <p style="margin-bottom:0.4rem;"><strong>X/Twitter:</strong> ${co.mediaSentiment.twitterBuzz}</p>
          <p><strong>Reddit:</strong> ${co.mediaSentiment.redditBuzz}</p>
        </div>

        <div style="margin-bottom:1rem;">
          <span class="asset-lbl" style="display:block; margin-bottom:0.5rem;"><i class="fa-solid fa-link"></i> Direct Media & Social Links:</span>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            ${co.mediaSentiment.links.map(l => `
              <a href="${l.url}" target="_blank" class="github-link-btn" style="padding:0.35rem 0.65rem; font-size:0.775rem; text-decoration:none; background:rgba(139, 92, 246, 0.12); border-color:rgba(139, 92, 246, 0.3); color:var(--text-main);">
                <i class="${l.icon}"></i> ${l.label}
              </a>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="card-footer">
        <button class="btn-detail" onclick="openCompanyModal('${co.id}')" style="width:100%; text-align:center;">
          Full Agent Audit <i class="fa-solid fa-arrow-right"></i>
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
          <span class="metric-val" style="color:var(--accent-teal); font-size:0.85rem;">${co.cashRunway}</span>
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
        <p style="margin-bottom:0.8rem;"><strong>Reddit Community Sentiment:</strong> ${co.mediaSentiment.redditBuzz}</p>
        
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${co.mediaSentiment.links.map(l => `
            <a href="${l.url}" target="_blank" class="github-link-btn" style="padding:0.3rem 0.6rem; font-size:0.775rem; text-decoration:none; background:rgba(139, 92, 246, 0.2); border-color:rgba(139, 92, 246, 0.4); color:var(--text-main);">
              <i class="${l.icon}"></i> ${l.label}
            </a>
          `).join("")}
        </div>
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
