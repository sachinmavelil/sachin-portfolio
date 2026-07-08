"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <nav
      className="fixed top-0 left-0 z-50 w-full bg-gray-950/90 px-6 py-4 text-white backdrop-blur-md"
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between">


        {/* Logo */}

        <h1 className="text-xl font-bold">
          Sachin M V
        </h1>



        {/* Desktop Menu */}

        <div className="hidden gap-6 text-sm md:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-blue-400"
            >

              {link.name}

            </a>

          ))}

        </div>



        {/* Mobile Menu Button */}

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >

          {open ? "✕" : "☰"}

        </button>


      </div>



      {/* Mobile Menu */}

      {open && (

        <div
          className="mt-4 flex flex-col gap-4 rounded-xl bg-gray-900 p-5 md:hidden"
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-blue-400"
            >

              {link.name}

            </a>

          ))}

        </div>

      )}


    </nav>

  );
}