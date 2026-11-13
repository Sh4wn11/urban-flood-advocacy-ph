import { useState } from 'react';
import { Feather, Calendar, MapPin, Image as ImageIcon } from 'lucide-react';
import { BLOGS_DATA } from '../../data/advocacyData';

function SquarePhotoFrame({ src, alt, caption, positionClass }) {
  const [imgError, setImgError] = useState(false);
  const resolvedSrc = `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;

  return (
    <figure
      className={`relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-lg bg-slate-950 p-2.5 border border-slate-700/90 shadow-xl shadow-black/60 ${positionClass}`}
    >
      {/* Top Masking Tape Visual Accent */}
      <div
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-amber-400/25 border border-amber-300/30 rotate-[-3deg] rounded-xs backdrop-blur-xs z-20"
      />

      {/* Square Image or Fallback Placeholder */}
      <div className="w-full h-full rounded overflow-hidden bg-slate-900 border border-slate-800 flex flex-col items-center justify-center relative">
        {!imgError ? (
          <img
            src={resolvedSrc}
            alt={alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="p-3 text-center flex flex-col items-center justify-center text-slate-500">
            <ImageIcon className="w-7 h-7 text-amber-400/70 mb-1.5" />
            <span className="text-[11px] font-mono leading-tight text-slate-400">
              public/{src}
            </span>
          </div>
        )}
      </div>

      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}

export default function PersonalBlogs() {
  return (
    <section
      id="blogs"
      className="relative py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-left sm:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>{BLOGS_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {BLOGS_DATA.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {BLOGS_DATA.intro}
          </p>
        </div>

        {/* Vertically Stacked Archival Paper Sheets */}
        <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-10 lg:gap-12">
          {BLOGS_DATA.posts.map((post) => {
            const isTopLeftPhoto = post.photoPosition === 'top-left';

            return (
              <article
                key={post.id}
                className="relative rounded-2xl bg-[#111927] border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between"
              >
                {/* Top Punched Binder Holes / Archival Paper Header Bar */}
                <div className="bg-slate-900/95 border-b border-slate-800 px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />
                    <span className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />
                    <span className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />
                    <span className="ml-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                      {post.entryCode}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {post.location}
                    </span>
                  </div>
                </div>

                {/* Ruled Paper Body Container */}
                <div
                  className="relative flex-1 p-6 sm:p-10 pl-9 sm:pl-14 flex flex-col justify-between"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, transparent 31px, rgba(148, 163, 184, 0.1) 32px)',
                    backgroundSize: '100% 32px',
                  }}
                >
                  {/* Vertical Red Notebook Margin Rule */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 bottom-0 left-6 sm:left-10 w-px bg-red-500/30"
                  />

                  <div>
                    {/* Paper Title & Author Line */}
                    <header className="mb-6 pb-4 border-b border-dashed border-slate-700/80">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug tracking-tight">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm font-mono text-amber-300/90">
                        Written by <strong className="text-white">{post.author}</strong> •{' '}
                        {post.role}
                      </p>
                    </header>

                    {/* Blog Content Body */}
                    <div className="text-sm sm:text-base text-slate-200 font-serif leading-[32px] space-y-6">
                      {/* BLOG 1: Small Square Picture at TOP-LEFT */}
                      {isTopLeftPhoto && (
                        <SquarePhotoFrame
                          src={post.imagePath}
                          alt={post.title}
                          caption={post.imageCaption}
                          positionClass="float-left mr-6 mb-4 -rotate-2"
                        />
                      )}

                      {post.paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-slate-200/95">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Paper Footer: Signature + BLOG 2 Small Square Picture at BOTTOM-RIGHT */}
                  <div className="mt-8 pt-5 border-t border-dashed border-slate-700/80 flex flex-col sm:flex-row sm:items-end justify-between gap-6 clear-both">
                    <div>
                      <p className="font-serif italic text-lg sm:text-xl text-amber-400">
                        {post.signature}
                      </p>
                      <span className="text-xs font-mono text-slate-400 block mt-1">
                        {post.imageCaption}
                      </span>
                    </div>

                    {/* BLOG 2: Small Square Picture Frame at BOTTOM-RIGHT */}
                    {!isTopLeftPhoto && (
                      <SquarePhotoFrame
                        src={post.imagePath}
                        alt={post.title}
                        caption={post.imageCaption}
                        positionClass="rotate-2 self-end sm:ml-auto"
                      />
                    )}
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