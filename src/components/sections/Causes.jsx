import { PackageX, Recycle, Mountain, Waves, AlertCircle } from 'lucide-react';
import { CAUSES_DATA } from '../../data/advocacyData';

const CAUSE_ICONS = {
  PackageX,
  Recycle,
  Mountain,
  Waves,
};

export default function Causes() {
  return (
    <section
      id="causes"
      className="relative py-20 lg:py-28 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{CAUSES_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {CAUSES_DATA.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {CAUSES_DATA.intro}
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAUSES_DATA.cards.map((card, index) => {
            const IconComponent = CAUSE_ICONS[card.icon] || AlertCircle;
            const isRed = card.accent === 'red';

            return (
              <article
                key={card.id}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Corner Index Watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 right-4 text-7xl font-black text-slate-800/30 select-none"
                >
                  0{index + 1}
                </span>

                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${
                        isRed
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      {card.tag}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border relative z-10 ${
                        isRed
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Highlighted Metric Callout Box */}
                  <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                    <span
                      className={`text-2xl sm:text-3xl font-black tracking-tight shrink-0 ${
                        isRed ? 'text-red-400' : 'text-amber-400'
                      }`}
                    >
                      {card.statValue}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-300">
                      {card.statLabel}
                    </span>
                  </div>

                  {/* Narrative Description */}
                  <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Footer Attribution */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Primary Evidence Source</span>
                  <span className="font-semibold text-slate-300">{card.source}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}