"use client";

import { motion } from "framer-motion";

export default function Certifications() {

  const featured = [

    {
       title: "Professional Development Programme on Autonomous Vehicle Training Systems",
       institution: "NITTTR Chennai",
    },

    {
      title: "Data Analytics Essentials",
      institution: "Cisco Networking Academy",
    },

    {
      title: "AI in Healthcare",
      institution: "Microsoft",
    },

    {
      title: "SOAR – AI for Educators",
      institution: "Microsoft",
    },

    {
      title: "Deep Learning for Beginners",
      institution: "Simplilearn",
    },

    {
      title: "One Day Symposium on AI in Cyber Security",
      institution: "IndiaAI",
    },


    {
      title: "AI in Pharma: Transforming Life Sciences Through Technology",
      institution:
        "Life Sciences Sector Skill Development Council",
    },

    {
      title: "Basics of Business Analytics",
      institution: "UniAthena",
    },

    {
      title: "Essentials of Data Visualization using MS Excel",
      institution: "UniAthena",
    },

    {
      title: "Research Methodology",
      institution: "UNITAR",
    },

  ];


  const additional = [

    {
      category: "Analytics",
      items: [
        "Introduction to Statistics - Saylor University",
      ],
    },


    {
      category: "Cloud Computing & IoT",
      items: [
        "Introduction to Cloud Computing - National Skill Development Corporation",
        "Introduction to IoT - National Skill Development Corporation",
        "IoT Network Specialist Certificate Programme - Reliance Foundation",
        "Telecom Technician – IoT Devices / Systems - Telecom Sector Skill Council",
        "Web Designing - JNU SCSS Coding Studio",
      ],
    },


    {
      category: "Electrical Engineering, Semiconductor & Energy",
      items: [
        "Electrical System Design and Drafting - Tritech Design Academy",
        "One Day Workshop on VLSI Design Using Cadence Tools - Chip to Startup (C2S)",
        "Solar Panel Installation Technician - National Skill Development Corporation",
      ],
    },


    {
      category: "Healthcare, Bioinformatics & Life Sciences",
      items: [
        "Foundation Course in Bioinformatics - National Skill Development Corporation",
        "Basics of Healthcare System - UniAthena",
        "Epidemiology - NextGenU",
        "AI Personalized Beauty Product Recommendation - NCVET (MSDE, Government of India)",
      ],
    },


    {
      category: "Research, Ethics & Statistics",
      items: [
        "Research Ethics Online Training - The Global Health Network",
        "Introduction to Statistics - Saylor University",
      ],
    },


    {
      category: "Business, Communication & Management",
      items: [
        "Principles of Macroeconomics - Saylor University",
        "Introduction to Financial Accounting - Saylor University",
        "Introduction to Human Resource Management - Saylor University",
        "Business Law - Saylor University",
        "Technical Writing - Reliance Foundation",
        "Mass Communication - Saylor University",
        "Social Media Marketing - Reliance Foundation",
      ],
    },


    {
      category: "Psychology, Philosophy & Social Sciences",
      items: [
        "Introduction to Psychology - Saylor University",
        "Basics of Psychology - UniAthena",
        "Introduction to Sociology - Saylor University",
        "Introduction to Critical Thinking and Logic - Saylor University",
        "Moral and Political Philosophy - Saylor University",
        "Ethics and Public Policy - Saylor University",
      ],
    },


    {
      category: "Education & Teaching",
      items: [
        "English Pronunciation In a Global World - Vrije Universiteit Amsterdam",
        "General Knowledge for Teachers - Language Skills - Saylor University",
        "Basics of Building Effective Teaching Strategies - UniAthena",
      ],
    },


    {
      category: "Hospitality & Service Industry",
      items: [
        "Introduction to Restaurant Services - National Skill Development Corporation",
        "Introduction to Housekeeping Services - National Skill Development Corporation",
        "Introduction to Professional English for Housekeeping - National Skill Development Corporation",
      ],
    },

  ];



  return (

    <section
      id="certifications"
      className="bg-gray-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <h2 className="text-4xl font-bold text-blue-400">
          Certifications & Professional Learning
        </h2>


        <p className="mt-3 text-gray-400">
          Continuous learning across Artificial Intelligence,
          Data Science, Analytics, Engineering, Cloud Technologies,
          and interdisciplinary domains.
        </p>



        <h3 className="mt-10 text-2xl font-semibold">
          ⭐ Featured Certifications
        </h3>



        <div className="mt-6 grid gap-6 md:grid-cols-2">


          {featured.map((cert,index)=>(


            <motion.div

              key={cert.title}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}


              className="rounded-xl border border-blue-500/30 bg-gray-900 p-6 transition hover:-translate-y-2"

            >


              <h4 className="text-xl font-semibold">
                {cert.title}
              </h4>


              <p className="mt-2 text-blue-300">
                {cert.institution}
              </p>


            </motion.div>


          ))}


        </div>





        <h3 className="mt-16 text-2xl font-semibold">
          📚 Professional Development & Technical Training
        </h3>



        <div className="mt-6 space-y-8">


          {additional.map((section,index)=>(


            <motion.div

              key={section.category}

              initial={{
                opacity:0,
                x:-40
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}


              className="rounded-xl bg-gray-900 p-6"

            >


              <h4 className="text-xl font-semibold text-blue-300">
                {section.category}
              </h4>



              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">


                {section.items.map((item)=>(

                  <li key={item}>
                    {item}
                  </li>

                ))}


              </ul>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}