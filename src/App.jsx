import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Causes from './components/sections/Causes';
import DominoFlowchart from './components/sections/DominoFlowchart';
import CurrentSituation from './components/sections/CurrentSituation';
import Solutions from './components/sections/Solutions';
import GovernanceTiers from './components/sections/GovernanceTiers';
import SolutionsSynergy from './components/sections/SolutionsSynergy';
import CitizenReadiness from './components/sections/CitizenReadiness';
import AdvocacyPledge from './components/sections/AdvocacyPledge';
import PersonalBlogs from './components/sections/PersonalBlogs';
import FooterReferences from './components/layout/FooterReferences';
import ContributionSheet from './components/layout/ContributionSheet';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Causes />
        <DominoFlowchart />
        <CurrentSituation />
        <Solutions />
        <GovernanceTiers />
        <SolutionsSynergy />
        <CitizenReadiness />
        <AdvocacyPledge />
        <PersonalBlogs />
      </main>
      <FooterReferences />
      <ContributionSheet />
    </div>
  );
}