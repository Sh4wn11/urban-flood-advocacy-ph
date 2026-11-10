import { useState } from 'react';
import {
  Trees,
  Recycle,
  Filter,
  ShieldCheck,
  Workflow,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Link2,
} from 'lucide-react';
import { SYNERGY_DATA } from '../../data/advocacyData';

const NODE_ICONS = {
  Trees,
  Recycle,
  Filter,
  ShieldCheck,
};

export default function SolutionsSynergy() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [showFailureComparison, setShowFailureComparison] = useState(false);

  return (
    <section
      id="synergy"
      className="relative py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Comparison Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>{SYNERGY_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {SYNERGY_DATA.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {SYNERGY_DATA.coreNarrative}
            </p>
          </div>

          {/* Toggle: Interlocked System vs Why Isolated Fixes Fail */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowFailureComparison(false)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                !showFailureComparison
                  ? 'bg-teal-400 text-slate-950 shadow-md shadow-teal-400/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Interlocked Chain (Works)</span>
            </button>

            <button
              type="button"
              onClick={() => setShowFailureComparison(true)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                showFailureComparison
                  ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>Why Siloed Fixes Fail</span>
            </button>
          </div>
        </div>

        {/* Conditional Diagnostic Banner: Why Siloed Fixes Fail */}
        {showFailureComparison && (
          <div className="mt-10 rounded-2xl bg-red-950/25 border border-red-500/30 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-red-400 font-bold text-sm uppercase tracking-wider mb-4">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>{SYNERGY_DATA.contrastModes.isolated.label}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 mb-6">
              {SYNERGY_DATA.contrastModes.isolated.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SYNERGY_DATA.contrastModes.isolated.failures.map((item) => (
                <div
                  key={item.fix}
                  className="p-4 rounded-xl bg-slate-950/90 border border-red-500/20"
                >
                  <h3 className="text-sm font-extrabold text-red-400">
                    {item.fix}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.flaw}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4-Node Interlocking Systems Architecture */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SYNERGY_DATA.nodes.map((node, index) => {
            const IconComponent = NODE_ICONS[node.icon] || ShieldCheck;
            const isSelected = index === activeNodeIndex;
            const isTeal = node.accent === 'teal';

            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveNodeIndex(index);
                  }
                }}
                role="button"
                tabIndex={0}
                className={`group relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-teal-400 ring-2 ring-teal-400/20 shadow-xl -translate-y-1'
                    : 'bg-slate-900/75 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Step Number & Phase */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-black uppercase tracking-widest ${
                        isTeal ? 'text-teal-400' : 'text-amber-400'
                      }`}
                    >
                      SYSTEM {node.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {node.phase}
                    </span>
                  </div>

                  {/* Icon & Node Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 ${
                        isTeal
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {node.title}
                    </h3>
                  </div>

                  {/* Core Instruments Pill */}
                  <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/90 text-xs font-bold text-slate-200">
                    {node.instruments}
                  </div>

                  {/* Mechanism Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                {/* Interlock Handoff & Crisis Metric Neutralized */}
                <div className="mt-6 pt-4 border-t border-slate-800/90 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-400">
                    <Link2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{node.metricNeutralized}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/70 px-3 py-2 rounded-lg border border-slate-800/70">
                    <span>{node.handoffText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Closed-Loop Summary Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Result of Full 4-System Integration:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Zero sachet choke at the 71 pumping stations, restored river depth from the Sierra Madre to Manila Bay, and communities shielded from the +240% disease surge and ₱2.4B daily economic loss.
              </p>
            </div>
          </div>

          <a
            href="#readiness"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
          >
            <span>Start Citizen Readiness</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}