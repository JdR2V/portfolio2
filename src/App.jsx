import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram, FaGlobe, FaBehance, FaBars, FaTimes } from "react-icons/fa"; // Importamos FaBars (hamburguesa) y FaTimes (cerrar)
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil
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

  // Función para cerrar el menú móvil
  const closeMenu = () => {
      setIsMenuOpen(false);
  };

  // Función para alternar el estado del menú móvil
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


{/* Language toggle function */}
  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    const circle = circleRef.current;


    gsap.to(circle, {
      scale: 100,
      duration: 0.2,
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
    <div className="font-sans scroll-smooth flex-col bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-950 text-white min-h-screen min-w-screen">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-25 bg-blue-950 md:bg-transparent lg:bg:transparent z-50 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto flex items-center justify-between h-full"> 

            {/* Logo */}
              <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection("home"); closeMenu();}} className="flex-shrink-0">
                  <img className="h-12 md:h-16 py-2" src={logoDark} alt="Logo in dark mode" />
              </a>

            {/* Icono de Hamburguesa y Botón de Idioma  */}
              <div className="md:hidden flex items-center">
                  <button id="language-button" onClick={toggleLanguage} className="flex items-center space-x-1 text-white text-sm hover:text-blue-500 transition duration-300 ease-in-out mr-4"> 
                      <FaGlobe />
                      <span> {language === "es" ? "EN" : "ES"}</span>
                  </button>
                  
                   {/* Botón de Hamburguesa/Cerrar */}
                  <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                      {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
                  </button>
              </div>


             {/* Contenedor de Enlaces de Navegación */}
              <div className={
                  `${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:static top-full left-0 w-full bg-blue-950 md:bg-transparent flex-col md:flex-row items-center md:justify-around py-4 md:py-0`}>
                 
                {/* Lista de Enlaces */}
                  <ul className="flex flex-col md:flex-row items-center font-roboto space-y-2 md:space-y-0 md:space-x-6 ">
                      <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("about"); closeMenu();}} className="hover:text-blue-500 block px-4 py-2 text-3xl md:text-xl font-dm-sans"><span className="text-white">{text.about}</span></a></li>
                      <li><a href="#creative" onClick={(e) => {e.preventDefault(); scrollToSection("creative"); closeMenu();}} className="hover:text-blue-500 block px-4 py-2 text-3xl md:text-xl font-dm-sans"><span className="text-white">{text.creative}</span></a></li>
                      <li><a href="#professional" onClick={(e) => {e.preventDefault(); scrollToSection("professional"); closeMenu();}} className="hover:text-blue-500 block px-4 py-2 text-3xl md:text-xl font-dm-sans"><span className="text-white">{text.professional}</span></a></li>
                      <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection("contact"); closeMenu();}} className="hover:text-blue-500 block px-4 py-2 text-3xl md:text-xl font-dm-sans"><span className="text-white">{text.contact}</span></a></li>

                    {/* Botón de Idioma */}
                      <li className="hidden md:flex">
                          <button id="language-button" onClick={toggleLanguage} className="flex items-center space-x-1 text-white text-sm hover:text-blue-500 transition duration-300 ease-in-out">
                              <FaGlobe />
                              <span> {language === "es" ? "EN" : "ES"}</span>
                          </button>
                      </li>
                  </ul>
              </div>
          </div>


          {/* Círculo de Animación */}
            
           <div ref={circleRef}
              className="absolute top-1/2 right-25 xl-right-50 lg:right-165 md:right-10 w-10 h-10 bg-blue-600 rounded-full transform -translate-y-1/2" 
              style={{
                  transform: `scale(${circleRef.current ? circleRef.current.style.transform.replace('scale(', '').replace(')', '') : 0})`, 
                  background: "radial-gradient(circle at center, #00358a, #00ccff, #06c4ab)",
                  transition: "background 0.5s ease-in-out",
                  zIndex: -1 
              }}>
            </div>
      </nav>

      
      {/* Ajusta `pt-24` según la altura final de tu navbar en desktop */}
      <main className="pt-24 space-y-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent text-center py-20">
          {text.welcome}
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen py-30 bg-transparent">
          {text.aboutDesc}
        </section>

        {/* Creative Work Section */}
        <section id="creative" className="min-h-screen py-30 bg-transparent">
          {text.creativeDesc}
        </section>

        {/* Professional Work Section */}
        <section id="professional" className="min-h-screen py-20 bg-transparent">
          {text.professionalDesc}
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="min-h-screen py-30 bg-transparent text-center">
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
      <footer className="bg-white text-center  py-6 shadow-inner text-black">
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