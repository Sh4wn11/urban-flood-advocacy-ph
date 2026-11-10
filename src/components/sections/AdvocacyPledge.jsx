import { useState, useEffect } from 'react';
import {
  FileSignature,
  CheckSquare,
  Square,
  ShieldCheck,
  Share2,
  Check,
  Award,
  Sparkles,
  ScrollText,
  Users,
} from 'lucide-react';
import { PLEDGE_DATA } from '../../data/advocacyData';

const PLEDGE_STORAGE_KEY = 'ufa_citizen_pledge_v1';

export default function AdvocacyPledge() {
  const defaultCommitmentIds = PLEDGE_DATA.commitments.map((c) => c.id);

  const [selectedCommitments, setSelectedCommitments] =
    useState(defaultCommitmentIds);
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [emailOrOrg, setEmailOrOrg] = useState('');
  const [submittedPledge, setSubmittedPledge] = useState(() => {
    try {
      const saved = window.localStorage.getItem(PLEDGE_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try {
      if (submittedPledge) {
        window.localStorage.setItem(
          PLEDGE_STORAGE_KEY,
          JSON.stringify(submittedPledge)
        );
      }
    } catch {
      // Ignore storage errors
    }
  }, [submittedPledge]);

  const signatureCount =
    PLEDGE_DATA.initialSignatures + (submittedPledge ? 1 : 0);
  const progressPercent = Math.min(
    100,
    Math.round((signatureCount / PLEDGE_DATA.signatureGoal) * 100)
  );

  const toggleCommitment = (id) => {
    setSelectedCommitments((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !location.trim()) {
      setFormError('Please enter your Name/Alias and Barangay/City to sign.');
      return;
    }
    if (selectedCommitments.length === 0) {
      setFormError('Please select at least one citizen pledge commitment.');
      return;
    }

    setFormError('');
    const newPledge = {
      name: fullName.trim(),
      location: location.trim(),
      emailOrOrg: emailOrOrg.trim(),
      commitmentsCount: selectedCommitments.length,
      date: new Date().toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      badgeId: `UFA-PH-${Math.floor(100000 + Math.random() * 900000)}`,
    };
    setSubmittedPledge(newPledge);
  };

  const handleShareCopy = async () => {
    const shareText = `I just signed the Urban Flood Advocacy PH National Petition and committed to the 9/9 Household Flood Readiness Standard in ${
      submittedPledge?.location || 'Metro Manila'
    }! Demand RA 11898 EPR enforcement & 100% Barangay MRFs: https://htmlhoster.com/u/urbanfloodadvocacyph/`;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="pledge"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{PLEDGE_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {PLEDGE_DATA.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {PLEDGE_DATA.subcopy}
          </p>
        </div>

        {/* Two-Column Action Hub */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Official 4-Point National Policy Petition */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
            {/* Live Petition Counter Header */}
            <div className="pb-6 border-b border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Users className="w-4 h-4" />
                  <span>National Petition Progress</span>
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Goal: {PLEDGE_DATA.signatureGoal.toLocaleString()} Advocates
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {signatureCount.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  Verified Citizen Signatures
                </span>
              </div>

              <div className="mt-3 w-full h-2.5 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Formal Petition Mandate */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                <ScrollText className="w-4 h-4 text-amber-400" />
                <span>Official Policy Petition Statement</span>
              </div>

              <blockquote className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                {PLEDGE_DATA.petitionAddressees}
              </blockquote>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {PLEDGE_DATA.petitionLead}
              </p>

              {/* 4 Petition Demands */}
              <div className="mt-5 space-y-4">
                {PLEDGE_DATA.petitionDemands.map((demand) => (
                  <div
                    key={demand.id}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black">
                        {demand.number}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {demand.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {demand.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Citizen Pledge Form OR Verified Advocate Badge */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900 border-2 border-amber-500/40 p-6 sm:p-8 shadow-2xl shadow-amber-500/5">
            {!submittedPledge ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                      CITIZEN COMMITMENT FORM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      Take the Digital Advocacy Pledge
                    </h3>
                  </div>
                  <FileSignature className="w-7 h-7 text-amber-400 shrink-0" />
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300">
                  As a citizen advocate, I pledge to do my part to break the
                  urban flood domino effect:
                </p>

                {/* 4 Interactive Commitment Checkboxes */}
                <div className="mt-4 space-y-3">
                  {PLEDGE_DATA.commitments.map((item) => {
                    const isSelected = selectedCommitments.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleCommitment(item.id)}
                        aria-pressed={isSelected}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-slate-950 border-amber-500/50'
                            : 'bg-slate-950/40 border-slate-800 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isSelected ? (
                            <CheckSquare className="w-5 h-5 text-amber-400" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-500" />
                          )}
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-white">
                            {item.title}
                          </span>
                          <span className="block mt-1 text-xs text-slate-400 leading-relaxed">
                            {item.detail}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Signer Input Fields */}
                <div className="mt-6 space-y-4 pt-5 border-t border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="advocate-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Full Name or Alias *
                      </label>
                      <input
                        id="advocate-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Juan Dela Cruz"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="advocate-location"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Barangay / City *
                      </label>
                      <input
                        id="advocate-location"
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., Brgy. Tumana, Marikina"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="advocate-org"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      School, Organization, or Email (Optional)
                    </label>
                    <input
                      id="advocate-org"
                      type="text"
                      value={emailOrOrg}
                      onChange={(e) => setEmailOrOrg(e.target.value)}
                      placeholder="e.g., Youth for Watersheds PH"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="mt-4 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-black bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <FileSignature className="w-5 h-5" />
                  <span>Sign the Petition & Lock In My Pledge</span>
                </button>
              </form>
            ) : (
              /* VERIFIED DIGITAL ADVOCATE BADGE STATE */
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5 text-teal-400">
                    <ShieldCheck className="w-6 h-6 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      PLEDGE VERIFIED & RECORDED
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    #{submittedPledge.badgeId}
                  </span>
                </div>

                {/* Shareable Digital Advocate Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/50 border border-teal-500/40 shadow-inner">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                        Urban Flood Advocacy PH
                      </span>
                      <h3 className="mt-3 text-2xl font-black text-white">
                        {submittedPledge.name}
                      </h3>
                      <p className="text-sm font-semibold text-teal-400">
                        {submittedPledge.location}
                      </p>
                      {submittedPledge.emailOrOrg && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {submittedPledge.emailOrOrg}
                        </p>
                      )}
                    </div>
                    <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/90 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 block">
                        Active Commitments
                      </span>
                      <span className="font-bold text-white">
                        {submittedPledge.commitmentsCount} / 4 Pillars Locked
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Date Signed</span>
                      <span className="font-bold text-white">
                        {submittedPledge.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thank you for standing with{' '}
                  <strong className="text-white">Urban Flood Advocacy PH</strong>!
                  Share your pledge with 3 neighbors to elevate your barangay’s
                  readiness score.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleShareCopy}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Advocacy Message Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>Copy Shareable Pledge Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedPledge(null)}
                    className="px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
                  >
                    Edit Pledge
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}