import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import {
  AboutSection,
  CapabilitiesSection,
  CTASection,
  ProcessSection,
  ProductsSection,
  ServicesSection,
  WhyChooseUsSection,
} from './components/SiteSections.jsx'
import HeroSection from './components/HeroSection.jsx'
import theme from './theme/theme.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
