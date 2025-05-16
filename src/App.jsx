import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram, FaGlobe } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import logoDark from "./assets/images/logo-dark.png";

//Importing Components English
import Welcome from "./Components/welcome";
import AboutMe from "./Components/aboutMe";
import Contact from "./Components/contact";
import Professional from "./Components/professional";
import Works from "./Components/work";

//Importing Components Spanish
import Bienvenidos from "./Components/bienvenidos";
import SobreMi from "./Components/sobreMi";
import Profesional from "./Components/profesional";
import Trabajos from "./Components/trabajos";
import Contacto from "./Components/contacto";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,SlowMo);
    

export default function PortfolioPage() {
  const [showButton, setShowButton] = useState(false);
  const savedLanguage = localStorage.getItem("language") || "es";
  const [language, setLanguage] = useState(savedLanguage);
  const circleRef = useRef(null);
  




 {/* Scroll to top button visibility based on scroll position */} 
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


{/* Smooth scrolling to sections */}
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        scrollTo: { y: section, autoKill: false },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }

{/* Language toggle function */}  
  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    const circle = circleRef.current;
    
    
    gsap.to(circle, {
      scale: 100,
      duration: 0.09,
      ease: "power2.easeInOut",
      onComplete: () => {
       
        setLanguage(newLang)
        gsap.to(circle, {
          scale: 0,
          duration: 0.9,
          ease: "power2.inOut",
        })
      }
    })
  };


  {/* Text content based on language */}

  const text = {
    home: language === "en" ? "Home" : "Inicio",
    about: language === "en" ? "About Me" : "Sobre mí",
    creative: language === "en" ? "Creative Work" : "Trabajo Creativo",
    professional: language === "en" ? "Professional Work" : "Trabajo Profesional",
    contact: language === "en" ? "Contact" : "Contacto",
    welcome: language === "en" ? <Welcome /> : <Bienvenidos />,
    aboutDesc: language === "en" ? <AboutMe />: <SobreMi />,
    creativeDesc: language === "en" ? <Works /> : <Trabajos />,
    professionalDesc: language === "en" ? <Professional /> : <Profesional />,
    contactDesc: language === "en" ? <Contact /> : <Contacto />,
    
  };


  {/* Actual content of the website */}
  return (
    <div className="font-sans scroll-smooth flex-col bg-gradient-to-b from-sky-400 via-blue-600 to-amber-400 text-white min-h-screen min-w-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-transparent z-50 text-blue-950">
        
        
        <ul className="flex flex-wrap justify-center md:justify-around py-4 text-sm md:text-base items-center">
        {/* Logo */}
          <span className="mx-2 md:mx-0"><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection("home");}} ><img className="h-20/50 w-20/50 py-4" src={logoDark} alt="Logo in dark mode" /></a></span>

        {/* About Link */}
          <li className="mx-2 md:mx-0"><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("about");}} className="hover:text-blue-500"><span className="text-white">{text.about}</span></a></li>

        {/* Creative Link */}
          <li className="mx-2 md:mx-0"><a href="#creative" onClick={(e) => {e.preventDefault(); scrollToSection("creative");}} className="hover:text-blue-500"><span className="text-white">{text.creative}</span></a></li>

        {/* Professional Link */}
          <li className="mx-2 md:mx-0"><a href="#professional" onClick={(e) => {e.preventDefault(); scrollToSection("professional");}} className="hover:text-blue-500"><span className="text-white">{text.professional}</span></a></li>

        {/* Contact Link */}
          <li className="mx-2 md:mx-0"><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection("contact");}} className="hover:text-blue-500"><span className="text-white">{text.contact}</span></a></li>
          
        {/* Circle Animation to Change Language */}
          <div ref={circleRef}
          className="absolute top-1/2 right-20 w-10 h-10 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
              transform: "scale(0)",
              background: "radial-gradient(circle at center, #00358a, #00ccff, #06c4ab)",
              transition: "background 0.3s ease-in-out",
            }}></div>
          {/* Language Toggle */}
            <li className="mx-2 md:mx-0">
              <button
                id="language-button"
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-white text-sm hover:text-blue-500 transition duration-300 ease-in-out">
                <FaGlobe />
                <span> {language === "es" ? "EN" : "ES"}</span>
              </button>
            </li>
        </ul>

            
      </nav>

      <main className="pt-24 space-y-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent text-center">
          {text.welcome}
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen py-60 bg-transparent">
          {text.aboutDesc}
        </section>

        {/* Creative Work Section */}
        <section id="creative" className="min-h-screen py-60 bg-transparent">
          {text.creativeDesc}
        </section>

        {/* Professional Work Section */}
        <section id="professional" className="min-h-screen py-20 bg-transparent">
          {text.professionalDesc}
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="min-h-screen py-40 bg-transparent text-center">
          {text.contactDesc}
        </section>
      </main>



      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-white text-center py-6 shadow-inner text-black">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://github.com/JdR2V" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/juan-daniel-rubio/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/juandar2v/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Juan Daniel Rubio. All rights reserved.</p>
      </footer>
    </div>
  );
}
