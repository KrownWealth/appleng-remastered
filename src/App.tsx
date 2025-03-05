
import './App.css'
import CloserLookSection from './components/shared/CloserLookSection'
import Hero from './components/shared/HeroBanner'
import Highlights from './components/shared/HighlightSection'
import PerformanceSection from './components/shared/PerformanceSection'
import BatterySection from './components/shared/BatterySection'
import MacosSection from './components/shared/MacosSection'
import MacIphone from './components/shared/MacIphone'
import AppleIntelSection from './components/shared/AppleIntelSection'
import DisplaySection from './components/shared/DisplaySection'
import CamMacSpeaker from './components/shared/CamMicSpeaker'
import PortsSection from './components/shared/PortSection'
import SecuritySection from './components/shared/SecuritySection'
import UpgradeSection from './components/shared/UpgradeSection'
import DifferenceSection from './components/shared/DifferenceSection'
import ExploringSection from './components/shared/ExploringSection'

function App() {
  return (
    <>
      <Hero />
      <Highlights />
      <CloserLookSection />
      <PerformanceSection />
      <BatterySection />
      <MacosSection />
      <MacIphone />
      <AppleIntelSection />
      <DisplaySection />
      <CamMacSpeaker />
      <PortsSection />
      <SecuritySection />
      <UpgradeSection />
      <DifferenceSection />
      <ExploringSection />
    </>
  );
}

export default App
