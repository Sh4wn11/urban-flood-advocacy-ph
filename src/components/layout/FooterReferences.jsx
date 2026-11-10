import { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  ArrowUp,
  ShieldAlert,
  FileCheck2,
} from 'lucide-react';
import { REFERENCES_DATA, NAV_LINKS } from '../../data/advocacyData';

export default function FooterReferences() {
  const [activeCategory, setActiveCategory] = useState('All Sources');
  const [copiedId, setCopiedId] = useState(null);

  const filteredReferences =
    activeCategory === 'All Sources'
      ? REFERENCES_DATA.items
      : REFERENCES_DATA.items.filter((item) => item.category === activeCategory);

  const handleCopyCitation = async (refItem) => {
    const formattedCitation = `${refItem.authors}. (${refItem.year}). ${refItem.title}. ${refItem.publisher}. Retrieved from ${refItem.url}`;
    try {
      await navigator.clipboard.writeText(formattedCitation);
      setCopiedId(refItem.id);
      window.setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(null);
    }
  };

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'Legislation':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
      case 'Government Data':
        return 'bg-red-500/10 border-red-500/30 text-red-400';
      case 'Global Framework':
        return 'bg-teal-500/10 border-teal-500/30 text-teal-400';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-300';
    }
  };

  return (
    <footer
      id="references"
      className="relative bg-slate-950 border-t border-slate-800 pt-20 pb-14 text-slate-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{REFERENCES_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {REFERENCES_DATA.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {REFERENCES_DATA.intro}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter references by source type"
            className="flex flex-wrap items-center gap-2 shrink-0"
          >
            {REFERENCES_DATA.categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Reference Attribution Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Authorized Reference & Content Attribution
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                Adapted with permission from the{' '}
                <strong className="text-white">Urban Flood Advocacy PH</strong>{' '}
                reference portal.
              </p>
            </div>
          </div>

          <a
            href={REFERENCES_DATA.primaryPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-amber-400 border border-amber-500/30 transition-colors"
          >
            <span>Visit Primary Reference Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 10 Institutional Citations Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredReferences.map((item) => {
            const isCopied = copiedId === item.id;
            const badgeStyle = getCategoryBadgeStyle(item.category);

            return (
              <article
                key={item.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      [{item.index}] • {item.year}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${badgeStyle}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Authors & Title */}
                  <p className="text-xs font-semibold text-amber-400/90">
                    {item.authors}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs italic text-slate-400">
                    {item.publisher}
                  </p>

                  {/* Relevance Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.relevance}
                  </p>
                </div>

                {/* Supported Metric & Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-bold text-teal-400">
                    Metric: {item.metricSupported}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-400" />
                          <span className="text-teal-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Cite</span>
                        </>
                      )}
                    </button>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-amber-400 transition-colors"
                    >
                      <span>Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Site Footer & Quick Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-sm text-white block">
                URBAN FLOOD ADVOCACY <span className="text-amber-400">PH</span>
              </span>
              <span className="text-xs text-slate-400">
                Evidence-Based Flood Defense • RA 9003 • RA 11898 • Sendai Target G • WHO HEPR
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pledge"
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors"
            >
              Sign the Pledge
            </a>
          </div>

          <a
            href="#hero"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}