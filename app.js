/**
 * Biotech IPO Intelligence Suite - Client Script
 * Version: 2.2.0 (Enhanced Deep-Research Reports, Corrected Data, PDF Downloads)
 * Professional Institutional Investment Thesis Standard
 */

const APP_VERSION = "2.2.0";

// Dataset of Analyzed Biotechnology IPO Companies (2024-2026)
const biotechCompanies = [
  {
    id: "klra",
    ticker: "KLRA",
    name: "Kailera Therapeutics",
    version: "v2.2",
    pdfFile: "reports/pdf/KLRA_KAILERA_DOSSIER.pdf",
    headquarters: "Waltham, Massachusetts, USA",
    ceo: "Ron Renaud (President & CEO)",
    cmo: "Scott Wasserman, M.D. (CMO)",
    cfo: "Douglas W. Pagan (CFO)",
    coo: "Paul Burgess (COO & CBO)",
    cco: "Jamie Coleman (CCO)",
    ipoStatus: "IPO April 17, 2026 ($16.00/share)",
    recommendation: "STRONG BUY",
    recClass: "rec-strong-buy",
    recIcon: "fa-circle-check",
    score: 88,
    mediaScore: 91,
    marketCap: "$2.40B",
    enterpriseValue: "$1.25B",
    cashBalance: "$1.22B+ (post-IPO)",
    cashRunway: "Mid-2028 (~24 Mos)",
    grossRaise: "$718.8M (Upsized IPO)",
    q1NetLoss: "$78.9M–$83.6M",
    q1RD: "$70.9M",
    leadCandidate: "Ribupatide (KAI-9531)",
    clinicalPhase: "Phase 3 (KaiNETIC Program)",
    indication: "Obesity & Overweight (Dual GLP-1/GIP Agonist)",
    tam: "$100B+ Global Obesity",
    underwriters: ["J.P. Morgan", "Jefferies", "Leerink Partners", "TD Cowen", "Evercore ISI", "William Blair"],
    licensingPartner: "Jiangsu Hengrui Pharmaceuticals ($110M upfront + $200M clinical milestones + $5.725B commercial milestones + mid-single to low-teens royalties; Hengrui holds 19.9% equity)",

    targetPrice: "$38.00",
    impliedUpside: "+90.0%",
    horizon: "24 – 36 Months",
    positionSizing: "Overweight (3.5% Portfolio Allocation)",
    coreThesis: "De-risked Phase 3 entry into the $100B+ obesity market via the largest biotech IPO of 2026 ($718.8M gross proceeds). Ribupatide injectable showed 19.2% weight loss at 36 weeks; oral KAI-7535 achieved 11.1% at W50 in Phase 3. $1.22B+ post-IPO cash buffer funds operations through mid-2028. Hengrui partnership worth up to $5.9B+ in total milestones.",
    marketDynamics: "Global obesity TAM expanding to $100B+ by 2030 (1B+ affected adults). Severe supply constraints and patient compliance hurdles with weekly injections drive massive demand. Kailera uniquely holds both an injectable dual GLP-1/GIP agonist AND an oral small-molecule GLP-1 — a rare dual-format pipeline.",
    
    bullCase: [
      "Fortress $1.22B+ post-IPO balance sheet (upsized $718.8M IPO) provides ~24 months of runway into mid-2028, eliminating secondary equity dilution risks.",
      "Injectable Ribupatide (KAI-9531) achieved 19.2% weight loss at 36 weeks at the 8mg dose — competitive with Eli Lilly's Zepbound.",
      "Oral KAI-7535 achieved 11.1% weight loss at Week 50 (HARBOR-1 Phase 3, July 2026) and HbA1c reduction of 1.68% non-inferior to Farxiga (OUTSTAND-2).",
      "Hengrui deal worth up to $5.9B+ total ($110M upfront + $200M clinical milestones + $5.725B commercial milestones + tiered royalties). Hengrui holds 19.9% equity.",
      "Elite VC syndicate: Bain Capital, RTW Investments, Atlas Venture, Canada Pension Plan, FMR LLC, Wellington Management.",
      "KAI-4729 once-weekly tri-agonist (GLP-1/GIP/glucagon) provides significant pipeline optionality beyond current programs."
    ],
    bearCase: [
      "KAI-7535 oral Phase 3 revealed extreme GI adverse events: ~70% nausea, ~66-68% vomiting (HARBOR-1). Stock fell >10% on July 7, 2026 data release.",
      "Intense competition from Eli Lilly (tirzepatide/Zepbound), Novo Nordisk (semaglutide/Wegovy/CagriSema), and BI/Zealand (survodutide).",
      "Manufacturing: Establishing large-scale peptide supply chain outside China is a significant capital and timeline risk.",
      "Binary risk: KaiNETIC-3 head-to-head Phase 3 trial vs active semaglutide comparator arm.",
      "Hengrui dependency: All core IP is in-licensed; Kailera does not own the underlying composition of matter.",
      "Medicare drug price negotiations and IRA pricing pressure could compress peak pricing at commercial launch."
    ],
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
      { risk: "KAI-7535 Oral GI Tolerability (70% nausea/vomiting)", mitigation: "Company is exploring lower starting doses and slower titration schedules in a new global Phase 2 trial to reduce GI event rates." },
      { risk: "Incumbent Price Wars (Lilly/Novo)", mitigation: "Dual-format pipeline (injectable + oral) provides distinct differentiation; oral KAI-7535 offers potential COGS advantages." },
      { risk: "Hengrui IP Dependency", mitigation: "Multi-layered patent portfolio with ~14 years protection runway (expiring ~2040); exclusive global rights (ex-Greater China)." },
      { risk: "CDMO Supply Chain", mitigation: "Dual-source commercial synthesis partnerships; dedicated fill-finish capacity planning underway." }
    ],
    catalysts: [
      { date: "Aug 25, 2026", event: "Q2 2026 Earnings Report" },
      { date: "Mid-Oct 2026", event: "180-day lock-up expiration" },
      { date: "Q4 2026", event: "Western Phase 2 oral KAI-7535 dose-optimization readout (lower doses/slower titration)" },
      { date: "Feb 2028", event: "KaiNETIC-1 Phase 3 completion & readout (NCT07284875, n=1,800-2,340)" },
      { date: "2H 2027", event: "KaiNETIC-3 head-to-head Phase 3 readout vs semaglutide (NCT07284979)" },
      { date: "1H 2028", event: "Global NDA Submission to US FDA and EMA" }
    ],
    trials: [
      { name: "KaiNETIC-1", nct: "NCT07284875", phase: "Phase 3", pop: "Obesity w/o diabetes (n=1,800-2,340)", endpoint: "% body weight change at 76 wks (Est. completion Feb 2028)" },
      { name: "KaiNETIC-2", nct: "NCT07284901", phase: "Phase 3", pop: "Obesity + T2D", endpoint: "HbA1c & weight loss % (Ongoing)" },
      { name: "KaiNETIC-3", nct: "NCT07284979", phase: "Phase 3", pop: "Obesity w/o T2D", endpoint: "Head-to-head superiority vs active semaglutide" },
      { name: "HARBOR-1 (KAI-7535)", nct: "Phase 3", phase: "Phase 3", pop: "Oral GLP-1 Obesity", endpoint: "10.9% WL at W44, 11.1% at W50 (180mg). HIGH nausea ~70%, vomiting ~66-68%. July 7, 2026." },
      { name: "OUTSTAND-2 (KAI-7535)", nct: "Phase 3", phase: "Phase 3", pop: "Oral GLP-1 T2D", endpoint: "Non-inferior to Farxiga; HbA1c -1.68% (90mg). July 7, 2026." },
      { name: "Ph2 Oral Ribupatide", nct: "Phase 2", phase: "Phase 2", pop: "166 adults, 26 wks", endpoint: "12.1% WL (25mg/50mg) vs 2.3% placebo; 59.1% ≥10% WL at 25mg" }
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
    version: "v2.2",
    pdfFile: "reports/pdf/BCAX_BICARA_DOSSIER.pdf",
    headquarters: "Boston, Massachusetts, USA",
    ceo: "Claire Mazumdar, Ph.D., MBA (Founder & CEO)",
    cmo: "Bill Schelman, M.D., Ph.D. (NEW CMO; David Raben now Senior Exec Advisor)",
    cfo: "Ivan Hyep, MBA (CFO)",
    coo: "Ryan Cohlhepp, PharmD (President & COO)",
    ipoStatus: "IPO Sept 12, 2024 ($18.00/share)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-arrow-trend-up",
    score: 79,
    mediaScore: 74,
    marketCap: "$1.80B",
    enterpriseValue: "$1.32B",
    cashBalance: "$539.8M+",
    cashRunway: "1H 2029 (36+ Mos)",
    grossRaise: "$362M IPO + $150M Follow-on (Feb 2026)",
    leadCandidate: "Ficerafusp Alfa (BCA101)",
    clinicalPhase: "Phase 2/3 (FORTIFI-HN01)",
    indication: "Head & Neck Cancer (EGFR x TGF-β Bispecific)",
    tam: "$6.5B Head & Neck Oncology",
    underwriters: ["Morgan Stanley", "Goldman Sachs", "Guggenheim", "Leerink Partners", "Piper Sandler", "BofA Securities"],
    licensingPartner: "In-House Proprietary Platform (Seed $40M, Series B $108M from RA Capital/Red Tree, Series C $165M from Braidwell/TPG)",

    targetPrice: "$30.00",
    impliedUpside: "+66.6%",
    horizon: "18 – 24 Months",
    positionSizing: "Tactical Overweight (2.5% Allocation)",
    coreThesis: "High-conviction oncology buyout candidate with FDA Breakthrough Therapy designation (Oct 2025). Lead bispecific ficerafusp alfa combines EGFR mAb with TGF-β trap in 1L Head & Neck cancer. Phase 1b: 64% ORR (HPV-neg), median OS 21.3 months (vs 12.3 mo Keytruda benchmark), and 31% three-year OS rate (May 2026). Active FORTIFI-HN01 Phase 2/3 trial (n=650). New board members with M&A expertise (Jeremy Bender led Day One Bio's $2.5B acquisition by Servier).",
    marketDynamics: "$6.5B global Head & Neck cancer market. Standard 1L pembrolizumab monotherapy achieves only 19% ORR with 12.3 month median OS (KEYNOTE-048), creating urgent unmet need for combination biologics that overcome TGF-β-mediated immunosuppression.",
    bullCase: [
      "FDA Breakthrough Therapy designation (Oct 13, 2025) for 1L HPV-negative HNSCC.",
      "Phase 1b data: 64% ORR (HPV-neg), 21.4% CR rate, median OS 21.3 months, median DOR 21.7 months — vs historical 19% ORR and 12.3 month OS for pembrolizumab.",
      "Three-year survival rate of 31% (released May 21, 2026) — exceptional for HPV-negative HNSCC.",
      "Cash runway into 1H 2029 fully funds FORTIFI-HN01 mid-2027 pivotal interim analysis.",
      "M&A-ready board: Jeremy Bender (led Day One Bio to $2.5B Servier acquisition) and Christy Oliger (former SVP Oncology Genentech) joined July 28, 2026.",
      "Analyst coverage: Buy consensus with average PT ~$31.46 (range $16-$46) from Morgan Stanley, Goldman Sachs, Guggenheim."
    ],
    bearCase: [
      "Single-asset concentration risk: entire $1.8B valuation depends on FORTIFI-HN01 outcomes.",
      "CMO transition: Bill Schelman M.D. replaced David Raben M.D. — execution continuity risk.",
      "Insider 10b5-1 sales: COO Cohlhepp sold $817k (28,214 shares at $28.98) July 8; CEO Mazumdar sold $283k July 10.",
      "Phase 3 OS must demonstrate STATISTICALLY SIGNIFICANT superiority over pembrolizumab monotherapy arm.",
      "Bispecific EGFR×TGF-β manufacturing complexity (requires Samsung Biologics partnership for cGMP supply).",
      "Keytruda patent cliff later this decade could alter combination therapy pricing dynamics."
    ],
    pillars: [
      "1. Phase 1b Survival Superiority: 64% ORR (HPV-neg), 21.4% CR, median OS 21.3 months, 31% 3-year OS rate.",
      "2. FDA Breakthrough Designation: Granted October 13, 2025 for 1L R/M HPV-neg HNSCC (CPS ≥1).",
      "3. Cash Runway into 1H 2029: $362M IPO + $150M follow-on fully funds pivotal interim analysis.",
      "4. M&A-Ready Board: Jeremy Bender (Day One Bio $2.5B exit) & Christy Oliger (ex-SVP Genentech Oncology)."
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
      { name: "Phase 1b (1L HNSCC)", nct: "NCT05400122", phase: "Phase 1b", pop: "1L HPV-neg HNSCC + pembro (n=38)", endpoint: "ORR 64%, CR 21.4%, mOS 21.3mo, mPFS 9.8mo, mDOR 21.7mo, 3yr OS 31% (May 2026)" },
      { name: "FORTIFI-HN01 Ph2", nct: "NCT06788990", phase: "Phase 2", pop: "1L HPV-neg HNSCC CPS≥1 (dose selection)", endpoint: "ORR & dose selection (1500mg vs 750mg) — Phase 2 portion" },
      { name: "FORTIFI-HN01 Ph3", nct: "NCT06788990", phase: "Phase 3", pop: "1L HPV-neg HNSCC CPS≥1 (n=650)", endpoint: "OS & PFS vs pembro+placebo (est. completion July 2029)" }
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
    version: "v2.2",
    pdfFile: "reports/pdf/CGON_CG_ONCOLOGY_DOSSIER.pdf",
    headquarters: "Dallas, Texas & Irvine, California, USA",
    ceo: "Arthur Kuan (Chairman, President & CEO)",
    cmo: "Dr. Vijay Kasturi, M.D. (CMO)",
    cfo: "James M. DeTore (CFO)",
    cto: "Swapnil Bhargava, Ph.D. (CTO)",
    gc: "Joshua F. Patterson (General Counsel)",
    ipoStatus: "IPO Jan 25, 2024 ($19.00/share)",
    recommendation: "HOLD / NEUTRAL",
    recClass: "rec-hold",
    recIcon: "fa-pause-circle",
    score: 68,
    mediaScore: 94,
    marketCap: "$6.40B",
    enterpriseValue: "$5.81B",
    cashBalance: "$1.076B (zero debt)",
    cashRunway: "Through 1H 2029 (40+ Mos)",
    grossRaise: "$380M IPO + $238M Follow-on (Dec 2024)",
    q1NetLoss: "~$60.2M ($0.71/share)",
    q1OpLoss: "~$66.4M",
    employees: "142-191",
    leadCandidate: "Cretostimogene Grenadenorepvec",
    clinicalPhase: "Phase 3 (BOND-003)",
    indication: "High-Risk NMIBC Bladder Cancer (Oncolytic Immunotherapy)",
    tam: "$4.2B NMIBC Bladder Cancer",
    underwriters: ["Morgan Stanley", "Goldman Sachs", "Cantor Fitzgerald"],
    licensingPartner: "Proprietary Oncolytic Immunotherapy Engine (Founded Sept 24, 2010 as Cold Genesys by Alex Yeung & Dr. Paul DeRidder; renamed March 2020)",

    targetPrice: "$68.00",
    impliedUpside: "+6.2%",
    horizon: "12 – 24 Months",
    positionSizing: "Market Weight (1.5% Allocation)",
    coreThesis: "Best-in-class NMIBC bladder-sparing asset published in The Lancet Oncology (Aug 2026, lead author Dr. Mark D. Tyson II) with 75.5% CR, 81% 24-month bladder preservation, and ZERO Grade 3/4 treatment-related AEs. Rolling BLA submission completing 2026 under Fast Track + Breakthrough. $1.076B cash (zero debt) with runway through 1H 2029. However, stock is up >300% since IPO at $6.4B market cap, fully pricing in approval. NO composition of matter patents.",
    marketDynamics: "$3-3.6B NMIBC market mid-2020s, scaling to $7B+ by early 2030s. BCG-unresponsive patients face radical cystectomy (bladder removal). Chronic global BCG shortages affect ~1/3 of high-risk patients. Cretostimogene could capture 30-40% targeted market share as a zero-toxicity outpatient intravesical solution.",
    bullCase: [
      "Lancet-published Phase 3 BOND-003 data (Aug 2026): 75.5% CR rate, median DOR at least 27.9 months.",
      "Exceptional bladder preservation: 89% at 12 months, 81% at 24 months; only 3.4% progression to muscle-invasive bladder cancer.",
      "Pristine safety: ZERO Grade 3/4 treatment-related adverse events across all trials.",
      "$1.076B cash fortress with zero debt, runway through 1H 2029.",
      "Rolling BLA submission completing 2026 under FDA Fast Track + Breakthrough Therapy designations.",
      "PIVOT-006 Phase 3 expansion into intermediate-risk NMIBC (n=360-450, enrollment completed ahead of schedule Q3 2025).",
      "Analyst Strong Buy consensus: average PT ~$91.55 (range $80-$108), 500+ institutional holders including Vanguard."
    ],
    bearCase: [
      "Fully priced-in: $6.4B market cap (>300% since $19 IPO). Analyst consensus PT $91.55 implies only +43% from current.",
      "NO composition of matter patents — IP relies solely on methods of use, formulation, and combination patents.",
      "TAR-200 (J&J/Taris) competitive threat: continuous intravesical gemcitabine delivery system with strong clinical data.",
      "Commercial infrastructure build: requires specialized urology intravesical salesforce for buy-and-bill model.",
      "PIVOT-006 binary risk in intermediate-risk NMIBC (RFS vs surveillance).",
      "Q1 2026 quarterly burn rate ~$60M+ ($66.4M operating loss) as commercial prep accelerates."
    ],
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
    version: "v2.2",
    pdfFile: "reports/pdf/SCTX_SCRIBE_DOSSIER.pdf",
    headquarters: "San Francisco Bay Area, California, USA",
    ceo: "Benjamin Oakes, Ph.D. (CEO; Co-founded with Nobel Laureate Dr. Jennifer Doudna & Dr. David Savage)",
    cmo: "Clinical Steering Board",
    cfo: "David Parrot (CFO)",
    cbo: "Svetlana Lucas (CBO)",
    ipoStatus: "IPO July 23-24, 2026 ($15.00/share, upsized)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-dna",
    score: 76,
    mediaScore: 83,
    marketCap: "$850M",
    enterpriseValue: "$610M",
    cashBalance: "$240M",
    cashRunway: "Early 2029 (30 Mos)",
    grossRaise: "$155.51M IPO + $7.5M Sanofi private placement",
    leadCandidate: "STX-1150 (CasX Silencing Engine)",
    clinicalPhase: "Phase 1 First-in-Human",
    indication: "Cardiometabolic PCSK9 Silencing (In Vivo Gene Editing)",
    tam: "$15B Gene Editing Target",
    underwriters: ["Leerink Partners", "Goldman Sachs", "Guggenheim Securities", "Wells Fargo"],
    licensingPartner: "Eli Lilly ($75M upfront + $1.5B milestones, May 2023) & Sanofi (2 deals: $65M upfront + $2.2B+ milestones + $7.5M IPO equity)",

    targetPrice: "$26.00",
    impliedUpside: "+73.3%",
    horizon: "24 – 36 Months",
    positionSizing: "Tactical Growth (2.0% Allocation)",
    coreThesis: "Next-generation in vivo gene editing platform co-founded by Nobel Laureate Dr. Jennifer Doudna. Proprietary CasX enzymes ('XE' and 'ELXR' platforms) enable epigenetic silencing WITHOUT double-stranded DNA cuts — a critical safety advantage. NHP data: single dose achieved >50% LDL-C reduction for >22 months and ~90% PCSK9 knockdown (EAS 2026). $140M upfront + $3.7B+ milestone partnerships with Eli Lilly and Sanofi. Lilly holds 7.36% stake post-IPO.",
    marketDynamics: "$15B cardiovascular gene editing market. 40M+ patients globally with uncontrolled hypercholesterolemia. STX-1150 offers a potential 'one-and-done' single-dose alternative to lifelong statin therapy or bi-weekly mAb injections (Repatha/Praluent) or twice-yearly RNAi (Leqvio).",
    bullCase: [
      "Nobel Laureate pedigree: Co-founded by Jennifer Doudna, David Savage, and Benjamin Oakes from UC Berkeley.",
      "ELXR epigenetic silencing avoids double-stranded DNA cuts: zero chromosomal rearrangements or genotoxicity risk.",
      "NHP data (EAS 2026): Single dose achieved >50% LDL-C reduction for >22 months (ongoing) and ~90% PCSK9 knockdown with clean off-target profile.",
      "$140M upfront + $3.7B+ milestone pharma partnerships: Lilly ($75M + $1.5B) and Sanofi ($65M + $2.2B+). Two Lilly milestones already achieved by Feb 2026.",
      "CasX IP completely bypasses the Cas9 patent war (Broad Institute vs UC Berkeley/CVC) — strong freedom to operate.",
      "Lilly holds 7.36% equity stake; Sanofi invested $7.5M at IPO. Elite dual-pharma sponsorship."
    ],
    bearCase: [
      "Early Stage Pipeline: STX-1150 is in Phase 1 first-in-human testing (data expected 1H 2027).",
      "In Vivo Delivery Hurdles: Targeted lipid nanoparticle (LNP) liver delivery optimization.",
      "RNAi Competition: Facing established commercial therapies like Novartis' Leqvio (inclisiran).",
      "Intellectual Property Litigation Risk: Ongoing broader CRISPR patent landscapes.",
      "Capital Intensity: High R&D burn required to advance multiple pipeline candidates."
    ],
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
    version: "v2.2",
    pdfFile: "reports/pdf/MANE_VERADERMICS_DOSSIER.pdf",
    headquarters: "California, USA",
    ceo: "Reid Waldman, M.D. (CEO & Co-founder)",
    cmo: "Clinical Dermatology Directorate",
    cfo: "Dominic Carrano (CFO & Treasurer)",
    president: "Tim Durso (President & Co-founder)",
    ccso: "Mark Neumann (Chief Commercial & Strategy Officer)",
    ipoStatus: "IPO Feb 4, 2026 ($17.00/share, upsized)",
    recommendation: "SPECULATIVE BUY",
    recClass: "rec-spec-buy",
    recIcon: "fa-arrow-trend-up",
    score: 77,
    mediaScore: 80,
    marketCap: "$1.10B",
    enterpriseValue: "$790M",
    cashBalance: "$766.8M (Raised)",
    cashRunway: "Into 2030 (48+ Mos)",
    grossRaise: "$256.3M IPO + follow-ons ($766.8M total)",
    leadCandidate: "VDPHL01 (Oral Minoxidil XR)",
    clinicalPhase: "Phase 3 Pivotal",
    indication: "Androgenetic Alopecia (Hair Loss)",
    tam: "$8.5B Aesthetic Dermatology",
    underwriters: ["Jefferies", "Guggenheim", "BTIG"],
    licensingPartner: "Proprietary Extended-Release Minoxidil Gel Matrix Formulation (Founded 2019 by dermatologists; Patent protection through 2043)",

    targetPrice: "$32.00",
    impliedUpside: "+88.0%",
    horizon: "18 – 24 Months",
    positionSizing: "Growth Allocation (2.5%)",
    coreThesis: "Solves a critical compliance-safety gap in an $8.5B cash-pay dermatology TAM. VDPHL01 delivers therapeutic doses (8.5mg male, 4.5mg female) via proprietary gel matrix that eliminates cardiac hypotension risks of immediate-release oral minoxidil. Study 302 (n>500) met primary endpoint (p < 0.001) with ZERO cardiac AEs. $766.8M total capital ($256.3M upsized IPO at $17/share) provides runway into 2030. 505(b)(2) regulatory pathway accelerates NDA submission to early 2027. Patent protection through 2043.",
    marketDynamics: "$8.5B global aesthetic dermatology/alopecia market. Cash-pay consumer model bypasses insurance reimbursement. 60%+ of topical minoxidil patients abandon therapy within 6 months. Off-label IR oral minoxidil carries black-box cardiovascular risk. Finasteride causes hormonal side effects including sexual dysfunction.",
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
    version: "v2.2",
    pdfFile: "reports/pdf/APMD_APNIMED_DOSSIER.pdf",
    headquarters: "Cambridge, Massachusetts, USA",
    ceo: "Kevin R. Lind (CEO since June 2026 — NEW; replaced founder Larry Miller)",
    cmo: "Clinical Board (Founder Larry Miller M.D. now Vice Chair)",
    cfo: "Michael Kelly (CFO, appointed July 2026 — NEW)",
    clo: "Steven Spector (CLO & Head of Corporate Affairs, appointed July 2026 — NEW)",
    boardChair: "Paul Sekhri (Independent Chair)",
    ipoStatus: "IPO July 31, 2026 ($16.00/share; opened at $25, +56% day-1 pop)",
    recommendation: "STRONG WATCH",
    recClass: "rec-watch",
    recIcon: "fa-eye",
    score: 82,
    mediaScore: 86,
    marketCap: "$750M",
    enterpriseValue: "$590M",
    cashBalance: "$228.8M",
    cashRunway: "Into 2028+ (30 Mos)",
    grossRaise: "$192M IPO ($228.8M total buffer)",
    leadCandidate: "AD109 / Oxnimbi",
    clinicalPhase: "FDA NDA Accepted (PDUFA Feb 2027)",
    indication: "Obstructive Sleep Apnea (Oral Combination Pill)",
    tam: "$12B Sleep Apnea Market",
    underwriters: ["BofA Securities", "Evercore ISI", "Cantor", "LifeSci Capital"],
    licensingPartner: "Proprietary Oral Combination Pill (Aroxybutynin 2.5mg + Atomoxetine 75mg). Also secured $150M debt from HCRx. Sold SASS JV stake for $100M (April 2026).",

    targetPrice: "$34.00",
    impliedUpside: "+112.5%",
    horizon: "6 – 12 Months",
    positionSizing: "Core Pre-Catalyst (3.0%)",
    coreThesis: "First viable oral pharmacological alternative to CPAP machines for the neuromuscular cause of OSA in all adults (not just obese patients). LunAIRo Phase 3 (n=660): 46.8% AHI reduction vs 6.8% placebo (p < 0.001). FDA NDA accepted July 2026 with PDUFA Feb 28, 2027. No current FDA-approved drug exists for neuromuscular OSA. IPO popped 56% ($16 to $25) on July 31. However, discontinuation rates were 21-29% vs 3-10% placebo — a potential FDA flag. CEO transition (founder Larry Miller to Kevin Lind, June 2026) adds execution uncertainty.",
    marketDynamics: "$7.3-12B sleep apnea device/treatment market affecting 30-80M US adults. 80%+ of diagnosed patients discontinue CPAP masks within 12 months. No FDA-approved drug targets the neuromuscular root cause of OSA. Eli Lilly's Zepbound (tirzepatide) was approved late 2024 but only for obese OSA patients (weight-loss mechanism). AD109/Oxnimbi addresses a fundamentally broader population.",
    bullCase: [
      "FIRST-IN-CLASS: No FDA-approved oral drug exists for neuromuscular OSA in the general adult population.",
      "80%+ CPAP discontinuation rate creates massive untapped market for convenient oral pill alternative.",
      "Phase 3 LunAIRo (n=660): 46.8% AHI reduction vs 6.8% placebo (p < 0.001). Met all secondary endpoints (ODI3, HB4).",
      "FDA NDA accepted July 2026 with assigned PDUFA date February 28, 2027 — near-term binary catalyst.",
      "IPO popped 56% on day 1 ($16 to $25), demonstrating massive investor demand for sleep apnea pharmacotherapy.",
      "$228.8M+ total cash buffer plus $150M HCRx debt facility for commercial launch readiness."
    ],
    bearCase: [
      "HIGH discontinuation: 21-29% of AD109 patients discontinued due to AEs vs 3-10% placebo. Common: insomnia, dry mouth, nausea, urinary hesitation. FDA may require REMS.",
      "Binary PDUFA regulatory risk on February 28, 2027 — approval is not guaranteed for novel combination pharmacology.",
      "CPAP manufacturer defense: ResMed/Philips have commercial lobbying resources to defend market position.",
      "CEO transition risk: Founder Larry Miller M.D. stepped down June 2026; replaced by Kevin Lind. New CFO and CLO both appointed July 2026 — entirely new C-suite.",
      "Runway only to June 2028: May need additional capital raise if FDA delays or requires post-approval studies.",
      "Long-term adherence data still maturing from OLE extension study NCT06566820."
    ],
    pillars: [
      "1. Phase 3 Efficacy: 46.8% AHI reduction vs 6.8% placebo (p < 0.001) in LunAIRo (n=660); all secondary endpoints met.",
      "2. PDUFA Date: FDA NDA accepted July 2026 with target action date February 28, 2027.",
      "3. First Mover: No FDA-approved oral drug for neuromuscular OSA in general adult population (Zepbound only for obese patients).",
      "4. $228.8M+ Capital Buffer: IPO ($192M) + existing cash + $150M HCRx debt facility funds commercial US launch."
    ],
    valuationMatrix: {
      bear: { prob: "20%", cap: "$300M", price: "$6.50", returnVal: "-59.3%" },
      base: { prob: "55%", cap: "$1.60B", price: "$34.00", returnVal: "+112.5%" },
      bull: { prob: "25%", cap: "$3.00B", price: "$64.00", returnVal: "+300.0%" }
    },
    riskMitigations: [
      { risk: "FDA PDUFA Regulatory Risk (Feb 28, 2027)", mitigation: "Both Phase 3 trials (SynAIRgy and LunAIRo) demonstrated consistent safety with zero treatment-related SAEs or deaths. AE discontinuations were mostly mild/moderate." },
      { risk: "High Discontinuation Rate (21-29%)", mitigation: "Most AEs (insomnia, dry mouth) were mild-moderate and may be manageable with dose titration or label guidance. No CNS toxicities." },
      { risk: "Complete C-Suite Turnover (2 months)", mitigation: "Kevin Lind brings extensive pharma commercial launch experience; founder Larry Miller remains as Vice Chair providing continuity." }
    ],
    catalysts: [
      { date: "Feb 28, 2027", event: "FDA PDUFA Target Action Date for AD109 NDA" },
      { date: "1H 2027", event: "US Commercial Market Launch following FDA approval" }
    ],
    trials: [
      { name: "LunAIRo", nct: "NCT05811247", phase: "Phase 3", pop: "Sleep Apnea (n=660)", endpoint: "46.8% AHI reduction vs 6.8% placebo (p<0.001)" },
      { name: "SynAIRgy", nct: "NCT05813275", phase: "Phase 3", pop: "Sleep Apnea Combination", endpoint: "Met primary hypoxic burden endpoints" }
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

// Render Active Selected Company Institutional Investment Thesis View (8-Part Structure + Bull/Bear Boxes + PDF Link)
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
          <a href="${co.pdfFile}" target="_blank" class="github-link-btn" style="background:linear-gradient(135deg, #0284c7, #0d9488); border:none; padding:0.45rem 1rem; font-weight:700; color:white; border-radius:var(--radius-sm);">
            <i class="fa-solid fa-file-pdf"></i> Download PDF Report
          </a>
          <span class="rec-badge ${co.recClass}" style="font-size:0.9rem; padding:0.4rem 1rem;">
            <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
          </span>
          <span style="font-weight:800; color:var(--accent-teal); font-size:1.2rem;">Score: ${co.score}/100</span>
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

      <!-- Section 2: PROMINENT BULL vs BEAR CASE BOXES -->
      <div class="dossier-sec-title"><i class="fa-solid fa-scale-balanced"></i> 2. Bull Case (Upside Drivers) vs. Bear Case (Operational Risks)</div>
      <div class="cases-grid">
        <div class="bull-case-box">
          <div class="bull-case-title"><i class="fa-solid fa-arrow-trend-up"></i> 🟢 The Bull Case (Institutional Catalysts)</div>
          <ul class="case-list">
            ${co.bullCase.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>

        <div class="bear-case-box">
          <div class="bear-case-title"><i class="fa-solid fa-arrow-trend-down"></i> 🔴 The Bear Case (Downside Risks)</div>
          <ul class="case-list">
            ${co.bearCase.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Section 3: Market & Industry Dynamics -->
      <div class="dossier-sec-title"><i class="fa-solid fa-chart-pie"></i> 3. Market & Industry Dynamics</div>
      <div style="background:rgba(9, 13, 22, 0.6); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-glass); margin-bottom:1.5rem; font-size:0.925rem; color:var(--text-muted);">
        <p style="margin-bottom:0.5rem;"><strong style="color:var(--text-main);">Total Addressable Market (TAM):</strong> ${co.tam}</p>
        <p><strong style="color:var(--text-main);">Market Dynamics & Value Proposition:</strong> ${co.marketDynamics}</p>
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
      <div class="dossier-sec-title"><i class="fa-solid fa-link"></i> 8. Verified Source Citations & PDF Downloads</div>
      <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1rem;">
        <a href="${co.pdfFile}" target="_blank" class="github-link-btn" style="background:linear-gradient(135deg, #0284c7, #0d9488); border:none; padding:0.4rem 0.8rem; font-weight:700; color:white;">
          <i class="fa-solid fa-file-pdf"></i> Download PDF Memo (${co.ticker})
        </a>
        ${co.mediaSentiment.links.map(l => `
          <a href="${l.url}" target="_blank" class="github-link-btn" style="padding:0.4rem 0.8rem; font-size:0.825rem; text-decoration:none; background:rgba(56, 189, 248, 0.12); border-color:rgba(56, 189, 248, 0.3); color:var(--text-main);">
            <i class="${l.icon}"></i> ${l.label}
          </a>
        `).join("")}
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
        <a href="${co.pdfFile}" target="_blank" class="btn-detail" style="padding:0.3rem 0.6rem; font-size:0.775rem; text-decoration:none; display:inline-block;">
          PDF
        </a>
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

// Open Company Modal
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
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <a href="${co.pdfFile}" target="_blank" class="github-link-btn" style="background:linear-gradient(135deg, #0284c7, #0d9488); border:none; padding:0.35rem 0.75rem; font-size:0.8rem; font-weight:700; color:white;">
            <i class="fa-solid fa-file-pdf"></i> Download PDF
          </a>
          <span class="rec-badge ${co.recClass}" style="font-size:0.9rem; padding:0.4rem 1rem;">
            <i class="fa-solid ${co.recIcon}"></i> ${co.recommendation}
          </span>
        </div>
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

      <!-- Prominent Bull & Bear Cases in Modal -->
      <div class="modal-sec-title"><i class="fa-solid fa-scale-balanced"></i> Bull Case vs. Bear Case Analysis</div>
      <div class="cases-grid">
        <div class="bull-case-box">
          <div class="bull-case-title"><i class="fa-solid fa-arrow-trend-up"></i> 🟢 The Bull Case</div>
          <ul class="case-list">
            ${co.bullCase.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>

        <div class="bear-case-box">
          <div class="bear-case-title"><i class="fa-solid fa-arrow-trend-down"></i> 🔴 The Bear Case</div>
          <ul class="case-list">
            ${co.bearCase.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
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
