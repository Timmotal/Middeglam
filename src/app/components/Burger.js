"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Top Bar with Logo, Text, and Menu Button */}
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-between pl-8 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[#AB696D]/30 shadow-md " : "bg-transparent"
        } z-50`}
      >

        {/* Menu Open Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="transition-all"
        >
          <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g className="transition-opacity">
              <line x1="0" y1="17" x2="48" y2="17" stroke="white" strokeWidth="2" />
              <line x1="0" y1="31" x2="48" y2="31" stroke="white" strokeWidth="2" />
            </g>
          </svg>
        </button>

        {/* Logo & Text */}
        <div className="flex items-center space-x-4">
          <Image
            src="/middelglamlogo.png"
            alt="Middeglam Brows Logo"
            width={120}
            height={50}
          />
          <div 
          className={` text-[#F8F9FA] font-medium  
          ${ scrolled ? " bg-[#AB696D] p-2 " : "bg-transparent"
        }`}>
            Book Now
        </div>
        </div>

        
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#AB696D] text-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 z-50 transition-all"
        >
          <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g className="transition-transform">
              <line
                x1="0"
                y1="24"
                x2="48"
                y2="24"
                stroke="white"
                strokeWidth="2"
                className={`${menuOpen ? "rotate-45 origin-center" : "rotate-0"}`}
              />
              <line
                x1="0"
                y1="24"
                x2="48"
                y2="24"
                stroke="white"
                strokeWidth="2"
                className={`${menuOpen ? "-rotate-45 origin-center" : "rotate-0"}`}
              />
            </g>
          </svg>
        </button>

        {/* Sidebar Content */}
        
        <ul className="list-none text-center text-2xl p-5 pt-32 space-y-4">
          {["Home", "About", "Portfolio", "Contact"].map((name, index) => (
            <li key={index}>
              <a href="#" onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            </li>
          ))}
          {/* <li>
            <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
            <ul className="pl-5 space-y-2">
              {["Service 1", "Service 2", "Service 3"].map((service, idx) => (
                <li key={idx}>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>

        <div className="text-center bg-white text-2xl text-[#AB696D] w-40 mx-auto">Book Now</div>
        <div className="p-5 flex bg-[#AB696D] justify-center items-end  align-bottom">
        <Image
            src="/middelglamlogo.png"
            alt="Middeglam Brows Logo"
            className=""
            width={200}
            height={50}
          />
          {/* <h3>Middeglam Brows</h3> */}
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
