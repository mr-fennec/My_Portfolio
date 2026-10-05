import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {// Navigation bar component with responsive design and smooth scrolling
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {// Handle scroll event to change navbar background on scroll
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [// Navigation links for the navbar
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "experience", label: "Experience" },
    { id: 5, link: "education", label: "Education" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  const handleNav = (section: string) => {// Handle navigation to different sections of the page
    navigate(section === "home" ? "/" : `/${section}`, { replace: true });
    scroller.scrollTo(section, { smooth: true, duration: 500 });
    setNav(false);
  };

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-6 text-white fixed z-50"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "#0a0a0f",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s, backdrop-filter 0.3s",
      }}
    >
      <button
        onClick={() => handleNav("home")}
        className="cursor-pointer select-none bg-transparent border-none p-0"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.45rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#f0f0f5",
        }}
      >
        Abder h<span style={{ color: "#6c63ff" }}>.</span>
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <button
              onClick={() => handleNav(link)}
              className="cursor-pointer select-none px-4 py-2 rounded-lg text-sm font-medium capitalize bg-transparent border-none"
              style={{ color: "#7a7a90", transition: "color 0.2s, background 0.2s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#f0f0f5";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#7a7a90";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {label}
            </button>
          </li>
        ))}
        <li className="ml-2">
          <button
            onClick={() => handleNav("contact")}
            className="cursor-pointer select-none px-4 py-2 rounded-lg text-sm font-semibold text-white border-none"
            style={{ background: "#6c63ff", transition: "opacity 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Coffee Chat
          </button>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 md:hidden select-none"
        style={{ color: "#7a7a90", position: "relative", zIndex: 60 }}
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Mobile full-screen menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen"
          style={{ background: "#0a0a0f", zIndex: 49 }}
        >
          {links.map(({ id, link, label }) => (
            <li key={id} className="px-4 py-5 text-3xl font-semibold">
              <button
                onClick={() => handleNav(link)}
                className="cursor-pointer capitalize select-none bg-transparent border-none"
                style={{ color: "#7a7a90", fontFamily: "'Space Grotesk', sans-serif", fontSize: "inherit" }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
