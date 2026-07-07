import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import SectionWrapper from "@/components/SectionWrapper";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <Hero />


    <SectionWrapper>
  <About />
</SectionWrapper>


<SectionWrapper>
  <Education />
</SectionWrapper>


<SectionWrapper>
  <Skills />
</SectionWrapper>


<SectionWrapper>
  <Experience />
</SectionWrapper>


<SectionWrapper>
  <Projects />
</SectionWrapper>


<SectionWrapper>
  <Certifications />
</SectionWrapper>


<SectionWrapper>
  <Resume />
</SectionWrapper>


<SectionWrapper>
  <Contact />
</SectionWrapper>

<Footer />

    </main>
  );
}