export const NAV_LINKS = [
  { label: 'Causes & Domino Effect', href: '#causes' },
  { label: 'Current Situation', href: '#situation' },
  { label: 'Multi-Layer Solutions', href: '#solutions' },
  { label: 'Governance Tiers', href: '#governance' },
  { label: 'Citizen Readiness', href: '#readiness' },
];

export const HERO_DATA = {
  eyebrow: 'MAN-MADE CRISIS • SYSTEMIC ACCOUNTABILITY • CITIZEN ACTION',
  headlineMain: 'Metro Manila Isn’t Just Drowning in Rain.',
  headlineHighlight: 'It’s Choking on Sachets.',
  subheadline:
    'Every day, 350 tons of solid waste—dominated by single-use plastic sachets—strangle our waterways and cripple 71 flood pumping stations. Flooding in the National Capital Region is no longer just a weather event; it is a preventable governance, corporate, and solid waste emergency.',
  primaryCta: {
    label: 'Take the Digital Advocacy Pledge',
    href: '#pledge',
  },
  secondaryCta: {
    label: 'Trace the Domino Effect',
    href: '#domino-flowchart',
  },
  stats: [
    {
      id: 'waste-volume',
      value: '350 Tons / Day',
      label: 'Daily Solid Waste Choke',
      detail: "Solid waste choking Metro Manila's waterways and drainage intakes daily.",
      accent: 'amber',
      icon: 'Trash2',
    },
    {
      id: 'pumping-deficit',
      value: '60% Deficit',
      label: '71 MMDA Pumping Stations',
      detail: 'Operational capacity loss across pumping stations caused by plastic and debris blockages.',
      accent: 'red',
      icon: 'Gauge',
    },
    {
      id: 'economic-loss',
      value: '₱2.4 Billion / Day',
      label: 'Economic Paralysis',
      detail: 'Daily economic losses from paralyzed transport corridors, halted commerce, and damaged livelihoods.',
      accent: 'amber',
      icon: 'TrendingDown',
    },
    {
      id: 'disease-surge',
      value: '+240% Surge',
      label: 'Leptospirosis & Dengue',
      detail: 'Post-flood spike in waterborne and vector-borne diseases overwhelming local health systems.',
      accent: 'red',
      icon: 'Activity',
    },
  ],
};

export const CAUSES_DATA = {
  eyebrow: 'ROOT CAUSE ANALYSIS',
  headline: 'Why the Metropolis Floods: A Convergence of Upstream and Downstream Failures',
  intro:
    'Extreme typhoons trigger the rain, but human systems turn rainfall into catastrophic inundation. Four interconnected drivers trap floodwaters across Metro Manila.',
  cards: [
    {
      id: 'sachet-economy',
      tag: 'Corporate & Packaging Driver',
      title: 'The "Sachet Economy" & Residual Plastic Influx',
      statValue: '164 Million',
      statLabel: 'Sachets discarded daily in PH (52% of residual plastic stream)',
      description:
        'Multi-layer flexible plastic sachets have near-zero recycling value. Uncollected by informal waste sectors, billions of sachets wash directly into street gutters, storm drains, and esteros, forming impermeable plastic mats inside drainage networks.',
      source: 'GAIA Asia Pacific / World Bank',
      accent: 'amber',
      icon: 'PackageX',
    },
    {
      id: 'ra-9003-gap',
      tag: 'Grassroots Governance Gap',
      title: 'Broken Solid Waste Management at the Source',
      statValue: '20+ Years',
      statLabel: 'Of incomplete RA 9003 enforcement at the barangay level',
      description:
        'Despite the Ecological Solid Waste Management Act of 2000 mandating universal source segregation and Barangay Materials Recovery Facilities (MRFs), weak local compliance leaves tons of unsegregated domestic refuse exposed to surface runoff.',
      source: 'RA 9003 / NSWMC',
      accent: 'amber',
      icon: 'Recycle',
    },
    {
      id: 'watershed-degradation',
      tag: 'Ecological & Upland Driver',
      title: 'Sierra Madre to Manila Bay Watershed Degradation',
      statValue: 'Severe Siltation',
      statLabel: 'Upland deforestation & topsoil loss across critical river basins',
      description:
        'Deprived of forest cover in the Sierra Madre watershed, mountain slopes cannot absorb torrential rainfall. Massive volumes of eroded topsoil wash downstream, heavily silting and shallowing the Marikina, Pasig, and San Juan river systems.',
      source: 'Earth.Org / DENR',
      accent: 'red',
      icon: 'Mountain',
    },
    {
      id: 'clogged-pumping-stations',
      tag: 'Downstream Infrastructure Choke',
      title: 'Clogged Esteros & Overwhelmed Pumping Infrastructure',
      statValue: '71 Stations',
      statLabel: 'Compromised by garbage accumulation (60% capacity deficit)',
      description:
        'Metro Manila relies on mechanical pumping stations to force floodwaters out into Manila Bay and major rivers during high tide. When plastic waste and silt jam trash racks and impellers, pumping capacity drops by up to 60%, turning streets into stagnant catch basins.',
      source: 'MMDA / DENR-NCR',
      accent: 'red',
      icon: 'Waves',
    },
  ],
};

export const DOMINO_DATA = {
  eyebrow: 'SYSTEMIC CASCADE',
  headline: 'The Urban Flood Domino Effect: From Street Gutter to National Crisis',
  subcopy:
    'Select any stage or run the cascade simulation to trace how a single failure in waste governance triggers a metropolitan public health and economic disaster.',
  stages: [
    {
      step: '01',
      id: 'sachet-leakage',
      title: 'Unchecked Plastic & Sachet Leakage',
      badge: '164M Sachets / Day',
      summary:
        'Single-use plastics and unsegregated household waste bypass non-existent or underfunded Barangay MRFs and wash into street inlets.',
      mechanism:
        'Multi-layer sachets bind with organic street litter during initial monsoon downpours, sealing curb inlets and catch basins within minutes.',
      failurePoint: 'Weak RA 9003 Barangay MRF compliance & unchecked corporate sachet production',
      severity: 'amber',
      icon: 'Trash2',
    },
    {
      step: '02',
      id: 'estero-constriction',
      title: 'Siltation & Estero Constriction',
      badge: '350 Tons Daily Refuse',
      summary:
        'Plastic waste combines with eroded topsoil from the degraded Sierra Madre watershed, choking esteros and river tributaries.',
      mechanism:
        'Suspended silt settles around submerged plastic debris, creating dense, concrete-like sludge layers that dramatically reduce waterway carrying capacity.',
      failurePoint: 'Upland watershed deforestation & unintercepted tributary waste flow',
      severity: 'amber',
      icon: 'Layers',
    },
    {
      step: '03',
      id: 'pumping-paralysis',
      title: 'Pumping Station Paralysis',
      badge: '71 Stations • 60% Deficit',
      summary:
        'Trash mats clog mechanical bar screens and damage turbines across 71 MMDA pumping stations, slashing water-pumping capacity by 60%.',
      mechanism:
        'Operators must repeatedly shut down flood pumps during peak rainfall to manually haul tons of tangled sachets and debris off intake grates.',
      failurePoint: 'Overwhelmed downstream mechanical defenses during critical storm windows',
      severity: 'orange',
      icon: 'Gauge',
    },
    {
      step: '04',
      id: 'urban-backflow',
      title: 'Urban Backflow & Street Surge',
      badge: 'Rapid Inundation',
      summary:
        'Unable to discharge into Manila Bay, stormwater surges backward through drainage pipes, rapidly submerging low-lying neighborhoods and roads.',
      mechanism:
        'Hydraulic pressure builds behind blocked pumping stations and high-tide outfalls, forcing contaminated water up through manholes into residential zones.',
      failurePoint: 'Drainage network reversal & loss of flood retention capacity',
      severity: 'orange',
      icon: 'ArrowUpFromLine',
    },
    {
      step: '05',
      id: 'health-emergency',
      title: 'Public Health Emergency',
      badge: '+240% Case Surge',
      summary:
        'Floodwaters mix with sewage and rodent urine, triggering a 240% surge in Leptospirosis and Dengue cases across vulnerable barangays.',
      mechanism:
        'Unprotected wading in contaminated floodwater exposes residents to Leptospira bacteria, while receding stagnant pools create mass Aedes mosquito breeding grounds.',
      failurePoint: 'Gaps in WHO HEPR community protection & household readiness (2 of 9 protocols)',
      severity: 'red',
      icon: 'Biohazard',
    },
    {
      step: '06',
      id: 'economic-paralysis',
      title: 'Economic & Social Paralysis',
      badge: '₱2.4 Billion / Day',
      summary:
        'Supply chains halt, daily wage earners lose income, schools close, and Metro Manila bleeds ₱2.4 Billion daily in productivity and damage.',
      mechanism:
        'Impassable transport arteries paralyze NCR commerce, while low-income households suffer compounding medical bills, property loss, and lost workdays.',
      failurePoint: 'Metropolitan-scale macroeconomic & humanitarian fallout',
      severity: 'red',
      icon: 'TrendingDown',
    },
  ],
};

export const SITUATION_DATA = {
  eyebrow: 'SITUATIONAL DASHBOARD',
  headline: 'The State of Metro Manila’s Flood Vulnerability',
  intro:
    'Current flood control spending prioritizes concrete seawalls and dredging while neglecting the solid waste and readiness deficits that undermine infrastructure from within.',
  pillars: [
    {
      id: 'infrastructure-siege',
      code: 'PILLAR A • INFRASTRUCTURE TELEMETRY',
      title: 'Infrastructure Under Siege',
      highlightStat: '350 Tons Daily Trash vs. 71 Pumping Stations',
      metricValue: '40%',
      metricLabel: 'Effective Pumping Capacity Remaining (60% Deficit)',
      progressPercent: 40,
      accent: 'amber',
      icon: 'ServerCrash',
      narrative:
        'Even functional floodgates fail when choked by plastic. MMDA and DENR-NCR cleanup drives pull hundreds of tons of residual plastic from tributaries daily, yet continuous leakage replenishes the blockages with every monsoon downpour.',
      footerTag: 'MMDA & DENR-NCR Operational Baseline',
    },
    {
      id: 'public-health-fallout',
      code: 'PILLAR B • WHO HEPR LENS',
      title: 'The Public Health Fallout',
      highlightStat: '+240% Surge in Leptospirosis & Dengue',
      metricValue: '+240%',
      metricLabel: 'Post-Flood Waterborne & Vector Disease Spike',
      progressPercent: 85,
      accent: 'red',
      icon: 'Stethoscope',
      narrative:
        'Evaluated against the World Health Organization (WHO) Health Emergency Preparedness, Response, and Resilience (HEPR) framework, post-flood disease spikes expose severe gaps in community protection, prophylactic access, and local clinical surge capacity.',
      footerTag: 'WHO HEPR & DOH Surveillance Framework',
    },
    {
      id: 'readiness-deficit',
      code: 'PILLAR C • GRASSROOTS PREPAREDNESS',
      title: 'The Grassroots Readiness Deficit',
      highlightStat: 'Only 2 of 9 Household Protocols Ready',
      metricValue: '2 / 9',
      metricLabel: 'Average Urban Household Flood Protocols Practiced',
      protocolsCompleted: 2,
      protocolsTotal: 9,
      accent: 'teal',
      icon: 'ShieldAlert',
      narrative:
        'Ground-level assessments reveal that the average urban household practices only 2 out of 9 essential flood readiness protocols—reacting only when water enters the home rather than securing waste, utilities, and prophylactic health defenses ahead of the storm.',
      footerTag: 'Sendai Framework Target G Baseline',
    },
  ],
};

export const SOLUTIONS_DATA = {
  eyebrow: 'EVIDENCE-BASED INTERVENTIONS',
  headline: 'A Multi-Layered Flood Defense Architecture',
  intro:
    'Stopping urban floods requires simultaneous intervention across four defense layers—stopping plastic at the corporate source, intercepting waste in communities, clearing waterways, and restoring upland watersheds.',
  layers: [
    {
      id: 'layer-1-epr',
      layerNumber: 'LAYER 01',
      zone: 'Upstream Corporate Source',
      title: 'Corporate & Policy Accountability',
      lawOrInitiative: 'Extended Producer Responsibility (EPR) Law (RA 11898)',
      targetDomino: 'Neutralizes Domino 01 (164M Daily Sachets)',
      mechanism:
        'Mandates large corporations to establish recovery programs, audit their plastic footprint, and phase in reusable or refillable delivery systems to eliminate sachet leakage at the manufacturing source.',
      keyDeliverables: [
        'Mandatory third-party audits on corporate plastic recovery quotas',
        'Phase-out of non-recyclable multi-layer flexible sachets',
        'Commercial rollout of community refill and reuse stations',
      ],
      accent: 'teal',
      icon: 'Building2',
    },
    {
      id: 'layer-2-mrf',
      layerNumber: 'LAYER 02',
      zone: 'Midstream Community Recovery',
      title: 'Decentralized Waste Recovery',
      lawOrInitiative: 'Ecological Solid Waste Management Act (RA 9003) & Barangay MRFs',
      targetDomino: 'Neutralizes Domino 01 & 02 (350 Tons Daily Refuse)',
      mechanism:
        'Enforces strict household source segregation and funds 100% functional Materials Recovery Facilities (MRFs) in every barangay to divert organics and recyclables before they reach street drains.',
      keyDeliverables: [
        '100% operational Barangay Materials Recovery Facilities (MRFs)',
        'Door-to-door segregated collection & composting of organic waste',
        'Strict anti-littering and storm-advisory waste lockdown protocols',
      ],
      accent: 'amber',
      icon: 'Recycle',
    },
    {
      id: 'layer-3-waterways',
      layerNumber: 'LAYER 03',
      zone: 'Downstream Infrastructure Shield',
      title: 'Waterway Interception & Clearing',
      lawOrInitiative: 'Floating Trash Traps & Bayanihan sa Estero',
      targetDomino: 'Neutralizes Domino 03 & 04 (71 Pumping Stations)',
      mechanism:
        'Deploys engineered floating trash traps and boom barriers across esteros alongside sustained MMDA and DENR-NCR Bayanihan sa Estero cleanups to protect all 71 pumping stations from mechanical failure.',
      keyDeliverables: [
        'Engineered pontoon trash traps across major estero junctions',
        'Regularized Bayanihan sa Estero dredging and easement clearing',
        'Full restoration of the 60% MMDA pumping capacity deficit',
      ],
      accent: 'amber',
      icon: 'Filter',
    },
    {
      id: 'layer-4-watershed',
      layerNumber: 'LAYER 04',
      zone: 'Upland Ecological Buffer',
      title: 'Ecological & Watershed Restoration',
      lawOrInitiative: 'Sierra Madre to Manila Bay Watershed Rehabilitation',
      targetDomino: 'Neutralizes Domino 02 & 04 (Siltation & Runoff Surge)',
      mechanism:
        'Reforests upland catchments to restore natural rainwater absorption, halt topsoil erosion, and stop downstream siltation from shallowing the Marikina, Pasig, and San Juan river systems.',
      keyDeliverables: [
        'Native reforestation across the Upper Marikina & Sierra Madre basins',
        'Slope stabilization to halt downstream riverbeds from shallowing',
        'Integrated ridge-to-reef flood retention between Sierra Madre and Manila Bay',
      ],
      accent: 'teal',
      icon: 'Trees',
    },
  ],
};

export const GOVERNANCE_DATA = {
  eyebrow: 'INSTITUTIONAL ROADMAP',
  headline: 'Governance Implementation Tiers: Who Must Do What',
  intro:
    'Ending Metro Manila’s flood crisis requires enforceable accountability across four distinct tiers of governance—from national corporate regulators down to barangay health emergency teams.',
  tiers: [
    {
      id: 'tier-1-national',
      tierCode: 'TIER 01',
      level: 'National & Corporate Level',
      title: 'National Regulatory & Corporate Enforcement',
      frameworkBadge: 'RA 11898 (EPR Law) & RA 9003',
      leadAgencies: [
        'Department of Environment and Natural Resources (DENR)',
        'National Solid Waste Management Commission (NSWMC)',
        'Congress of the Philippines',
        'Department of Trade and Industry (DTI)',
      ],
      mandate:
        'Enforce RA 11898 (Extended Producer Responsibility) plastic recovery quotas with transparent third-party audits; penalize non-compliant manufacturers and phase out non-environmentally acceptable packaging (NEAPP) under RA 9003.',
      actionItems: [
        'Publish annual corporate plastic footprint and recovery audit registries',
        'Classify multi-layer single-use sachets under the RA 9003 NEAPP phase-out list',
        'Incentivize commercial supply-chain shifts toward refillable and bulk dispensing systems',
      ],
      kpiTarget: '80% verified corporate plastic packaging recovery & sachet phase-down',
      accent: 'amber',
      icon: 'Scale',
    },
    {
      id: 'tier-2-metropolitan',
      tierCode: 'TIER 02',
      level: 'Metropolitan & River Basin Level',
      title: 'Metropolitan Infrastructure & Watershed Management',
      frameworkBadge: '71 Pumping Stations & Ridge-to-Reef',
      leadAgencies: [
        'Metropolitan Manila Development Authority (MMDA)',
        'DENR – National Capital Region (DENR-NCR)',
        'Department of Public Works and Highways (DPWH)',
        'River Basin Control Office (RBCO)',
      ],
      mandate:
        'Maintain 100% operational readiness across 71 pumping stations, scale riverine floating trash traps, institutionalize Bayanihan sa Estero dredging schedules, and fund Sierra Madre to Manila Bay reforestation.',
      actionItems: [
        'Install industrial pontoon trash traps at critical Pasig, Marikina, and San Juan river junctions',
        'Modernize mechanical trash racks and turbine impellers across all 71 MMDA pumping stations',
        'Rehabilitate degraded slopes across the Upper Marikina River Basin Protected Landscape',
      ],
      kpiTarget: '0% pumping capacity deficit (full recovery from the 60% debris loss)',
      accent: 'teal',
      icon: 'Dam',
    },
    {
      id: 'tier-3-lgu-barangay',
      tierCode: 'TIER 03',
      level: 'City, Municipal & Barangay Level',
      title: 'Local Government (LGU) & Barangay Execution',
      frameworkBadge: 'RA 9003 MRFs & Sendai Target G',
      leadAgencies: [
        'City & Municipal Solid Waste Management Boards',
        'Barangay Councils & Sangguniang Kabataan',
        'Local Disaster Risk Reduction and Management Offices (LDRRMOs)',
      ],
      mandate:
        'Establish and operate compliant Barangay Materials Recovery Facilities (MRFs), enforce door-to-door segregated waste collection, clear waterway easement obstructions, and localize Sendai Framework Target G early warning alerts.',
      actionItems: [
        'Operate functional MRFs in 100% of urban barangays to divert organic and recyclable waste',
        'Enforce strict storm-advisory waste lockdowns to prevent curbside garbage washout',
        'Broadcast localized, street-level Multi-Hazard Early Warning System (MHEWS) alerts via SMS and sirens',
      ],
      kpiTarget: 'Eliminate the 350-ton daily solid waste leakage into street inlets and esteros',
      accent: 'amber',
      icon: 'Building',
    },
    {
      id: 'tier-4-public-health',
      tierCode: 'TIER 04',
      level: 'Public Health & Community Level',
      title: 'Public Health & Emergency Resilience (WHO HEPR)',
      frameworkBadge: 'WHO HEPR Framework & DOH 5S',
      leadAgencies: [
        'Department of Health (DOH)',
        'City & Municipal Health Offices',
        'Barangay Health Emergency Response Teams (BHERTs)',
      ],
      mandate:
        'Operationalize the WHO Health Emergency Preparedness, Response, and Resilience (HEPR) pillars—pre-positioning Doxycycline prophylaxis for Leptospirosis, conducting post-flood Dengue vector control, and deploying mobile health clinics.',
      actionItems: [
        'Pre-position free Doxycycline prophylaxis and wound-care kits in flood-prone barangay health stations',
        'Mobilize BHERTs within 48 hours of flood recession for the 5S Dengue vector destruction drive',
        'Train households to advance from 2/9 baseline protocols to full 9/9 flood and health readiness',
      ],
      kpiTarget: 'Reverse the +240% post-flood surge in Leptospirosis and Dengue cases',
      accent: 'red',
      icon: 'HeartPulse',
    },
  ],
};

export const SYNERGY_DATA = {
  eyebrow: 'SYSTEMS INTEGRATION',
  headline: 'Why Isolated Fixes Fail—And How Our Solutions Interlock',
  coreNarrative:
    'Dredging rivers without stopping plastic production simply refills waterways with trash tomorrow. Building higher floodwalls without restoring the Sierra Madre only traps more silt downstream. True flood resilience happens when four systems lock together into a single closed-loop defense.',
  contrastModes: {
    isolated: {
      label: 'Status Quo: Isolated Fixes (Fails)',
      summary:
        'When agencies work in silos, downstream infrastructure is perpetually overwhelmed by upstream leakage.',
      failures: [
        {
          fix: 'Dredging & Pumping Alone',
          flaw: 'Without RA 11898 & Barangay MRFs, 164M daily sachets and 350 tons of trash immediately re-clog all 71 pumping stations.',
        },
        {
          fix: 'Concrete Seawalls & Dikes Alone',
          flaw: 'Without Sierra Madre reforestation, eroded upland topsoil silts up riverbeds, raising water levels above floodwalls.',
        },
        {
          fix: 'Rescue Boats & Relief Goods Alone',
          flaw: 'Without Sendai Target G early warnings and WHO HEPR prophylaxis, families still suffer a 240% surge in Leptospirosis and Dengue.',
        },
      ],
    },
    interlocked: {
      label: 'Advocacy Blueprint: Interlocked Defense (Works)',
      summary:
        'Each upstream layer neutralizes the load on the next downstream layer, breaking the urban flood domino effect.',
    },
  },
  nodes: [
    {
      step: '01',
      id: 'upstream-prevention',
      phase: 'UPSTREAM SOURCE & CATCHMENT',
      title: 'Upstream Prevention',
      instruments: 'RA 11898 (EPR Law) + Sierra Madre Restoration',
      description:
        'Shrinks the volume of single-use sachets entering the market while reforested upland watersheds absorb torrential rainfall and lock topsoil in place.',
      handoffText: 'Reduces raw plastic & silt load entering communities',
      metricNeutralized: 'Stops 164M daily sachets & upland soil erosion',
      accent: 'teal',
      icon: 'Trees',
    },
    {
      step: '02',
      id: 'community-interception',
      phase: 'MIDSTREAM BARANGAY PERIMETER',
      title: 'Community Interception',
      instruments: 'RA 9003 Barangay MRFs + Household Segregation',
      description:
        'Captures daily domestic refuse at the barangay level through strict source segregation and Materials Recovery Facilities before storm runoff can sweep trash into gutters.',
      handoffText: 'Cuts off the 350-ton daily refuse supply to waterways',
      metricNeutralized: 'Eliminates 350 tons/day of street & drain litter',
      accent: 'amber',
      icon: 'Recycle',
    },
    {
      step: '03',
      id: 'waterway-defense',
      phase: 'DOWNSTREAM HYDRAULIC SHIELD',
      title: 'Engineered Waterway Defense',
      instruments: 'Floating Trash Traps + Bayanihan sa Estero',
      description:
        'Acts as a physical firewall across esteros, intercepting residual debris so zero plastic mats reach the intake screens of the 71 MMDA pumping stations.',
      handoffText: 'Restores 100% mechanical flood-pumping discharge',
      metricNeutralized: 'Eliminates the 60% MMDA pumping capacity deficit',
      accent: 'amber',
      icon: 'Filter',
    },
    {
      step: '04',
      id: 'human-protection',
      phase: 'LAST-MILE CITIZEN RESILIENCE',
      title: 'Proactive Human Protection',
      instruments: 'Sendai Target G + WHO HEPR + 9 Household Protocols',
      description:
        'Warns communities hours before inundation and equips families with pre-positioned prophylaxis, evacuation routes, and 9/9 household readiness.',
      handoffText: 'Feeds citizen audit data back into national enforcement',
      metricNeutralized: 'Slashes +240% disease surge & ₱2.4B daily economic loss',
      accent: 'teal',
      icon: 'ShieldCheck',
    },
  ],
};

export const READINESS_DATA = {
  eyebrow: 'FROM REACTIVE RESCUE TO PROACTIVE READINESS',
  headline: 'Anticipatory Action: Closing the "2 of 9" Household Readiness Gap',
  intro:
    'Aligned with Sendai Framework Target G (Multi-Hazard Early Warning Systems) and the WHO HEPR Framework, citizen readiness must begin before the rain falls. Currently, most urban households only execute 2 out of 9 essential flood protocols. Use this interactive tracker to bring your household and barangay to 9/9 Readiness.',
  baselineCount: 2,
  totalProtocols: 9,
  phases: [
    {
      id: 'phase-1-anticipatory',
      phaseCode: 'PHASE I',
      title: 'Pre-Storm Waste & Home Securing',
      frameworkTag: 'Anticipatory Action & RA 9003',
      accent: 'amber',
      protocols: [
        {
          id: 'proto-1',
          number: '01',
          title: 'Lock Down Household Waste Indoors',
          description:
            'Never place trash bags curbside during a rainfall advisory; secure segregated waste indoors so storm runoff cannot wash sachets into street gutters.',
          defaultBaseline: true,
        },
        {
          id: 'proto-2',
          number: '02',
          title: 'Clear Immediate Frontage & Drain Inlets',
          description:
            'Inspect and clear leaves, silt, and plastic wrappers from your home roof gutters and immediate street drain grates prior to typhoon landfall.',
          defaultBaseline: false,
        },
        {
          id: 'proto-3',
          number: '03',
          title: 'Verify Barangay MHEWS Channels (Sendai Target G)',
          description:
            'Subscribe to PAGASA rainfall advisories, Project NOAH flood maps, and your Barangay DRRMO real-time water-level alert system.',
          defaultBaseline: false,
        },
      ],
    },
    {
      id: 'phase-2-evacuation',
      phaseCode: 'PHASE II',
      title: 'Emergency Preparedness & Evacuation Readiness',
      frameworkTag: 'Sendai Framework Target G',
      accent: 'teal',
      protocols: [
        {
          id: 'proto-4',
          number: '04',
          title: 'Pack a Waterproof 72-Hour Go-Bag',
          description:
            'Prepare potable water, non-perishable food, power banks, flashlights, emergency whistles, and sealed legal/medical documents.',
          defaultBaseline: true,
        },
        {
          id: 'proto-5',
          number: '05',
          title: 'Establish Family Evacuation & High-Ground Routes',
          description:
            'Map out your barangay’s designated evacuation center and agree on a family communication and high-ground rendezvous protocol.',
          defaultBaseline: false,
        },
        {
          id: 'proto-6',
          number: '06',
          title: 'Execute Pre-Inundation Utility Shutoff',
          description:
            'Know how and when to shut off the main electrical circuit breaker, LPG valves, and water mains before floodwaters reach floor level.',
          defaultBaseline: false,
        },
      ],
    },
    {
      id: 'phase-3-health',
      phaseCode: 'PHASE III',
      title: 'Public Health & Post-Flood Defense',
      frameworkTag: 'WHO HEPR & DOH 5S Alignment',
      accent: 'red',
      protocols: [
        {
          id: 'proto-7',
          number: '07',
          title: 'Maintain a Flood Health & Prophylaxis Kit',
          description:
            'Stock waterproof boots/PPE, wound antiseptics, oral rehydration salts, and consult local health centers on Doxycycline prophylaxis against Leptospirosis.',
          defaultBaseline: false,
        },
        {
          id: 'proto-8',
          number: '08',
          title: 'Enforce Zero Unprotected Wading',
          description:
            'Treat all floodwater as sewage-contaminated; immediately wash skin with soap and clean water and seek BHERT/medical care if exposed with open cuts.',
          defaultBaseline: false,
        },
        {
          id: 'proto-9',
          number: '09',
          title: 'Eliminate Post-Flood Dengue Breeding Sites (5S)',
          description:
            'Within 48 hours of flood recession, search and destroy stagnant water in tires, plant pots, and clogged gutters to prevent the +240% Dengue/Leptospirosis surge.',
          defaultBaseline: false,
        },
      ],
    },
  ],
};

export const PLEDGE_DATA = {
  eyebrow: 'TAKE ACTION NOW • URBAN FLOOD ADVOCACY PH',
  headline: 'Add Your Voice: Sign the National Petition & Take the Citizen Pledge',
  subcopy:
    'Infrastructure alone cannot save Metro Manila without political will, corporate accountability, and citizen discipline. Sign the national policy petition and lock in your 9/9 Readiness Pledge today.',
  initialSignatures: 18420,
  signatureGoal: 25000,
  petitionAddressees:
    'TO: The Department of Environment and Natural Resources (DENR), Metropolitan Manila Development Authority (MMDA), Local Government Units (LGUs), and Consumer Goods Corporations',
  petitionLead:
    'We, the undersigned citizens and advocates, demand immediate, transparent, and systemic action to end Metro Manila’s man-made flood crisis:',
  petitionDemands: [
    {
      id: 'demand-epr',
      number: '01',
      title: 'Enforce RA 11898 (EPR Law) Without Loopholes',
      detail:
        'Mandate public disclosure of corporate plastic recovery audits and accelerate the transition from single-use multi-layer sachets to refill and reuse delivery systems.',
    },
    {
      id: 'demand-mrf',
      number: '02',
      title: '100% Functional Barangay MRFs Under RA 9003',
      detail:
        'Audit and fund Materials Recovery Facilities in every urban barangay to eliminate the 350 tons of daily refuse leaking into our waterways.',
    },
    {
      id: 'demand-pumps',
      number: '03',
      title: 'Unobstructed Pumping Stations & Watershed Defense',
      detail:
        'Expand floating trash traps, institutionalize Bayanihan sa Estero, modernize all 71 MMDA pumping stations to eliminate the 60% capacity deficit, and protect the Sierra Madre watershed.',
    },
    {
      id: 'demand-health',
      number: '04',
      title: 'Localize Sendai Target G & WHO HEPR Health Shields',
      detail:
        'Equip every flood-prone barangay with accessible Multi-Hazard Early Warning Systems and pre-positioned Leptospirosis and Dengue medical countermeasures.',
    },
  ],
  commitments: [
    {
      id: 'commit-sachets',
      title: 'Refuse & Shift Away from Sachets',
      detail:
        'I will prioritize refillables, bulk containers, and reusable packaging over single-use plastic sachets.',
    },
    {
      id: 'commit-segregate',
      title: 'Segregate at the Source & Hold My Barangay Accountable',
      detail:
        'I will strictly segregate household waste under RA 9003 and advocate for an active MRF in my barangay.',
    },
    {
      id: 'commit-protocols',
      title: 'Complete All 9 Household Flood Protocols',
      detail:
        'I will upgrade my home from 2/9 to 9/9 flood and health readiness and never leave trash outside during storm advisories.',
    },
    {
      id: 'commit-amplify',
      title: 'Amplify the Advocacy',
      detail:
        'I will share data-driven flood preparedness and support community waterway cleanups like Bayanihan sa Estero.',
    },
  ],
};

export const REFERENCES_DATA = {
  eyebrow: 'EVIDENCE & DATA SOURCES',
  headline: 'References & Institutional Citations',
  intro:
    'All statistics, causal models, and policy frameworks presented on Urban Flood Advocacy PH are grounded in national legislation, agency operational records, and peer-reviewed international reports.',
  primaryPortalUrl: 'https://htmlhoster.com/u/urbanfloodadvocacyph/',
  categories: [
    'All Sources',
    'Legislation',
    'Government Data',
    'Global Framework',
    'Empirical Study',
  ],
  items: [
    {
      id: 'ref-ra9003',
      index: '01',
      category: 'Legislation',
      authors: 'Congress of the Philippines',
      year: '2001',
      title: 'Republic Act No. 9003: Ecological Solid Waste Management Act of 2000',
      publisher: 'Official Gazette of the Republic of the Philippines',
      relevance:
        'Mandates universal household source segregation, Barangay Materials Recovery Facilities (MRFs), and the phase-out of non-environmentally acceptable packaging.',
      metricSupported: '20+ Years Grassroots MRF Enforcement Gap',
      url: 'https://www.officialgazette.gov.ph/2001/01/26/republic-act-no-9003-s-2001/',
    },
    {
      id: 'ref-ra11898',
      index: '02',
      category: 'Legislation',
      authors: 'Congress of the Philippines',
      year: '2022',
      title:
        'Republic Act No. 11898: An Act Institutionalizing the Extended Producer Responsibility on Plastic Packaging Waste (EPR Act of 2022)',
      publisher: 'Official Gazette of the Republic of the Philippines',
      relevance:
        'Amends RA 9003 to require obligor enterprises to establish plastic packaging recovery programs, footprint audits, and reusable/refillable alternatives.',
      metricSupported: 'Upstream Corporate Plastic Recovery Quotas',
      url: 'https://www.officialgazette.gov.ph/2022/07/23/republic-act-no-11898/',
    },
    {
      id: 'ref-mmda-denr',
      index: '03',
      category: 'Government Data',
      authors:
        'Metropolitan Manila Development Authority (MMDA) & DENR – National Capital Region (DENR-NCR)',
      year: '2024–2026',
      title:
        'Metro Manila Flood Control Operations, Pumping Station Telemetry, and the "Bayanihan sa Estero" Waterway Rehabilitation Program',
      publisher: 'MMDA Flood Control and Sewerage Management Office / DENR-NCR',
      relevance:
        'Documents daily solid waste interception across NCR tributaries, mechanical bar-screen blockages, and operational capacity deficits during monsoon events.',
      metricSupported: '350 Tons Daily Refuse • 71 Pumping Stations • 60% Capacity Deficit',
      url: 'https://mmda.gov.ph/',
    },
    {
      id: 'ref-gaia',
      index: '04',
      category: 'Empirical Study',
      authors: 'Global Alliance for Incinerator Alternatives (GAIA)',
      year: '2019–2020',
      title:
        'Plastics Exposed: How Waste Assessments and Brand Audits Are Helping Philippine Cities Fight Plastic Pollution & Sachet Economy Report',
      publisher: 'GAIA Asia Pacific (Quezon City)',
      relevance:
        'Establishes household and municipal waste audit baselines demonstrating the dominance of single-use multi-layer sachets in Philippine residual waste streams.',
      metricSupported: '164 Million Sachets/Day • 52% of Residual Plastic Stream',
      url: 'https://www.no-burn.org/plastics-exposed/',
    },
    {
      id: 'ref-worldbank',
      index: '05',
      category: 'Empirical Study',
      authors: 'World Bank Group',
      year: '2021–2026',
      title:
        'Market Study for Philippines: Plastics Circularity Opportunities and Barriers & Solid Waste Management Reports',
      publisher: 'World Bank Group (Washington, DC)',
      relevance:
        'Evaluates material value loss across flexible packaging in the Philippines and models circular economy interventions for urban flood mitigation.',
      metricSupported: 'Near-Zero Recycling Value of Multi-Layer Flexible Plastics',
      url: 'https://www.worldbank.org/en/country/philippines/publication/market-study-for-philippines-plastics-circularity-opportunities-and-barriers-report-landing-page',
    },
    {
      id: 'ref-earthorg',
      index: '06',
      category: 'Empirical Study',
      authors: 'Earth.Org Environmental Research Series',
      year: '2023–2026',
      title:
        'Deforestation, Topsoil Loss, and Watershed Degradation in the Philippines: The Sierra Madre to Manila Bay Ecological Corridor',
      publisher: 'Earth.Org',
      relevance:
        'Analyzes how upland forest cover loss in the Sierra Madre accelerates surface runoff and downstream river siltation across the Marikina and Pasig basins.',
      metricSupported: 'Sierra Madre Topsoil Erosion & Downstream Riverbed Siltation',
      url: 'https://earth.org/',
    },
    {
      id: 'ref-sendai',
      index: '07',
      category: 'Global Framework',
      authors: 'United Nations Office for Disaster Risk Reduction (UNDRR)',
      year: '2015–2030',
      title:
        'Sendai Framework for Disaster Risk Reduction 2015–2030 (Target G: Multi-Hazard Early Warning Systems)',
      publisher: 'UNDRR (Geneva)',
      relevance:
        'Establishes international standards for anticipatory action, community-level disaster risk information, and localized multi-hazard early warning access.',
      metricSupported: 'Sendai Target G Anticipatory Early Warning Standard',
      url: 'https://www.undrr.org/implementing-sendai-framework/what-sendai-framework',
    },
    {
      id: 'ref-who-doh',
      index: '08',
      category: 'Global Framework',
      authors:
        'World Health Organization (WHO) & Department of Health (DOH) Philippines',
      year: '2023–2026',
      title:
        'Strengthening the Global Architecture for Health Emergency Preparedness, Response, and Resilience (HEPR) & National Epidemic Surveillance Reports',
      publisher: 'WHO / DOH Epidemiology Bureau',
      relevance:
        'Guides community health protection, Doxycycline prophylaxis pre-positioning, and post-inundation vector control following urban flood events.',
      metricSupported: '+240% Post-Flood Surge in Leptospirosis & Dengue Cases',
      url: 'https://www.who.int/publications/m/item/strengthening-the-global-architecture-for-health-emergency-preparedness-response-and-resilience',
    },
    {
      id: 'ref-jica-neda',
      index: '09',
      category: 'Government Data',
      authors:
        'Japan International Cooperation Agency (JICA) & National Economic and Development Authority (NEDA)',
      year: '2022–2026',
      title:
        'Roadmap for Transport Infrastructure Development and Urban Flood Economic Loss Assessments for Metro Manila',
      publisher: 'JICA / NEDA',
      relevance:
        'Quantifies macroeconomic productivity losses, logistical paralysis, and household income disruption caused by metropolitan inundation.',
      metricSupported: '₱2.4 Billion Daily Economic Loss in Metro Manila',
      url: 'https://www.jica.go.jp/english/',
    },
    {
      id: 'ref-ufaph-portal',
      index: '10',
      category: 'Empirical Study',
      authors: 'Urban Flood Advocacy PH Portal',
      year: '2026',
      title:
        'Primary Digital Advocacy Reference, Causal Domino Architecture, and Community Readiness Dataset',
      publisher: 'Urban Flood Advocacy PH',
      relevance:
        'Primary reference synthesis granted for digital advocacy distribution, including the grassroots household flood readiness baseline.',
      metricSupported: 'Only 2 of 9 Household Protocols Ready Baseline',
      url: 'https://htmlhoster.com/u/urbanfloodadvocacyph/',
    },
  ],
};

export const BLOGS_DATA = {
  eyebrow: 'FIELD NOTES & PERSONAL REFLECTIONS',
  headline: 'Voices from the Floodplains: Personal Advocacy Logs',
  intro:
    'Beyond macroeconomic metrics and pumping station telemetry lies the lived reality of navigating flooded streets, sachet-choked esteros, and community resilience.',
  posts: [
    {
      id: 'blog-sheet-1',
      photoPosition: 'top-left', // Entry 1: Small square picture at top-left
      entryCode: 'LOG #01 • PERSONAL BLOG',
      title: 'Wading Through the Sachet Tide',
      author: 'Shawn Justin Fabillar',
      role: 'Lead Developer & Flood Advocate',
      date: 'November 2026',
      location: 'Cavite',
      // Place your image inside the public/ folder (e.g., public/blog-photo-1.jpg)
      imagePath: 'shawn.png',
      imageCaption: 'Image by storyset.com/people',
      paragraphs: [
        "You just finished eating a pack of biscuits, and you find yourself in a place where no public trash cans are nearby. What will you do? You might think that you can just throw it anywhere because it's not like one piece of plastic sachet will do much—and most people think that way, too.",
        "Although one single plastic sachet does, in fact, have almost no impact on the environment, an estimated 164 million sachets are discarded daily in the Philippines (GAIA, 2019). It is also a fact that multilayered flexible plastics have almost no recycling value; consequently, most sachets are left uncollected and end up directly in street gutters, storm drains, and esteros, forming impermeable plastic mats inside drainage networks (GAIA, 2019). How does this affect you? When plastic combines with topsoil and forms trash mats, it chokes our esteros, river tributaries, and, most of all, our pumping stations. Unable to discharge, stormwater surges backward through our drainage pipes, submerging neighborhoods in floods.",
        "What can you do? First, practice personal accountability by holding onto your empty wrappers until you find a proper disposal bin. Next, try to reduce your reliance on single-use plastics by buying in bulk or switching to reusable containers whenever possible. You can also advocate for better local waste management systems and support policies that hold corporations accountable for the packaging they produce. While holding onto one small wrapper might seem insignificant, our collective habits are the key to breaking the cycle of urban flooding. By making mindful choices today, we can keep our streets clear and our communities safe from rising waters.",
      ],
      signature: '— Shawn Justin Fabillar',
    },
    {
      id: 'blog-sheet-2',
      photoPosition: 'top-left', // Entry 2: Small square picture at bottom-right
      entryCode: 'LOG #02 • PERSONAL BLOG',
      title: 'Unclogging Our Future: Turning Frustration Into Flood Resilience',
      author: 'Krislenina Brin-Dieta',
      role: 'Researcher & Flood Advocate',
      date: 'November 2026',
      location: 'National Capital Region',
      // Place your second image inside the public/ folder (e.g., public/blog-photo-2.jpg)
      imagePath: 'kris.png',
      imageCaption: 'Image by storyset.com/people',
      paragraphs: [
        "If you live anywhere near Metro Manila or along the river basins of Luzon, Visayas, and Mindanao, you know the dread that comes with a sudden monsoon downpour. It starts with heavy rain tapping on the roof, and within an hour, streets turn into rivers, commuters are stranded, and families are scrambling to move their belongings to higher ground. For a long time, we’ve treated this cycle of urban flooding as an unavoidable part of Filipino life—a simple matter of bad weather.",
        "When our group started digging into the real data behind these persistent inundations for our environmental advocacy project, Urban Flood Advocacy PH, we realized something sobering: the rain isn’t the sole villain here. Every single day, roughly 350 tons of trash flow directly into Metro Manila’s major esteros and drainage channels. Across the country, we generate around 2.7 million tons of plastic waste annually, with nearly 20% ending up in our waters. Combined with 457 million tons of topsoil loss and river siltation every year, our waterways are literally suffocating. Even with 71 active pumping stations in Metro Manila, clogged drains create a massive 60% pumping capacity deficit. When the water has nowhere to go, it spills into our communities—triggering a 240% post-flood spike in deadly waterborne diseases like leptospirosis and dengue, and costing our economy an estimated ₱2.4 billion every single day a flood paralyzes the metro. Most heartbreaking of all, 62% of the workforce hit hardest by these shutdowns are daily-wage earners and informal sector workers.",
        "That is why we built our digital advocacy platform. We didn't want to just present grim statistics; we wanted to show that our drainage crisis is actually a governance and habit crisis—and that means it is solvable. Between January and June 2025 alone, DENR-NCR cleared over 872,625 sacks of garbage from Metro Manila waterways, while MMDA rehabilitated 40 waterways through Bayanihan sa Estero. Add to that 196 newly deployed trash traps and improved waste programs across 85 barangays, and you can see that change is possible when communities and agencies move together. True flood resilience doesn’t start when the typhoon signal is raised; it starts at our own kitchen sinks and neighborhood corners. While we push for stricter enforcement of RA 9003 (our Ecological Solid Waste Management Act) and hold corporations accountable under RA 11898 (the Extended Producer Responsibility Act) to recover 60% to 80% of their plastic packaging, each of us has a role to play. Segregating waste at home, refusing single-use sachets when alternatives exist, keeping our local esteros free of litter, and signing our community pledge to demand stronger local enforcement are small steps that save lives downstream. Let’s stop blaming the rain for a mess we can clean up together.",
      ],
      signature: '— Krislenina Brin-Dieta',
    },
  ],
};

export const CONTRIBUTIONS_DATA = {
  eyebrow: 'PROJECT ATTRIBUTION & DEVELOPMENT LOG',
  headline: 'Contribution Sheet',
  intro:
    'Documentation of individual research, systems architecture, UI/UX engineering, and content authoring across the Urban Flood Advocacy PH portal.',
  // 2 Contributor Cards (Edit names, roles, and logs manually below)
  members: [
    {
      id: 'contributor-1',
      slotNumber: '',
      name: 'Shawn Justin Fabillar',
      role: '[Lead Developer & Architect]',
      handleOrId: '',
      statusBadge: '01',
      accent: 'amber',
      logs: [
        'Solutions & Preparedness Researcher',
        'Website Architecture & UI/UX',
        'Website Development & Deployment',
      ],
    },
    {
      id: 'contributor-2',
      slotNumber: '',
      name: 'Krislenina Brin-Dieta',
      role: '[Lead Researcher]',
      handleOrId: '',
      statusBadge: '02',
      accent: 'teal',
      logs: [
        'Causes & Context Researcher',
        'Data Analysis & Visualization',
      ],
    },
  ],
};