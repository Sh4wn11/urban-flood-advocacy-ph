import { useState } from 'react';
import {
  Scale,
  Dam,
  Building,
  HeartPulse,
  Landmark,
  CheckCircle2,
  Target,
  Users,
  LayoutGrid,
  Columns,
} from 'lucide-react';
import { GOVERNANCE_DATA } from '../../data/advocacyData';

const TIER_ICONS = {
  Scale,
  Dam,
  Building,
  HeartPulse,
};

export default function GovernanceTiers() {
  const [activeTierId, setActiveTierId] = useState(GOVERNANCE_DATA.tiers[0].id);
  const [showFullMatrix, setShowFullMatrix] = useState(false);

  const activeTier =
    GOVERNANCE_DATA.tiers.find((t) => t.id === activeTierId) ||
    GOVERNANCE_DATA.tiers[0];

  const getAccentStyles = (accent) => {
    if (accent === 'red') {
      return {
        badge: 'bg-red-500/10 border-red-500/30 text-red-400',
        activeBorder: 'border-red-500 ring-2 ring-red-500/20',
        text: 'text-red-400',
      };
    }
    if (accent === 'teal') {
      return {
        badge: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
        activeBorder: 'border-teal-400 ring-2 ring-teal-400/20',
        text: 'text-teal-400',
      };
    }
    return {
      badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      activeBorder: 'border-amber-400 ring-2 ring-amber-400/20',
      text: 'text-amber-400',
    };
  };

  return (
    <section
      id="governance"
      className="relative py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & View Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
              <Landmark className="w-3.5 h-3.5" />
              <span>{GOVERNANCE_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {GOVERNANCE_DATA.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {GOVERNANCE_DATA.intro}
            </p>
          </div>

          {/* Toggle between Interactive Inspector & All-Tiers Matrix */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowFullMatrix(false)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                !showFullMatrix
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Interactive Inspector</span>
            </button>

            <button
              type="button"
              onClick={() => setShowFullMatrix(true)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                showFullMatrix
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Full 4-Tier Matrix</span>
            </button>
          </div>
        </div>

        {/* MODE 1: Interactive Master-Detail Inspector */}
        {!showFullMatrix ? (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: 4 Tier Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {GOVERNANCE_DATA.tiers.map((tier) => {
                const IconComponent = TIER_ICONS[tier.icon] || Landmark;
                const isSelected = tier.id === activeTier.id;
                const styles = getAccentStyles(tier.accent);

                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTierId(tier.id)}
                    className={`w-full text-left rounded-2xl p-5 transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? `bg-slate-900 ${styles.activeBorder} shadow-lg`
                        : 'bg-slate-900/50 border-slate-800/90 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-black uppercase tracking-widest ${styles.text}`}>
                        {tier.tierCode} • {tier.level}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${styles.badge}`}>
                        {tier.frameworkBadge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 mt-2">
                      <div className={`p-2.5 rounded-xl border shrink-0 ${styles.badge}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {tier.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Tier Deep-Dive Panel */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
              {(() => {
                const IconComponent = TIER_ICONS[activeTier.icon] || Landmark;
                const styles = getAccentStyles(activeTier.accent);

                return (
                  <div>
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl border ${styles.badge}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`text-xs font-black uppercase tracking-widest ${styles.text}`}>
                            {activeTier.tierCode} — {activeTier.level}
                          </span>
                          <h3 className="text-2xl font-extrabold text-white mt-0.5">
                            {activeTier.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${styles.badge}`}>
                        {activeTier.frameworkBadge}
                      </span>
                    </div>

                    {/* Statutory & Operational Mandate */}
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Core Institutional Mandate
                      </h4>
                      <p className="mt-2 text-base text-slate-200 leading-relaxed">
                        {activeTier.mandate}
                      </p>
                    </div>

                    {/* Lead Agencies Chips */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span>Lead Accountable Agencies & Bodies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeTier.leadAgencies.map((agency) => (
                          <span
                            key={agency}
                            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200"
                          >
                            {agency}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Concrete Implementation Directives */}
                    <div className="mt-6 pt-6 border-t border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Implementation Directives
                      </h4>
                      <ul className="space-y-2.5">
                        {activeTier.actionItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-200"
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.text}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Outcome KPI Callout */}
                    <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-3">
                      <Target className={`w-5 h-5 shrink-0 ${styles.text}`} />
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Accountability Target Metric
                        </span>
                        <span className={`text-sm font-bold ${styles.text}`}>
                          {activeTier.kpiTarget}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        ) : (
          /* MODE 2: Full 4-Tier Matrix Grid */
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {GOVERNANCE_DATA.tiers.map((tier) => {
              const IconComponent = TIER_ICONS[tier.icon] || Landmark;
              const styles = getAccentStyles(tier.accent);

              return (
                <article
                  key={tier.id}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-xs font-black uppercase tracking-widest ${styles.text}`}>
                        {tier.tierCode} • {tier.level}
                      </span>
                      <div className={`p-2 rounded-lg border ${styles.badge}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white">{tier.title}</h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {tier.mandate}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tier.leadAgencies.map((agency) => (
                        <span
                          key={agency}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-medium text-slate-300"
                        >
                          {agency}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                      {tier.actionItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.text}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold">
                    <Target className={`w-4 h-4 shrink-0 ${styles.text}`} />
                    <span className={styles.text}>{tier.kpiTarget}</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}