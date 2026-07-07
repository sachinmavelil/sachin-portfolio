"use client";

import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [
    {
      role: "Shift Engineer",
      company: "Henry and Farad Pvt Ltd, Angamaly, Kerala",
      duration: "Aug 2022 – Jul 2024",
      points: [
        "Operated and maintained a 66kV electrical substation under Transformers and Electricals Kerala Limited (TELK), ensuring reliable power system operation and safety.",
        "Performed load monitoring, switching operations, inspections, and troubleshooting of transformers, circuit breakers, relays, and protection systems.",
        "Maintained technical records, maintenance reports, and operational documentation while following IEC/IEEE standards and KSEB safety procedures.",
      ],
    },

    {
      role: "Freelance Content Researcher",
      company: "Reliance Big Synergy, Kochi, Kerala",
      duration: "Dec 2020 – May 2021",
      points: [
        "Researched and developed factual quiz content for the Malayalam television program Anchinodu Inchodinchu.",
        "Performed information verification using reliable sources including books, academic references, and archives.",
        "Structured and classified content based on topic, difficulty level, and logical organization.",
      ],
    },

    {
      role: "Research Analyst",
      company: "Nexus Consulting, Aroor, Kerala",
      duration: "Oct 2019 – Mar 2020",
      points: [
        "Conducted research and developed verified quiz content for Ningalkkum Aakam Kodeeshwaran, Malayalam adaptation of Who Wants to Be a Millionaire?",
        "Performed detailed information analysis, validation, and structured documentation while maintaining content accuracy.",
        "Collaborated with teams to organize large volumes of information into structured formats.",
      ],
    },

    {
      role: "Trainee Electrical Engineer",
      company: "Tritech Corporation, Kalamassery, Kerala",
      duration: "Jun 2017 – Sep 2017",
      points: [
        "Assisted in electrical system design including substation layouts, wiring diagrams, and lighting systems.",
        "Prepared technical drawings, BOQs, load calculations, and engineering documentation using industry tools.",
        "Participated in site inspections and gained practical experience in electrical project execution.",
      ],
    },
  ];


  return (
    <section
      id="experience"
      className="bg-gray-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-5xl">


        <h2 className="text-4xl font-bold text-blue-400">
          Experience
        </h2>


        <p className="mt-3 text-gray-400">
          Professional experience across electrical systems, research,
          analysis, and technical documentation.
        </p>


        <div className="mt-10 space-y-8">


          {experiences.map((experience,index)=>(

            <motion.div

              key={experience.role}

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

              className="rounded-xl border-l-4 border-blue-500 bg-gray-900 p-6"

            >


              <h3 className="text-2xl font-semibold">
                {experience.role}
              </h3>


              <p className="mt-2 text-blue-300">
                {experience.company}
              </p>


              <p className="mt-1 text-sm text-gray-400">
                {experience.duration}
              </p>


              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">

                {experience.points.map((point)=>(

                  <li key={point}>
                    {point}
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