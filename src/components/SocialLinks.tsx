import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/Abderahman_Haouit_CV.pdf";

const SocialLinks: React.FC = () => {// SocialLinks component displaying social media links with responsive design 
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abder-h-244940193/",
      drawerStyle: "rounded-tr-md",
    },
    {
      id: 2,
      icon: <FaGithub size={18} />,
      label: "GitHub",
      href: "https://github.com/mr-fennec",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={18} />,
      label: "Email",
      href: "mailto:abdul01hd@yahoo.com",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={18} />,
      label: "CV",
      href: cv,
      target: "_blank" as const,
    },
  ];

  return (
    <>
      {/* ── Desktop: slide-out drawer on left ── */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-40">
        <ul>
          {links.map(({ id, icon, label, href, drawerStyle, target }) => (
            <li
              key={id}
              className={`flex items-center h-11 px-3 ml-[-96px] hover:ml-[-10px] hover:rounded-md duration-300 ${drawerStyle || ""}`}
              style={{
                background: "#18181f",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "none",
                marginBottom: 2,
                width: 136,
              }}
            >
              <a
                href={href}
                className="flex items-center justify-end w-full gap-2 text-sm font-medium"
                style={{ color: "#7a7a90", transition: "color 0.2s" }}
                target={target}
                rel="noreferrer"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#f0f0f5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#7a7a90";
                }}
              >
                <span style={{ fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                  {label}
                </span>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Mobile / tablet: fixed bottom bar ── */}
      <div
        className="flex lg:hidden fixed bottom-0 left-0 right-0 z-40 justify-around items-center"
        style={{
          background: "rgba(10,10,15,0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          height: 56,
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {links.map(({ id, icon, label, href, target }) => (
          <a
            key={id}
            href={href}
            target={target}
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
            style={{
              color: "#7a7a90",
              transition: "color 0.2s",
              fontSize: "0.6rem",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#6c63ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#7a7a90";
            }}
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* Spacer so bottom bar doesn't overlap page content on mobile */}
      <div className="block lg:hidden" style={{ height: 56 }} />
    </>
  );
};

export default SocialLinks;
