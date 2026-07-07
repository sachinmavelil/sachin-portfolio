"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    {name:"About", href:"#about"},
    {name:"Education", href:"#education"},
    {name:"Skills", href:"#skills"},
    {name:"Experience", href:"#experience"},
    {name:"Projects", href:"#projects"},
    {name:"Certifications", href:"#certifications"},
    {name:"Resume", href:"#resume"},
    {name:"Contact", href:"#contact"},
  ];


  return (

    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-950/90 backdrop-blur-md text-white px-6 py-4">


      <div className="mx-auto flex max-w-6xl items-center justify-between">


        <h1 className="text-xl font-bold">
          Sachin M V
        </h1>



        {/* Desktop Menu */}

        <div className="hidden md:flex gap-6 text-sm">


          {links.map((link)=>(

            <a

              key={link.name}

              href={link.href}

              className="hover:text-blue-400 transition"

            >

              {link.name}

            </a>

          ))}


        </div>



        {/* Mobile Button */}

        <button

          className="md:hidden text-2xl"

          onClick={()=>setOpen(!open)}

        >

          ☰

        </button>



      </div>



      {/* Mobile Menu */}

      {open && (

        <div className="mt-4 flex flex-col gap-4 md:hidden">


          {links.map((link)=>(

            <a

              key={link.name}

              href={link.href}

              onClick={()=>setOpen(false)}

              className="hover:text-blue-400"

            >

              {link.name}

            </a>

          ))}


        </div>

      )}


    </nav>

  );

}