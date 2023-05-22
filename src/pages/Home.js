import Hero from "../components/Hero";
import Reputation from "../components/Reputation";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Consultation from "../components/Consultation";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/Contact-Form";

function Home() {
  return (
    <>
      <Hero/>
      <Reputation/>
      <AboutUs/>
      <Services/>
      <Experience/>
      <Consultation/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default Home;
