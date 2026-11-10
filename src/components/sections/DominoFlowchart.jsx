import { useState, useEffect } from 'react';
import {
  Trash2,
  Layers,
  Gauge,
  ArrowUpFromLine,
  Biohazard,
  TrendingDown,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  GitCommitHorizontal,
  ShieldAlert,
} from 'lucide-react';
import { DOMINO_DATA } from '../../data/advocacyData';

const STAGE_ICONS = {
  Trash2,
  Layers,
  Gauge,
  ArrowUpFromLine,
  Biohazard,
  TrendingDown,
};

export default function DominoFlowchart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages = DOMINO_DATA.stages;
  const activeStage = stages[activeIndex];

  // Clean interval management for the Auto-Play Cascade Simulator
  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= stages.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isPlaying, stages.length]);

  const handleTogglePlay = () => {
    if (activeIndex >= stages.length - 1 && !isPlaying) {
      setActiveIndex(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveIndex(0);
  };

  return (
    <section
      id="domino-flowchart"
      className="relative py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Simulation Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase mb-4">
              <GitCommitHorizontal className="w-3.5 h-3.5" />
              <span>{DOMINO_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {DOMINO_DATA.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {DOMINO_DATA.subcopy}
            </p>
          </div>

          {/* Interactive Simulator Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleTogglePlay}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/15'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Cascade</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Simulate Domino Effect</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset cascade to Domino 01"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-10">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            <span>Cascade Progression</span>
            <span className="text-amber-400">
              Domino {activeStage.step} of 0{stages.length}: {activeStage.title}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / stages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 6-Stage Interactive Flowchart Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, index) => {
            const IconComponent = STAGE_ICONS[stage.icon] || ShieldAlert;
            const isSelected = index === activeIndex;
            const isTriggered = index <= activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(index);
                }}
                className={`group relative text-left rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20 shadow-xl shadow-black/50 -translate-y-1'
                    : isTriggered
                    ? 'bg-slate-900/80 border-slate-700/90 hover:border-slate-600'
                    : 'bg-slate-950/60 border-slate-800/60 opacity-65 hover:opacity-100 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Row: Domino Step Number & Key Metric Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest ${
                        isSelected
                          ? 'text-amber-400'
                          : isTriggered
                          ? 'text-slate-200'
                          : 'text-slate-500'
                      }`}
                    >
                      <span>DOMINO {stage.step}</span>
                      {index < stages.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                        stage.severity === 'red'
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : stage.severity === 'orange'
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      {stage.badge}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Summary Copy */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                {/* Bottom Status Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span
                    className={
                      isSelected
                        ? 'font-bold text-amber-400'
                        : isTriggered
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }
                  >
                    {isSelected
                      ? '● Currently Inspecting'
                      : isTriggered
                      ? '✓ Cascade Triggered'
                      : '○ Downstream Stage'}
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Inspect →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Inspector Panel */}
        <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Stage {activeStage.step} Diagnostic Breakdown
              </span>
              <h3 className="mt-2 text-2xl font-black text-white">
                {activeStage.title}
              </h3>
              <p className="mt-2 inline-block px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                Impact Metric: {activeStage.badge}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Physical & Hydraulic Mechanism
                </h4>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                  {activeStage.mechanism}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Systemic Governance Failure Point
                </h4>
                <p className="mt-2 text-sm text-amber-300/90 font-medium leading-relaxed">
                  {activeStage.failurePoint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}