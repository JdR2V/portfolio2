import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram } from "react-icons/fa";
import React, { useEffect } from 'react';


export default function PortfolioPage() {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <div className="font-sans scroll-smooth relative bg-gradient-to-b from-sky-300 via-blue-700 to-orange-400 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50 text-black">
        <ul className="flex flex-wrap justify-center md:justify-around py-4 text-sm md:text-base">
          <li className="mx-2 md:mx-0"><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li className="mx-2 md:mx-0"><a href="#about" className="hover:text-blue-500">About Me</a></li>
          <li className="mx-2 md:mx-0"><a href="#creative" className="hover:text-blue-500">Creative Work</a></li>
          <li className="mx-2 md:mx-0"><a href="#professional" className="hover:text-blue-500">Professional Work</a></li>
          <li className="mx-2 md:mx-0"><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      <main className="pt-24 space-y-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to My Portfolio</h1>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">This is a brief introduction about who I am, my background, and what I do.</p>
        </section>

        {/* Creative Work Section */}
        <section id="creative" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Creative Work</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">Showcase of my artistic, design, or multimedia projects.</p>
        </section>

        {/* Professional Work Section */}
        <section id="professional" className="min-h-screen py-20 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Professional Work</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">Highlight of serious or client-based projects, job experience, or case studies.</p>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="min-h-screen py-20 bg-transparent text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4 max-w-xl mx-auto text-black px-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
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


