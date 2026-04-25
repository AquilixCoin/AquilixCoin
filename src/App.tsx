import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContractInfo from './components/ContractInfo';
import Whitepaper from './components/Whitepaper';
import AirdropSection from './components/AirdropSection';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import TheEyrie from './components/TheEyrie';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <WelcomeModal />
      {/* Background Layer */}
      <div className="parallax-bg" />
      
      {/* Content */}
      <Navbar />
      <Hero />
      <ContractInfo />
      <Whitepaper />
      <AirdropSection />
      <Roadmap />
      <Tokenomics />
      <TheEyrie />
      <Footer />
    </main>
  );
}

