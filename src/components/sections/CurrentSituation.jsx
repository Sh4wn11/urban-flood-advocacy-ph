import {
  ServerCrash,
  Stethoscope,
  ShieldAlert,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { SITUATION_DATA } from '../../data/advocacyData';

const PILLAR_ICONS = {
  ServerCrash,
  Stethoscope,
  ShieldAlert,
};

export default function CurrentSituation() {
  return (
    <section
      id="situation"
      className="relative py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{SITUATION_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {SITUATION_DATA.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {SITUATION_DATA.intro}
          </p>
        </div>

        {/* 3-Pillar Situational Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITUATION_DATA.pillars.map((pillar) => {
            const IconComponent = PILLAR_ICONS[pillar.icon] || ShieldAlert;
            const isRed = pillar.accent === 'red';
            const isTeal = pillar.accent === 'teal';

            return (
              <article
                key={pillar.id}
                className="rounded-2xl bg-slate-900/75 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Pillar Code & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {pillar.code}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isRed
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : isTeal
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-2xl font-extrabold text-white">
                    {pillar.title}
                  </h3>

                  {/* Data Highlight Pill */}
                  <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200">
                    {pillar.highlightStat}
                  </div>

                  {/* Telemetry Visual Box */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800/90">
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className={`text-3xl font-black tracking-tight ${
                          isRed
                            ? 'text-red-400'
                            : isTeal
                            ? 'text-teal-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {pillar.metricValue}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 text-right">
                        {pillar.metricLabel}
                      </span>
                    </div>

                    {/* Conditional Visual Meter: 9-Segment Protocol Bar vs Standard Telemetry Bar */}
                    {pillar.protocolsTotal ? (
                      <div className="mt-3">
                        <div
                          className="grid grid-cols-9 gap-1.5"
                          aria-label="2 of 9 household protocols active"
                        >
                          {Array.from({ length: pillar.protocolsTotal }).map(
                            (_, idx) => {
                              const isReady = idx < pillar.protocolsCompleted;
                              return (
                                <div
                                  key={idx}
                                  className={`h-2.5 rounded-sm transition-colors ${
                                    isReady
                                      ? 'bg-teal-400 shadow-sm shadow-teal-400/50'
                                      : 'bg-slate-800 border border-slate-700/60'
                                  }`}
                                />
                              );
                            }
                          )}
                        </div>
                        <p className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                          <span>2 Active Protocols</span>
                          <span className="text-red-400 font-semibold">
                            7 Critical Protocols Missing
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div className="mt-3">
                        <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isRed ? 'bg-red-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${pillar.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Narrative Paragraph */}
                  <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {pillar.narrative}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{pillar.footerTag}</span>
                  {pillar.protocolsTotal && (
                    <a
                      href="#readiness"
                      className="inline-flex items-center gap-1 font-bold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <span>Fix 2/9 Gap</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}