
import './App.css'
import CloserLookSection from './components/shared/CloserLookSection'
import Hero from './components/shared/HeroBanner'
import Highlights from './components/shared/HighlightSection'
import PerformanceSection from './components/shared/PerformanceSection'
import BatterySection from './components/shared/BatterySection'
import MacosSection from './components/shared/MacosSection'
import MacIphone from './components/shared/MacIphone'
import AppleIntelSection from './components/shared/AppleIntelSection'

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
    </>
  );
}

export default App
