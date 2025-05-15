import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram, FaGlobe } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import logoDark from "./assets/images/logo-dark.png";



gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,SlowMo);
    

export default function PortfolioPage() {
  const [showButton, setShowButton] = useState(false);
  const [language, setLanguage] = useState("es");

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

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    gsap.to("#language-button", {
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => setLanguage(newLang),
    });
  };

  const text = {
    home: language === "en" ? "Home" : "Inicio",
    about: language === "en" ? "About Me" : "Sobre mí",
    creative: language === "en" ? "Creative Work" : "Trabajo Creativo",
    professional: language === "en" ? "Professional Work" : "Trabajo Profesional",
    contact: language === "en" ? "Contact" : "Contacto",
    welcome: language === "en" ? "Welcome to My Portfolio" : "Bienvenido a Mi Portafolio",
    aboutDesc: language === "en" ? "This is a brief introduction about who I am, my background, and what I do." : "Esta es una breve introducción sobre quién soy, mi experiencia y lo que hago.",
    creativeDesc: language === "en" ? "Showcase of my artistic, design, or multimedia projects." : "Exposición de mis proyectos artísticos, de diseño o multimedia.",
    professionalDesc: language === "en" ? "Highlight of serious or client-based projects, job experience, or case studies." : "Destacado de proyectos serios o para clientes, experiencia laboral o estudios de caso.",
    contactDesc: language === "en" ? "Contact Me" : "Contáctame",
    name: language === "en" ? "Your Name" : "Tu Nombre",
    email: language === "en" ? "Your Email" : "Tu Correo",
    message: language === "en" ? "Your Message" : "Tu Mensaje",
    send: language === "en" ? "Send" : "Enviar",
  };

  return (
    <div className="font-sans scroll-smooth flex-col bg-gradient-to-b from-sky-300 via-blue-700 to-orange-400 text-white min-h-screen min-w-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-transparent z-50 text-blue-950">
        <ul className="flex flex-wrap justify-center md:justify-around py-4 text-sm md:text-base items-center">
          
          <li className="mx-2 md:mx-0"><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection("home");}} ><img className="h-10 w-auto" src={logoDark} alt="Logo in dark mode" /></a></li>
          <li className="mx-2 md:mx-0"><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("about");}} className="hover:text-blue-500"><span className="text-white">{text.about}</span></a></li>
          <li className="mx-2 md:mx-0"><a href="#creative" onClick={(e) => {e.preventDefault(); scrollToSection("creative");}} className="hover:text-blue-500"><span className="text-white">{text.creative}</span></a></li>
          <li className="mx-2 md:mx-0"><a href="#professional" onClick={(e) => {e.preventDefault(); scrollToSection("professional");}} className="hover:text-blue-500"><span className="text-white">{text.professional}</span></a></li>
          <li className="mx-2 md:mx-0"><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection("contact");}} className="hover:text-blue-500"><span className="text-white">{text.contact}</span></a></li>
          <li className="mx-2 md:mx-0">
            <button
              id="language-button"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white text-sm hover:text-blue-500 transition duration-300 ease-in-out">
              <FaGlobe />
              <span>{language === "es" ? "EN" : "ES"}</span>
            </button>
          </li>
        </ul>
      </nav>

      <main className="pt-24 space-y-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{text.welcome}</h1>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{text.about}</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">{text.aboutDesc}</p>
        </section>

        {/* Creative Work Section */}
        <section id="creative" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{text.creative}</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">{text.creativeDesc}</p>
        </section>

        {/* Professional Work Section */}
        <section id="professional" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{text.professional}</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">{text.professionalDesc}</p>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="min-h-screen py-40 bg-transparent text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{text.contactDesc}</h2>
          <form className="space-y-4 max-w-xl mx-auto text-black px-4">
            <input type="text" placeholder={text.name} className="w-full p-2 border rounded" />
            <input type="email" placeholder={text.email} className="w-full p-2 border rounded" />
            <textarea placeholder={text.message} className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{text.send}</button>
          </form>
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
