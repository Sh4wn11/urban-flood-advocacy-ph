import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  CheckSquare,
  Square,
  RotateCcw,
  CheckCheck,
  ArrowRight,
  Radio,
} from 'lucide-react';
import { READINESS_DATA } from '../../data/advocacyData';

const STORAGE_KEY = 'ufa_readiness_protocols_v1';

// Extract the 2 default baseline protocol IDs ("2 of 9 ready")
const DEFAULT_BASELINE_IDS = READINESS_DATA.phases
  .flatMap((phase) => phase.protocols)
  .filter((proto) => proto.defaultBaseline)
  .map((proto) => proto.id);

export default function CitizenReadiness() {
  const [checkedIds, setCheckedIds] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_BASELINE_IDS;
    } catch {
      return DEFAULT_BASELINE_IDS;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // Ignore storage quota errors in restricted browsing modes
    }
  }, [checkedIds]);

  const totalCount = READINESS_DATA.totalProtocols;
  const completedCount = checkedIds.length;
  const isFullyReady = completedCount === totalCount;

  const toggleProtocol = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCompleteAll = () => {
    const allIds = READINESS_DATA.phases.flatMap((phase) =>
      phase.protocols.map((p) => p.id)
    );
    setCheckedIds(allIds);
  };

  const handleResetBaseline = () => {
    setCheckedIds(DEFAULT_BASELINE_IDS);
  };

  // Readiness diagnostic status badge
  const getReadinessStatus = () => {
    if (completedCount <= 2) {
      return {
        label: 'NCR Baseline Vulnerability (2 of 9 Ready)',
        color: 'text-red-400 bg-red-500/10 border-red-500/30',
        barColor: 'bg-red-500',
      };
    }
    if (completedCount < 9) {
      return {
        label: `Transitioning Household (${completedCount} of 9 Ready)`,
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
        barColor: 'bg-amber-500',
      };
    }
    return {
      label: '9/9 Flood-Ready & Health-Shielded Household',
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      barColor: 'bg-teal-400',
    };
  };

  const status = getReadinessStatus();

  return (
    <section
      id="readiness"
      className="relative py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>{READINESS_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {READINESS_DATA.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {READINESS_DATA.intro}
          </p>
        </div>

        {/* Interactive Readiness Telemetry Control Panel */}
        <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {completedCount} / {totalCount}
                </span>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-bold border ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Check off each protocol below to upgrade your household from the
                2/9 NCR baseline to full 9/9 anticipatory readiness.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleCompleteAll}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all cursor-pointer"
              >
                <CheckCheck className="w-4 h-4" />
                <span>Commit to All 9/9</span>
              </button>

              <button
                type="button"
                onClick={handleResetBaseline}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to 2/9 Baseline</span>
              </button>
            </div>
          </div>

          {/* 9-Segment Visual Readiness Bar */}
          <div className="mt-6">
            <div
              className="grid grid-cols-9 gap-1.5 sm:gap-2"
              aria-label={`${completedCount} of ${totalCount} household protocols active`}
            >
              {Array.from({ length: totalCount }).map((_, idx) => {
                const isActive = idx < completedCount;
                return (
                  <div
                    key={idx}
                    className={`h-3 rounded-md transition-all duration-300 ${
                      isActive
                        ? `${status.barColor} shadow-sm`
                        : 'bg-slate-800 border border-slate-700/60'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* 3-Phase Protocol Checklist Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {READINESS_DATA.phases.map((phase) => {
            const isRed = phase.accent === 'red';
            const isTeal = phase.accent === 'teal';

            const phaseCompletedCount = phase.protocols.filter((p) =>
              checkedIds.includes(p.id)
            ).length;

            return (
              <div
                key={phase.id}
                className="rounded-2xl bg-slate-900/75 border border-slate-800/90 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Phase Header */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <span
                        className={`text-xs font-black uppercase tracking-widest ${
                          isRed
                            ? 'text-red-400'
                            : isTeal
                            ? 'text-teal-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {phase.phaseCode} • {phase.frameworkTag}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">
                        {phase.title}
                      </h3>
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 shrink-0">
                      {phaseCompletedCount}/3
                    </span>
                  </div>

                  {/* 3 Interactive Protocol Cards */}
                  <div className="mt-4 space-y-3">
                    {phase.protocols.map((proto) => {
                      const isChecked = checkedIds.includes(proto.id);

                      return (
                        <button
                          key={proto.id}
                          type="button"
                          onClick={() => toggleProtocol(proto.id)}
                          aria-pressed={isChecked}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                            isChecked
                              ? 'bg-slate-950/90 border-teal-500/40 ring-1 ring-teal-500/20'
                              : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isChecked ? (
                              <CheckSquare className="w-5 h-5 text-teal-400" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-500" />
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Protocol {proto.number}
                              </span>
                              {proto.defaultBaseline && (
                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                  2/9 Baseline
                                </span>
                              )}
                            </div>

                            <h4
                              className={`text-sm font-bold mt-1 transition-colors ${
                                isChecked
                                  ? 'text-teal-300'
                                  : 'text-white'
                              }`}
                            >
                              {proto.title}
                            </h4>

                            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                              {proto.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Phase Footer */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {phaseCompletedCount === 3
                      ? '✓ Phase Complete'
                      : `${3 - phaseCompletedCount} remaining in phase`}
                  </span>
                  {isFullyReady ? (
                    <span className="text-teal-400 font-bold">9/9 Ready</span>
                  ) : (
                    <span>Click items to toggle</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Readiness Callout Banner */}
        <div className="mt-8 rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {isFullyReady ? (
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
            )}
            <p className="text-xs sm:text-sm text-slate-200">
              {isFullyReady
                ? 'Your household is at 9/9 Readiness! Lock in your commitment below by signing the National Petition and Citizen Action Pledge.'
                : `You have completed ${completedCount} of 9 household flood protocols. Check the remaining items above, then lock in your pledge below.`}
            </p>
          </div>

          <a
            href="#pledge"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
          >
            <span>Lock In Your Pledge</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}