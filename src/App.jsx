
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import OurJourney from "./components/OurJourney";
import OurFuture from "./components/OurFuture";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Milestones from "./components/Milestones";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Website navigation */}
      <Navbar />

      {/* Main website content */}
      <main>
        {/* Homepage hero section */}
        <Hero />

        <Founder/>

        {/* Upcoming components */}
        <About/>


        <Services/>

        <MissionVision/>

        <OurJourney/>

        <Milestones/>

        <OurFuture/>

        <Contact/>

        <Footer/>
        <FloatingContact/>


        
      </main>

      
    </div>
  );
}

export default App;
