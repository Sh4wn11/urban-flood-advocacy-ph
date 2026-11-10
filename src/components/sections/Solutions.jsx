import { useState } from 'react';
import {
  Building2,
  Recycle,
  Filter,
  Trees,
  ShieldCheck,
  CheckCircle2,
  Crosshair,
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/advocacyData';

const LAYER_ICONS = {
  Building2,
  Recycle,
  Filter,
  Trees,
};

export default function Solutions() {
  const [selectedLayerId, setSelectedLayerId] = useState('all');

  const filteredLayers =
    selectedLayerId === 'all'
      ? SOLUTIONS_DATA.layers
      : SOLUTIONS_DATA.layers.filter((layer) => layer.id === selectedLayerId);

  return (
    <section
      id="solutions"
      className="relative py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Layer Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{SOLUTIONS_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {SOLUTIONS_DATA.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {SOLUTIONS_DATA.intro}
            </p>
          </div>

          {/* Interactive Layer Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter flood defense layers"
            className="flex flex-wrap items-center gap-2 shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedLayerId === 'all'}
              onClick={() => setSelectedLayerId('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedLayerId === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All 4 Layers
            </button>
            {SOLUTIONS_DATA.layers.map((layer) => (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={selectedLayerId === layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedLayerId === layer.id
                    ? 'bg-teal-400 text-slate-950 shadow-md shadow-teal-400/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {layer.layerNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Defense Layers Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredLayers.map((layer) => {
            const IconComponent = LAYER_ICONS[layer.icon] || ShieldCheck;
            const isTeal = layer.accent === 'teal';

            return (
              <article
                key={layer.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div>
                  {/* Top Bar: Layer Badge & Zone */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider ${
                          isTeal
                            ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {layer.layerNumber}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {layer.zone}
                      </span>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl border ${
                        isTeal
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Defense Layer Title */}
                  <h3 className="text-2xl font-bold text-white">
                    {layer.title}
                  </h3>

                  {/* Core Law / Policy Mandate Callout */}
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800/90">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Core Legal & Operational Instrument
                    </span>
                    <span
                      className={`mt-1 block text-sm sm:text-base font-extrabold ${
                        isTeal ? 'text-teal-400' : 'text-amber-400'
                      }`}
                    >
                      {layer.lawOrInitiative}
                    </span>
                  </div>

                  {/* Mechanism Description */}
                  <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {layer.mechanism}
                  </p>

                  {/* Key Deliverables List */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-800/80 pt-5">
                    {layer.keyDeliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isTeal ? 'text-teal-400' : 'text-amber-400'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Domino Impact Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Crosshair className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{layer.targetDomino}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}