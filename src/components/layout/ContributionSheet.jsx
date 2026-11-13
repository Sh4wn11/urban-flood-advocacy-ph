import { Users, GitCommitHorizontal, CheckCircle2, Terminal } from 'lucide-react';
import { CONTRIBUTIONS_DATA } from '../../data/advocacyData';

export default function ContributionSheet() {
  return (
    <section
      id="contributions"
      className="relative py-16 lg:py-24 bg-slate-950 border-t border-slate-800/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>{CONTRIBUTIONS_DATA.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {CONTRIBUTIONS_DATA.headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {CONTRIBUTIONS_DATA.intro}
          </p>
        </div>

        {/* 2-Person Contributor Grid (1x2 on Desktop, Stacked on Mobile) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {CONTRIBUTIONS_DATA.members.slice(0, 2).map((member) => {
            const isTeal = member.accent === 'teal';

            return (
              <article
                key={member.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-xl shadow-black/40"
              >
                {/* LEFT COLUMN: Contributor Name, Role & ID */}
                <div className="sm:col-span-5 p-6 bg-slate-900 border-b sm:border-b-0 sm:border-r border-slate-800/90 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        CONTRIBUTOR #{member.slotNumber}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                          isTeal
                            ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        }`}
                      >
                        {member.statusBadge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                          isTeal
                            ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        }`}
                      >
                        <Users className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white leading-snug">
                        {member.name}
                      </h3>
                    </div>

                    <p
                      className={`text-xs font-bold mt-2 ${
                        isTeal ? 'text-teal-400' : 'text-amber-400'
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 block truncate">
                      {member.handleOrId}
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN: Contribution Log */}
                <div className="sm:col-span-7 p-6 bg-slate-950/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      <GitCommitHorizontal className="w-4 h-4 text-amber-400" />
                      <span>Contribution Log</span>
                    </div>

                    <ul className="space-y-2.5">
                      {member.logs.map((logItem, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isTeal ? 'text-teal-400' : 'text-amber-400'
                            }`}
                          />
                          <span>{logItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span> </span>
                    <span> </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}