import Navbar from '../components/Navbar.jsx';
import Hero from '../sections/Hero.jsx';
import AIDemo from '../sections/AIDemo.jsx';
import Experiences from '../sections/Experiences.jsx';
import AIFeatures from '../sections/AIFeatures.jsx';
import PhoneFirst from '../sections/PhoneFirst.jsx';
import HowItWorks from '../sections/HowItWorks.jsx';
import SmartCampus from '../sections/SmartCampus.jsx';
import DashboardPreview from '../sections/DashboardPreview.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIDemo />
        <Experiences />
        <AIFeatures />
        <PhoneFirst />
        <HowItWorks />
        <SmartCampus />
        <DashboardPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
