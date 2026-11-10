import {
  Trash2,
  Gauge,
  TrendingDown,
  Activity,
  ArrowDown,
  FileSignature,
  AlertTriangle,
} from 'lucide-react';
import { HERO_DATA } from '../../data/advocacyData';

const ICON_MAP = {
  Trash2,
  Gauge,
  TrendingDown,
  Activity,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-slate-950"
    >
      {/* Background Radial Glow & Atmospheric Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b2e_1px,transparent_1px),linear-gradient(to_bottom,#1e293b2e_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Copy Container */}
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>{HERO_DATA.eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {HERO_DATA.headlineMain}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
              {HERO_DATA.headlineHighlight}
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {HERO_DATA.subheadline}
          </p>

          {/* CTA Button Group */}
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={HERO_DATA.primaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
            >
              <FileSignature className="w-5 h-5" />
              <span>{HERO_DATA.primaryCta.label}</span>
            </a>

            <a
              href={HERO_DATA.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
            >
              <span>{HERO_DATA.secondaryCta.label}</span>
              <ArrowDown className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* 4-Column Live Crisis Stat Bar */}
        <div className="mt-16 lg:mt-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Live Baseline Metrics • National Capital Region
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-500">
              Sources: MMDA, DENR-NCR, GAIA, WHO/DOH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {HERO_DATA.stats.map((stat) => {
              const IconComponent = ICON_MAP[stat.icon] || AlertTriangle;
              const isRed = stat.accent === 'red';

              return (
                <article
                  key={stat.id}
                  className="group relative rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800/90 hover:border-slate-700 p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Accent Line */}
                  <div
                    className={`
                      absolute top-0 left-6 right-6 h-0.5 rounded-full
                      ${isRed ? 'bg-red-500/70' : 'bg-amber-500/70'}
                    `}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </span>
                      <div
                        className={`p-2 rounded-lg border ${
                          isRed
                            ? 'bg-red-500/10 border-red-500/30 text-red-400'
                            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <p
                      className={`text-2xl sm:text-3xl font-black tracking-tight ${
                        isRed ? 'text-red-400' : 'text-amber-400'
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stat.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}