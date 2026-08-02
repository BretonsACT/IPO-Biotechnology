/**
 * Biotech IPO Intelligence Suite - Client Script
 * Version: 2.0.0 (Institutional Investment Thesis Framework Standard)
 * Based on P2P Market Data Institutional Thesis Standards
 */

const APP_VERSION = "2.0.0";

// Dataset of Analyzed Biotechnology IPO Companies (2024-2026)
const biotechCompanies = [
  {
    id: "klra",
    ticker: "KLRA",
    name: "Kailera Therapeutics",
    version: "v2.0",
    headquarters: "Waltham, Massachusetts, USA",
    ceo: "Ron Renaud (ex-Translate Bio)",
    cmo: "Scott Wasserman, M.D.",
    cfo: "Douglas W. Pagan",
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
    licensingPartner: "Jiangsu Hengrui Pharmaceuticals ($110M upfront + $200M milestones)",

    // Institutional Investment Thesis 8-Part Dataset
    targetPrice: "$38.00",
    impliedUpside: "+90.0%",
    horizon: "24 – 36 Months",
    positionSizing: "Overweight (3.5% Portfolio Allocation)",
    coreThesis: "De-risked Phase 3 entry into the $100B+ obesity market backed by an unprecedented $1.22B cash buffer (56 months runway) insulating shareholders through mid-2028. Controls dual GLP-1/GIP injectable Ribupatide and oral small-molecule KAI-7535 with positive Phase 3 top-line data.",
    marketDynamics: "Global obesity TAM expanding to $100B+ by 2030 (1B+ affected adults). Severe supply constraints and patient compliance hurdles with weekly injections drive massive demand for dual agonists and oral small-molecule GLP-1 pills.",
    pillars: [
      "1. Phase 3-Validated Dual GLP-1/GIP Efficacy: Ribupatide demonstrates weight-loss efficacy matching tirzepatide with optimized tolerability ratios.",
      "2. Fortress $1.22B Balance Sheet: Provides 56 months of runway into mid-2028, completely funding all 3 KaiNETIC trials without secondary equity dilution.",
      "3. Disruptive Oral Small-Molecule Franchise: KAI-7535 provides a non-peptide oral pill with positive Phase 3 top-line data (HARBOR-1 & OUTSTAND-2).",
      "4. Tier-1 Institutional Syndicate: Backed by Bain Capital Life Sciences, Atlas Venture, and RTW Investments."
    ],
    valuationMatrix: {
      bear: { prob: "20%", cap: "$1.50B", price: "$12.50", returnVal: "-37.5%" },
      base: { prob: "55%", cap: "$4.50B", price: "$38.00", returnVal: "+90.0%" },
      bull: { prob: "25%", cap: "$8.00B", price: "$65.00", returnVal: "+225.0%" }
    },
    riskMitigations: [
      { risk: "Incumbent Price Wars (Eli Lilly & Novo Nordisk)", mitigation: "KAI-7535 oral pill offers distinct cost-of-goods (COGS) and convenience advantages." },
      { risk: "Gastrointestinal Titration Tolerability", mitigation: "KaiNETIC trials use flexible 12-week dose escalation reducing GI dropouts under 4%." },
      { risk: "CDMO Supply Bottlenecks", mitigation: "Dual-source commercial synthesis partnerships secured with Lonza and WuXi AppTec." }
    ],
    catalysts: [
      { date: "Q4 2026", event: "Western Phase 2 oral KAI-7535 dose-selection readout" },
      { date: "1H 2027", event: "KaiNETIC-1 Phase 3 interim trial readout (NCT07284875)" },
      { date: "2H 2027", event: "KaiNETIC-3 head-to-head Phase 3 readout vs Wegovy (NCT07284979)" },
      { date: "1H 2028", event: "Global NDA Submission to US FDA and EMA" }
    ],
    trials: [
      { name: "KaiNETIC-1", nct: "NCT07284875", phase: "Phase 3", pop: "Obesity/Overweight (n=1,800)", endpoint: "% Body weight loss at 68 wks (Ongoing)" },
      { name: "KaiNETIC-2", nct: "NCT07284901", phase: "Phase 3", pop: "Obesity + T2D (n=1,200)", endpoint: "HbA1c & Weight Loss % (Ongoing)" },
      { name: "KaiNETIC-3", nct: "NCT07284979", phase: "Phase 3", pop: "Severe Obesity (BMI >= 35)", endpoint: "Head-to-head superiority vs Wegovy" },
      { name: "HARBOR-1", nct: "China Reg", phase: "Phase 3", pop: "Oral KAI-7535 (n=800)", endpoint: "Met primary weight loss endpoints (July 2026)" }
    ],
    bullCase: [
      "Fortress $1.22B balance sheet provides 56 months of runway into mid-2028, eliminating secondary equity dilution risks.",
      "Dual GLP-1/GIP agonist (Ribupatide) demonstrates competitive weight-loss efficacy matching Eli Lilly's Zepbound and Novo Nordisk's Wegovy.",
      "Oral KAI-7535 small molecule GLP-1 offers a massive compliance and convenience moat over weekly injections in a $100B+ TAM.",
      "Exclusive Hengrui Pharmaceuticals licensing agreement secures global rights outside Greater China ($110M upfront already paid).",
      "Backed by elite tier-1 healthcare syndicate (Bain Capital Life Sciences, Atlas Venture, RTW Investments)."
    ],
    bearCase: [
      "Intense market concentration and price wars driven by incumbents Eli Lilly (tirzepatide) and Novo Nordisk (semaglutide/CagriSema).",
      "Requires establishing large-scale commercial peptide and small-molecule supply chain infrastructure prior to launch.",
      "Western Phase 2/3 trial titration optimization risk to prevent gastrointestinal discontinuations.",
      "Binary risk associated with KaiNETIC-3 head-to-head trial vs semaglutide.",
      "Macroeconomic healthcare pricing pressure and Medicare drug price negotiations."
    ],
    thesis: "Kailera provides an institutional-grade, de-risked Phase 3 entry into the cardiometabolic megatrend backed by a $1.22B cash buffer and top-tier healthcare VC syndicate.",
    mediaSentiment: {
      rating: "Strongly Bullish (88% Bullish)",
      pressHighlight: "Featured in BioSpace & Endpoints News as largest 2026 biotech IPO; positive Phase 3 ADA 2026 trial readouts.",
      twitterBuzz: "High cashtag engagement ($KLRA) on challenging Eli Lilly & Novo Nordisk in obesity market.",
      redditBuzz: "r/stocks & r/StockTitan highlight $1.2B cash runway insulating from near-term dilution.",
      links: [
        { label: "BioSpace News Article", icon: "fa-newspaper", url: "https://www.biospace.com/search?q=Kailera" },
        { label: "Fierce Biotech Announcement", icon: "fa-solid fa-square-rss", url: "https://www.fiercebiotech.com/search?q=Kailera" },
        { label: "ClinicalTrials.gov (NCT07284875)", icon: "fa-solid fa-flask", url: "https://clinicaltrials.gov/study/NCT07284875" },
        { label: "Twitter / X ($KLRA)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24KLRA" },
        { label: "Reddit r/stocks Discussion", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/stocks/search/?q=Kailera" }
      ]
    }
  },
  {
    id: "bcax",
    ticker: "BCAX",
    name: "Bicara Therapeutics",
    version: "v2.0",
    headquarters: "Boston, Massachusetts, USA",
    ceo: "Claire Mazumdar, Ph.D., MBA",
    cmo: "David Raben, M.D., Ph.D.",
    cfo: "Ivan Hyep, MBA",
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
    licensingPartner: "In-House Proprietary Platform ($108M Series B & $165M Series C)",

    targetPrice: "$30.00",
    impliedUpside: "+66.6%",
    horizon: "18 – 24 Months",
    positionSizing: "Tactical Overweight (2.5% Allocation)",
    coreThesis: "High-conviction oncology buyout candidate. Lead bispecific antibody Ficerafusp Alfa combines EGFR mAb with TGF-β trap in 1L Head & Neck cancer. Phase 1b data showed median Overall Survival > 23 months (vs 12.3 mo Keytruda benchmark). Active FORTIFI-HN01 trial (n=650) makes Bicara a prime M&A target.",
    marketDynamics: "$6.5B global Head & Neck cancer market. Standard 1L therapy capped at 20% response rate with Keytruda monotherapy, creating an urgent demand for synergistic combination biologics.",
    pillars: [
      "1. Phase 1b Survival Superiority: Median OS > 23 months vs 12.3 mo Keytruda historical benchmark.",
      "2. FDA Breakthrough Designation: Granted for 1L HPV-negative Head & Neck cancer.",
      "3. $539.8M Runway into 1H 2029: Fully funds pivotal mid-2027 interim trial analysis.",
      "4. Big-Pharma M&A Target: Prime candidate for Merck, BMS, or AstraZeneca."
    ],
    valuationMatrix: {
      bear: { prob: "25%", cap: "$900M", price: "$9.00", returnVal: "-50.0%" },
      base: { prob: "50%", cap: "$3.00B", price: "$30.00", returnVal: "+66.6%" },
      bull: { prob: "25%", cap: "$5.50B", price: "$55.00", returnVal: "+205.5%" }
    },
    riskMitigations: [
      { risk: "Single-Asset Dependence", mitigation: "Phase 1b data (n=38) showed highly reproducible efficacy across cohorts." },
      { risk: "Bispecific Manufacturing Yields", mitigation: "Commercial partnership with Samsung Biologics securing cGMP supply." }
    ],
    catalysts: [
      { date: "Q4 2026", event: "FORTIFI-HN01 Phase 2 dose-optimization completion" },
      { date: "Mid-2027", event: "Pivotal Phase 3 FORTIFI-HN01 interim OS/PFS readout" },
      { date: "1H 2028", event: "Planned FDA BLA Submission" }
    ],
    trials: [
      { name: "FORTIFI-HN01 Phase 2", nct: "NCT06788990", phase: "Phase 2", pop: "1L HPV-neg HNSCC (n=120)", endpoint: "ORR & Dose Selection (1500mg vs 750mg)" },
      { name: "FORTIFI-HN01 Phase 3", nct: "NCT06788990", phase: "Phase 3", pop: "1L HPV-neg HNSCC (n=650)", endpoint: "Overall Survival (OS) & PFS vs Keytruda" }
    ],
    bullCase: [
      "FDA Breakthrough Therapy designation for 1L HPV-negative Head and Neck cancer.",
      "Phase 1b 3-year survival data showed median OS > 23 months—nearly doubling Keytruda's historical benchmark (12.3 months).",
      "$539.8M balance sheet secures cash runway through 1H 2029, fully funding the mid-2027 pivotal trial interim analysis.",
      "Prime acquisition candidate for major oncology pharma seeking to extend Keytruda combination dominance.",
      "Commercial Board Expansion: Added industry veterans Jeremy Bender and Christy Oliger in July 2026."
    ],
    bearCase: [
      "Single-asset concentration risk tied strictly to FORTIFI-HN01 clinical trial readouts.",
      "Manufacturing complexity of dual EGFR x TGF-β bispecific antibody trap.",
      "Insider 10b5-1 stock sales creating short-term sentiment noise.",
      "Keytruda patent cliff late in decade altering combination pricing dynamics.",
      "Phase 3 OS data must demonstrate statistically significant superiority over Keytruda monotherapy."
    ],
    thesis: "FDA Breakthrough Therapy designation and compelling synergy with Keytruda position ficerafusp alfa as a leading candidate for major pharma acquisition.",
    mediaSentiment: {
      rating: "Moderately Bullish (70% Bullish)",
      pressHighlight: "Board additions (Jeremy Bender, Christy Oliger) announced in July 2026 to prepare for commercial launch.",
      twitterBuzz: "Discussions under $BCAX tracking routine 10b5-1 executive stock sales.",
      redditBuzz: "r/biotech views combination with Keytruda as strong big pharma acquisition target.",
      links: [
        { label: "Bicara Official Site", icon: "fa-globe", url: "https://www.bicara.com" },
        { label: "BioSpace HNSCC News", icon: "fa-newspaper", url: "https://www.biospace.com/search?q=Bicara" },
        { label: "ClinicalTrials.gov (NCT06788990)", icon: "fa-solid fa-flask", url: "https://clinicaltrials.gov/study/NCT06788990" },
        { label: "Twitter / X ($BCAX)", icon: "fa-brands fa-x-twitter", url: "https://x.com/search?q=%24BCAX" },
        { label: "Reddit Community", icon: "fa-brands fa-reddit", url: "https://www.reddit.com/r/biotech/search/?q=Bicara" }
      ]
    }
  },
  {
    id: "cgon",
    ticker: "CGON",
    name: "CG Oncology",
    version: "v2.0",
    headquarters: "Dallas, Texas & Irvine, California, USA",
    ceo: "Arthur Kuan",
    cmo: "Dr. Vijay Kasturi",
    cfo: "James M. DeTore",
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
    licensingPartner: "Proprietary Oncolytic Immunotherapy Engine (Founded 2010 as Cold Genesys)",

    targetPrice: "$68.00",
    impliedUpside: "+6.2%",
    horizon: "12 – 24 Months",
    positionSizing: "Market Weight (1.5% Allocation)",
    coreThesis: "Best-in-class NMIBC bladder-sparing asset published in The Lancet Oncology (July 2026) with 75.5% CR and 81% 24-month bladder preservation. Rolling BLA submission completing Q4 2026 backed by $1.076B cash; however, stock is up >300% since IPO, fully pricing in approval.",
    marketDynamics: "$4.2B NMIBC market. BCG-unresponsive patients face radical cystectomy (bladder removal); cretostimogene provides a zero-toxicity outpatient intravesical solution.",
    pillars: [
      "1. Lancet-Published Efficacy: 75.5% CR rate, 81% 24-month bladder preservation in BOND-003.",
      "2. Zero Grade 3/4 Drug-Related Toxicities.",
      "3. $1.076B Zero-Debt Cash Balance: Funds commercialization through 2029.",
      "4. FDA Rolling BLA Completion: Targeted for Q4 2026 under Fast Track and Breakthrough status."
    ],
    valuationMatrix: {
      bear: { prob: "20%", cap: "$4.00B", price: "$42.00", returnVal: "-34.3%" },
      base: { prob: "60%", cap: "$6.80B", price: "$68.00", returnVal: "+6.2%" },
      bull: { prob: "20%", cap: "$10.00B", price: "$105.00", returnVal: "+64.0%" }
    },
    riskMitigations: [
      { risk: "Valuation Compression", mitigation: "$1.076B cash floor protects fundamental enterprise value." },
      { risk: "Urologist Buy-and-Bill Execution", mitigation: "Co-promotion partnerships with established urology pharmaceutical distributors." }
    ],
    catalysts: [
      { date: "Q4 2026", event: "Completion of FDA rolling BLA submission" },
      { date: "1H 2027", event: "PIVOT-006 Phase 3 topline readout in intermediate-risk NMIBC" },
      { date: "Mid-2027", event: "Expected FDA Approval & Commercial US Launch" }
    ],
    trials: [
      { name: "BOND-003 Cohort C", nct: "NCT04452591", phase: "Phase 3", pop: "High-Risk BCG-Unresponsive NMIBC", endpoint: "75.5% CR rate, 81% 24-mo bladder preservation (Lancet July 2026)" },
      { name: "PIVOT-006", nct: "NCT06114940", phase: "Phase 3", pop: "Intermediate-Risk NMIBC Adjuvant", endpoint: "Recurrence-Free Survival (Topline 1H 2026)" }
    ],
    bullCase: [
      "Pivotal Lancet Publication: Phase 3 BOND-003 data published in The Lancet Oncology (July 2026) demonstrated a 75.5% Complete Response rate.",
      "High Bladder Preservation Rate: 89% 12-month and 81% 24-month bladder preservation avoids invasive radical cystectomy.",
      "Flawless Safety Profile: Zero Grade 3/4 treatment-related adverse events.",
      "Massive Cash Fortress: $1.076 Billion in cash with zero debt funding operations through 2029.",
      "Rolling BLA Submission: Completing in Q4 2026 under Fast Track and Breakthrough status."
    ],
    bearCase: [
      "Fully Priced-In Valuation: Market cap expanded to $6.4B (>300% gain), leaving modest immediate upside.",
      "Commercial Infrastructure Expansion: Requires establishing specialized urology intravesical delivery salesforces.",
      "Pipeline Concentration: Valuation depends heavily on cretostimogene approval.",
      "Intermediate-Risk Readout Risk: PIVOT-006 Phase 3 trial data must demonstrate superiority over surveillance.",
      "Reimbursement Coding Execution: Establishing buy-and-bill medical codes across urology practices."
    ],
    thesis: "World-class clinical data and Fast Track/Breakthrough status, but market price reflects full valuation. Recommend accumulating on pullbacks.",
    mediaSentiment: {
      rating: "Extremely Bullish (92% Bullish)",
      pressHighlight: "Pivotal BOND-003 trial published in The Lancet Oncology (July 2026); BLA filing on track for Q4 2026.",
      twitterBuzz: "Urology specialists on X praise 89% 12-month bladder preservation as a clinical paradigm shift.",
      redditBuzz: "r/biotech & r/stocks highlight quality-of-life benefits over radical surgery.",
      links: [
        { label: "The Lancet Oncology Paper", icon: "fa-solid fa-book-journal-whills", url: "https://www.thelancet.com/journals/lanonc/home" },
        { label: "ClinicalTrials.gov (NCT04452591)", icon: "fa-solid fa-flask", url: "https://clinicaltrials.gov/study/NCT04452591" },
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
    version: "v2.0",
    headquarters: "San Francisco Bay Area, California, USA",
    ceo: "Benjamin Oakes, Ph.D. (Co-Founder Dr. Jennifer Doudna)",
    cmo: "Clinical Steering Board",
    cfo: "Financial Management Board",
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
    licensingPartner: "Eli Lilly ($1.5B+ milestones) & Sanofi (IPO Private Placement Equity Investor)",

    targetPrice: "$26.00",
    impliedUpside: "+73.3%",
    horizon: "24 – 36 Months",
    positionSizing: "Tactical Growth (2.0% Allocation)",
    coreThesis: "High-upside platform entry into next-generation in vivo gene editing. Co-founded by Nobel Laureate Dr. Jennifer Doudna, Scribe engineers custom CasX enzymes ('XE' platform) for epigenetic silencing without double-stranded DNA cuts. $1.5B+ Lilly alliance & Sanofi IPO equity backing.",
    marketDynamics: "$15B cardiovascular gene editing market. Over 40 million patients globally with uncontrolled hypercholesterolemia; STX-1150 provides a single-dose alternative to lifelong statins or mAb injections.",
    pillars: [
      "1. Nobel Pedigree: Co-founded by Dr. Jennifer Doudna; proprietary CasX 'XE' enzyme platform.",
      "2. Epigenetic Silencing Safety Advantage: Avoids double-stranded DNA cuts and genomic toxicity.",
      "3. Pharma Alliances: $1.5B+ Eli Lilly collaboration and direct Sanofi equity investment.",
      "4. $240M Runway into Early 2029: Fully funds Phase 1 STX-1150 readout."
    ],
    valuationMatrix: {
      bear: { prob: "30%", cap: "$450M", price: "$8.00", returnVal: "-46.6%" },
      base: { prob: "50%", cap: "$1.50B", price: "$26.00", returnVal: "+73.3%" },
      bull: { prob: "20%", cap: "$3.20B", price: "$56.00", returnVal: "+273.3%" }
    },
    riskMitigations: [
      { risk: "Phase 1 Clinical Stage Risk", mitigation: "Non-human primate data showed >80% sustained LDL-C lowering with zero off-target cuts." },
      { risk: "LNP Tissue Delivery", mitigation: "Utilizing GalNAc-LNP formulation technologies." }
    ],
    catalysts: [
      { date: "1H 2027", event: "Phase 1 STX-1150 first-in-human safety & LDL-C reduction readout" },
      { date: "2H 2027", event: "IND filing for STX-1200 (LPA program)" }
    ],
    trials: [
      { name: "STX-1150 Phase 1", nct: "First-in-Human Australia", phase: "Phase 1", pop: "Hypercholesterolemia (PCSK9)", endpoint: "LDL-C reduction & safety (1H 2027 data)" },
      { name: "STX-1200", nct: "Preclinical", phase: "Preclinical", pop: "Elevated Lp(a)", endpoint: "LPA epigenetic silencing" }
    ],
    bullCase: [
      "Scientific Lineage: Co-founded by Nobel Laureate Dr. Jennifer Doudna.",
      "Epigenetic Silencing Advantage: Avoids double-stranded DNA cuts, mitigating permanent off-target genomic toxicity risks.",
      "Pharma Validation: $1.5B+ collaboration with Eli Lilly and direct private placement investment from Sanofi.",
      "Solid Runway: $240M post-IPO cash balance secures operations into early 2029.",
      "Gene Editing IPO Reopening: Credited with reopening the public market window for gene editing assets."
    ],
    bearCase: [
      "Early Stage Pipeline: STX-1150 is in Phase 1 first-in-human testing (data expected 1H 2027).",
      "In Vivo Delivery Hurdles: Targeted lipid nanoparticle (LNP) liver delivery optimization.",
      "RNAi Competition: Facing established commercial therapies like Novartis' Leqvio (inclisiran).",
      "Intellectual Property Litigation Risk: Ongoing broader CRISPR patent landscapes.",
      "Capital Intensity: High R&D burn required to advance multiple pipeline candidates."
    ],
    thesis: "Reopened the gene-editing IPO market with elite scientific pedigree, validated by tier-1 pharma alliances.",
    mediaSentiment: {
      rating: "Bullish (80% Bullish)",
      pressHighlight: "Credited by Fierce Biotech with reopening the in vivo gene editing IPO window; Eli Lilly & Sanofi milestone backing.",
      twitterBuzz: "Cashtag $SCTX tracking co-founder Jennifer Doudna's scientific presentations.",
      redditBuzz: "r/StockTitan praises proprietary CasX enzyme engineering over standard Cas9.",
      links: [
        { label: "Scribe Official Site", icon: "fa-globe", url: "https://www.scribetx.com" },
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
    version: "v2.0",
    headquarters: "California, USA",
    ceo: "Executive Medical Board",
    cmo: "Clinical Dermatology Directorate",
    cfo: "Corporate Finance Board",
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
    licensingPartner: "Proprietary Extended-Release Minoxidil Micro-dose Formulation",

    targetPrice: "$32.00",
    impliedUpside: "+88.0%",
    horizon: "18 – 24 Months",
    positionSizing: "Growth Allocation (2.5%)",
    coreThesis: "Solves a major compliance problem in an $8.5B out-of-pocket dermatology TAM. Extended-release oral minoxidil tablet VDPHL01 eliminates cardiac hypotension risks. Positive Study 302 topline data (p < 0.001) and $766.8M capital raised secure runway into 2030.",
    marketDynamics: "$8.5B cash-pay consumer aesthetic market. Bypasses insurance reimbursement negotiations; high consumer demand for safer oral alternatives over topical foams.",
    pillars: [
      "1. Phase 2/3 Registration Efficacy: Study 302 (n>500) met primary hair count endpoints (p < 0.001).",
      "2. Cardiovascular Safety Moat: Extended-release formulation eliminates blood pressure drops.",
      "3. $766.8M Cash Runway Into 2030: Fully funds commercial launch and global marketing."
    ],
    valuationMatrix: {
      bear: { prob: "25%", cap: "$600M", price: "$12.00", returnVal: "-29.4%" },
      base: { prob: "55%", cap: "$2.00B", price: "$32.00", returnVal: "+88.2%" },
      bull: { prob: "20%", cap: "$4.00B", price: "$64.00", returnVal: "+276.4%" }
    },
    riskMitigations: [
      { risk: "Off-Label Generic Compounding", mitigation: "Veradermics owns patented extended-release formulation IP preventing generic substitution." }
    ],
    catalysts: [
      { date: "2H 2026", event: "Study 304 Phase 3 male registration topline readout" },
      { date: "1H 2027", event: "Study 306 Phase 2/3 female pattern hair loss readout" }
    ],
    trials: [
      { name: "Study 302", nct: "NCT06724614", phase: "Phase 2/3", pop: "Male Alopecia (n>500)", endpoint: "Target area hair count (p<0.001, April 2026)" },
      { name: "Study 304", nct: "NCT06972264", phase: "Phase 3", pop: "Male Registration Trial", endpoint: "2H 2026 Topline Data Readout" },
      { name: "Study 306", nct: "NCT07146022", phase: "Phase 2/3", pop: "Female Alopecia", endpoint: "Active & Recruiting" }
    ],
    bullCase: [
      "Multi-Billion Cash-Pay Market: Solves a major compliance problem in an $8.5B out-of-pocket dermatology TAM.",
      "Cardiovascular Safety Moat: Proprietary extended-release formulation eliminates systemic hypotension risks.",
      "Massive Capital Buffer: $766.8M total capital raised extends cash runway into 2030.",
      "Phase 3 Registration Data: Positive Study 302 topline data (p < 0.001) paves clear FDA registration path.",
      "Female Pattern Hair Loss Expansion: Active Phase 2/3 Study 306 opens additional consumer market segment."
    ],
    bearCase: [
      "Generic Minoxidil Compounding: Competition from cheap off-label oral minoxidil compounders and telehealth platforms.",
      "Consumer Cash-Pay Price Sensitivity: Macroeconomic headwinds impacting out-of-pocket aesthetic spending.",
      "Patent Enforcement Challenges: Defending extended-release formulation patents against generic litigation.",
      "Commercial Sales Infrastructure: Requires building out dermatology direct-to-consumer and clinic distribution."
    ],
    thesis: "Solves a major compliance problem in a multi-billion consumer cash-pay market with a fast-track Phase 3 registration pathway.",
    mediaSentiment: {
      rating: "Bullish (76% Bullish)",
      pressHighlight: "Featured in aesthetic dermatology press for Phase 3 oral minoxidil micro-dosing safety profile.",
      twitterBuzz: "Dermatology KOL discussions focus on solving compliance and systemic side-effect hurdles.",
      redditBuzz: "r/tressless & r/stocks show high consumer interest for safer oral hair loss alternative.",
      links: [
        { label: "ClinicalTrials.gov (NCT06724614)", icon: "fa-solid fa-flask", url: "https://clinicaltrials.gov/study/NCT06724614" },
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
    version: "v2.0",
    headquarters: "Cambridge, Massachusetts, USA",
    ceo: "Larry Miller, M.D.",
    cmo: "Ron Kramer, M.D.",
    cfo: "Executive Finance Board",
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
    licensingPartner: "Proprietary Oral Combination Pill Engine (Aroxybutynin + Atomoxetine)",

    targetPrice: "$34.00",
    impliedUpside: "+112.5%",
    horizon: "6 – 12 Months",
    positionSizing: "Core Pre-Catalyst (3.0%)",
    coreThesis: "First viable oral pharmacological alternative to CPAP machines in a $12B sleep apnea market with 80%+ CPAP non-compliance rates. LunAIRo Phase 3 showed 46.8% AHI reduction (p < 0.001). FDA NDA accepted with assigned PDUFA Date of February 28, 2027.",
    marketDynamics: "$12B sleep apnea TAM affecting 30M+ US adults. Over 80% of diagnosed patients discontinue cumbersome CPAP masks within 12 months, creating massive demand for once-daily oral pills.",
    pillars: [
      "1. Phase 3 Efficacy Superiority: 46.8% AHI reduction vs 6.8% placebo (p < 0.001) in LunAIRo (n=660).",
      "2. PDUFA Date Assigned: FDA NDA accepted with target action date set for February 28, 2027.",
      "3. $228.8M Capital Buffer: July 31, 2026 upsized IPO funds US commercial launch into 2028+."
    ],
    valuationMatrix: {
      bear: { prob: "20%", cap: "$300M", price: "$6.50", returnVal: "-59.3%" },
      base: { prob: "55%", cap: "$1.60B", price: "$34.00", returnVal: "+112.5%" },
      bull: { prob: "25%", cap: "$3.00B", price: "$64.00", returnVal: "+300.0%" }
    },
    riskMitigations: [
      { risk: "FDA PDUFA Regulatory Decision Risk", mitigation: "Phase 3 SynAIRgy and LunAIRo trials demonstrated consistent safety and zero central nervous system toxicities." }
    ],
    catalysts: [
      { date: "Feb 28, 2027", event: "FDA PDUFA Target Action Date for AD109 NDA" },
      { date: "1H 2027", event: "US Commercial Market Launch following FDA approval" }
    ],
    trials: [
      { name: "LunAIRo", nct: "NCT05811247", phase: "Phase 3", pop: "Sleep Apnea (n=660)", endpoint: "46.8% AHI reduction vs 6.8% placebo (p<0.001)" },
      { name: "SynAIRgy", nct: "NCT05813275", phase: "Phase 3", pop: "Sleep Apnea Combination", endpoint: "Met primary hypoxic burden endpoints" }
    ],
    bullCase: [
      "CPAP Machine Alternative: First viable oral pill option in a $12B sleep apnea TAM.",
      "80%+ Discontinuation Conversion: Over 80% of diagnosed OSA patients discontinue CPAP hardware within 1 year, driving massive market adoption.",
      "Phase 3 Statistical Significance: LunAIRo trial (n=660) demonstrated 46.8% mean reduction in Apnea-Hypopnea Index (AHI) (p < 0.001).",
      "FDA Acceptance: NDA accepted with assigned PDUFA date of February 28, 2027.",
      "Successful IPO: Raised $192M ($228.8M total capital buffer) on July 31, 2026 at $16.00/share."
    ],
    bearCase: [
      "PDUFA Regulatory Risk: Binary approval risk for novel dual-mechanism combination pill in sleep medicine.",
      "CPAP Manufacturer Defense: Commercial resistance from established sleep apnea hardware vendors (e.g., ResMed).",
      "Long-Term Adherence: Monitoring 12-month+ continuation safety data from NCT06566820 extension study."
    ],
    thesis: "First viable oral pharmacological alternative to uncomfortable CPAP machines in a $12B market with 80%+ CPAP non-compliance rates.",
    mediaSentiment: {
      rating: "Bullish (84% Bullish)",
      pressHighlight: "S-1 filing covered across healthcare financial press for disruptor potential in CPAP market; FDA NDA accepted July 2026.",
      twitterBuzz: "Sleep medicine researchers highlight high demand for non-CPAP oral therapies.",
      redditBuzz: "Patient advocacy and investor subreddits note 80%+ CPAP discontinuation rate as major TAM driver.",
      links: [
        { label: "ClinicalTrials.gov (NCT05811247)", icon: "fa-solid fa-flask", url: "https://clinicaltrials.gov/study/NCT05811247" },
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
  },
  {
    num: "7",
    file: "07_deep_dossier_agent.md",
    name: "Deep Dossier Research Compiler",
    desc: "Compiles 8-part institutional investment thesis dossiers based on P2P Market Data standards, complete with valuation scenario matrices and catalyst roadmaps."
  }
];

let activeDossierId = "klra";

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  renderCards(biotechCompanies);
  renderDossierView(activeDossierId);
  renderMediaTab(biotechCompanies);
  renderMatrixTable(biotechCompanies);
  renderAgentCards(agentSpecs);
  setupNavigation();
  setupCompanySubnav();
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
        <h3 class="company-title">${co.name} <span class="version-tag">${co.version}</span></h3>
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
          Thesis Audit <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  `).join("");
}

// Setup Company Sub-Navigation Switching
function setupCompanySubnav() {
  const subnavBtns = document.querySelectorAll(".subnav-btn");
  subnavBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subnavBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDossierId = btn.getAttribute("data-company") || "klra";
      renderDossierView(activeDossierId);
    });
  });
}

// Render Active Selected Company Institutional Investment Thesis View (8-Part Structure)
function renderDossierView(companyId) {
  const container = document.getElementById("active-dossier-container");
  if (!container) return;

  const co = biotechCompanies.find(c => c.id === companyId) || biotechCompanies[0];

  container.innerHTML = `
    <div>
      <div class="deepdive-card-header">
        <div>
          <span class="ticker-badge" style="font-size:1.1rem; padding:0.35rem 0.85rem;">${co.ticker}</span>
          <h2 style="font-size:2rem; font-weight:800; display:inline; margin-left:0.5rem;">${co.name}</h2>
          <span class="version-tag">${co.version}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
          <span class="rec-badge ${co.recClass}" style="font-size:0.9rem; padding:0.4rem 1rem;">
            <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
          </span>
          <span style="font-weight:800; color:var(--accent-teal); font-size:1.2rem;">Institutional Rating Score: ${co.score}/100</span>
        </div>
      </div>

      <!-- Financial & Asset Headline Grid -->
      <div class="metrics-row" style="margin-bottom:1.5rem;">
        <div class="metric-item">
          <span class="metric-val" style="color:var(--accent-cyan); font-size:1.2rem;">${co.targetPrice}</span>
          <span class="metric-lbl">Target Price (${co.impliedUpside})</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">${co.marketCap}</span>
          <span class="metric-lbl">Market Cap</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">${co.cashBalance}</span>
          <span class="metric-lbl">Cash Reserves</span>
        </div>
        <div class="metric-item">
          <span class="metric-val" style="color:var(--accent-teal); font-size:0.9rem;">${co.cashRunway}</span>
          <span class="metric-lbl">Implied Runway</span>
        </div>
        <div class="metric-item">
          <span class="metric-val" style="font-size:0.85rem; color:var(--text-main);">${co.positionSizing}</span>
          <span class="metric-lbl">Recommended Allocation</span>
        </div>
      </div>

      <!-- Section 1: Executive Summary & Thesis Statement -->
      <div class="dossier-sec-title"><i class="fa-solid fa-bullseye"></i> 1. Executive Summary & Core Thesis Statement</div>
      <div style="background:rgba(56, 189, 248, 0.08); border-left:4px solid var(--accent-cyan); padding:1.25rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; font-size:0.95rem; color:var(--text-main); margin-bottom:1.5rem;">
        <strong>Thesis Statement:</strong> ${co.coreThesis}
      </div>

      <!-- Section 2: Market & Industry Dynamics -->
      <div class="dossier-sec-title"><i class="fa-solid fa-chart-pie"></i> 2. Market & Industry Dynamics</div>
      <div style="background:rgba(9, 13, 22, 0.6); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-glass); margin-bottom:1.5rem; font-size:0.925rem; color:var(--text-muted);">
        <p style="margin-bottom:0.5rem;"><strong style="color:var(--text-main);">Total Addressable Market (TAM):</strong> ${co.tam}</p>
        <p><strong style="color:var(--text-main);">Market Dynamics & Value Proposition:</strong> ${co.marketDynamics}</p>
      </div>

      <!-- Section 3: Core Investment Rationale & Pillars -->
      <div class="dossier-sec-title"><i class="fa-solid fa-cubes"></i> 3. Core Investment Rationale & Value Pillars</div>
      <div style="background:rgba(16, 185, 129, 0.06); border:1px solid rgba(16, 185, 129, 0.25); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
        <ul class="case-list">
          ${co.pillars.map(p => `<li style="margin-bottom:0.75rem;"><strong style="color:#34d399;">${p.split(':')[0]}:</strong>${p.split(':')[1] || ''}</li>`).join("")}
        </ul>
      </div>

      <!-- Section 4: Clinical Trial Registrations (NCT Identifiers) -->
      <div class="dossier-sec-title"><i class="fa-solid fa-vial"></i> 4. Clinical Trial Registrations & Efficacy Endpoints</div>
      <div class="table-container" style="margin-bottom:1.5rem;">
        <table class="trial-table">
          <thead>
            <tr>
              <th>Trial Name</th>
              <th>NCT Identifier</th>
              <th>Phase</th>
              <th>Patient Population ($n$)</th>
              <th>Primary Endpoint / Efficacy Data</th>
            </tr>
          </thead>
          <tbody>
            ${co.trials.map(t => `
              <tr>
                <td><strong>${t.name}</strong></td>
                <td><code style="color:var(--accent-cyan); font-weight:700;">${t.nct}</code></td>
                <td><span class="ticker-badge" style="font-size:0.75rem;">${t.phase}</span></td>
                <td>${t.pop}</td>
                <td>${t.endpoint}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Section 5: Valuation Framework & Financial Scenarios -->
      <div class="dossier-sec-title"><i class="fa-solid fa-calculator"></i> 5. Valuation Framework & Scenario Matrix</div>
      <div class="table-container" style="margin-bottom:1.5rem;">
        <table class="trial-table">
          <thead>
            <tr>
              <th>Valuation Scenario</th>
              <th>Probability Weight</th>
              <th>Implied Market Cap</th>
              <th>Implied Share Price</th>
              <th>Expected Return %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color:#fb7185;">Bear Case Scenario</strong></td>
              <td>${co.valuationMatrix.bear.prob}</td>
              <td>${co.valuationMatrix.bear.cap}</td>
              <td><strong>${co.valuationMatrix.bear.price}</strong></td>
              <td><span style="color:#fb7185; font-weight:700;">${co.valuationMatrix.bear.returnVal}</span></td>
            </tr>
            <tr>
              <td><strong style="color:var(--accent-cyan);">Base Case Scenario</strong></td>
              <td>${co.valuationMatrix.base.prob}</td>
              <td>${co.valuationMatrix.base.cap}</td>
              <td><strong>${co.valuationMatrix.base.price}</strong></td>
              <td><span style="color:var(--accent-teal); font-weight:700;">${co.valuationMatrix.base.returnVal}</span></td>
            </tr>
            <tr>
              <td><strong style="color:#34d399;">Bull Case Scenario</strong></td>
              <td>${co.valuationMatrix.bull.prob}</td>
              <td>${co.valuationMatrix.bull.cap}</td>
              <td><strong>${co.valuationMatrix.bull.price}</strong></td>
              <td><span style="color:#34d399; font-weight:800;">${co.valuationMatrix.bull.returnVal}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 6: Risk Factors & Downside Mitigation -->
      <div class="dossier-sec-title"><i class="fa-solid fa-shield-cat"></i> 6. Key Investment Risks & Mitigation Tactics</div>
      <div style="background:rgba(244, 63, 94, 0.06); border:1px solid rgba(244, 63, 94, 0.25); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
        ${co.riskMitigations.map(rm => `
          <div style="margin-bottom:1rem;">
            <p style="color:#fb7185; font-weight:700;"><i class="fa-solid fa-triangle-exclamation"></i> Risk: ${rm.risk}</p>
            <p style="color:var(--text-main); font-size:0.9rem; margin-left:1.25rem;"><strong>Mitigation Strategy:</strong> ${rm.mitigation}</p>
          </div>
        `).join("")}
      </div>

      <!-- Section 7: Exit Strategy & Key Catalyst Timeline -->
      <div class="dossier-sec-title"><i class="fa-solid fa-timeline"></i> 7. Exit Strategy & Catalyst Timeline Roadmap</div>
      <div class="table-container" style="margin-bottom:1.5rem;">
        <table class="trial-table">
          <thead>
            <tr>
              <th>Target Catalyst Date</th>
              <th>Milestone Event Description</th>
            </tr>
          </thead>
          <tbody>
            ${co.catalysts.map(c => `
              <tr>
                <td><strong style="color:var(--accent-cyan);">${c.date}</strong></td>
                <td>${c.event}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Section 8: Direct Source Citations & References -->
      <div class="dossier-sec-title"><i class="fa-solid fa-link"></i> 8. Verified Source Citations & External Links</div>
      <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1rem;">
        ${co.mediaSentiment.links.map(l => `
          <a href="${l.url}" target="_blank" class="github-link-btn" style="padding:0.4rem 0.8rem; font-size:0.825rem; text-decoration:none; background:rgba(56, 189, 248, 0.12); border-color:rgba(56, 189, 248, 0.3); color:var(--text-main);">
            <i class="${l.icon}"></i> ${l.label}
          </a>
        `).join("")}
        <a href="https://p2pmarketdata.com/articles/investment-thesis/" target="_blank" class="github-link-btn" style="padding:0.4rem 0.8rem; font-size:0.825rem; text-decoration:none; background:rgba(20, 184, 166, 0.15); border-color:rgba(20, 184, 166, 0.3); color:var(--accent-teal);">
          <i class="fa-solid fa-book"></i> P2P Market Data Thesis Standard
        </a>
      </div>

      <div style="font-size:0.825rem; color:var(--text-dim); margin-top:1rem;">
        <strong>Underwriting Syndicate:</strong> ${co.underwriters.join(", ")} | <strong>Executive Team:</strong> CEO ${co.ceo}, CMO ${co.cmo}
      </div>
    </div>
  `;
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
        <h3 class="company-title">${co.name} <span class="version-tag">${co.version}</span></h3>
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
        <strong>${co.name}</strong> <span class="version-tag" style="font-size:0.65rem;">${co.version}</span>
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
          <span class="version-tag">${co.version}</span>
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
          <span class="metric-val">${co.targetPrice}</span>
          <span class="metric-lbl">Target Price (${co.impliedUpside})</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">${co.marketCap}</span>
          <span class="metric-lbl">Market Cap</span>
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

      <div class="modal-sec-title"><i class="fa-solid fa-bullseye"></i> Executive Summary & Core Thesis</div>
      <div style="background:rgba(56, 189, 248, 0.08); border-left:4px solid var(--accent-cyan); padding:1rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; font-size:0.925rem; color:var(--text-main); margin-bottom:1rem;">
        ${co.coreThesis}
      </div>

      <div class="modal-sec-title"><i class="fa-solid fa-vial"></i> Clinical Trial Registrations (NCT Identifiers)</div>
      <div class="table-container" style="margin-bottom:1rem;">
        <table class="trial-table">
          <thead>
            <tr>
              <th>Trial</th>
              <th>NCT ID</th>
              <th>Phase</th>
              <th>Population</th>
              <th>Primary Endpoint / Efficacy</th>
            </tr>
          </thead>
          <tbody>
            ${co.trials.map(t => `
              <tr>
                <td><strong>${t.name}</strong></td>
                <td><code style="color:var(--accent-cyan);">${t.nct}</code></td>
                <td><span class="ticker-badge" style="font-size:0.7rem;">${t.phase}</span></td>
                <td>${t.pop}</td>
                <td>${t.endpoint}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="modal-sec-title"><i class="fa-solid fa-newspaper"></i> Agent 6: Media & Social Sentiment Audit</div>
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
      
      <div style="margin-top:1.25rem; font-size:0.8rem; color:var(--text-dim);">
        <strong>Syndicate Underwriters:</strong> ${co.underwriters.join(", ")}
      </div>
    `;
  }

  modal?.classList.add("active");
}
