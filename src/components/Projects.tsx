"use client";

import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Malayalam NLP Assistant",
      category: "AI & Natural Language Processing",

      description:
        "Developed a multilingual NLP application for Malayalam and English language processing. Implemented translation, transliteration, sentiment analysis, emotion detection, language detection, and an interactive Gradio interface using transformer-based models.",

      technologies:
        "Python, Hugging Face Transformers, MarianMT, BERT, NLP, Gradio",

      featured: true,
    },


    {
      title: "Rider Assistance Using Smartphones",
      category: "Data Science | Sensor Data Analysis",

      description:
        "Developed a smartphone-based rider assistance framework using GPS and motion sensor data. Applied data processing techniques for collision risk estimation, spatial filtering, and identification of potentially hazardous interactions in traffic environments.",

      technologies:
        "Python, Data Analysis, GPS Data, Sensor Processing",

      featured: true,
    },


    {
      title: "OLTC Control Using Arduino-Based AVR Circuit",
      category: "Electrical Engineering | Embedded Systems",

      description:
        "Designed an Arduino-based prototype for automatic voltage regulation using On Load Tap Changer principles. Implemented voltage sensing and relay-based control logic to demonstrate voltage stabilization under laboratory conditions.",

      technologies:
        "Arduino, Embedded C, Voltage Control, Electrical Systems",

      featured: false,
    },


    {
      title: "Microcontroller-Based Temperature Controller",
      category: "Embedded Systems | Control Systems",

      description:
        "Developed a microcontroller-based automatic temperature control system using sensor feedback. Designed control logic for automatic heater intensity adjustment and temperature regulation.",

      technologies:
        "Embedded C, Microcontroller, Sensors, Control Systems",

      featured: false,
    },

  ];


  return (
    <section
      id="projects"
      className="bg-gray-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <h2 className="text-4xl font-bold text-blue-400">
          Academic Projects
        </h2>


        <p className="mt-3 text-gray-400">
          AI, Data Science, and Engineering projects demonstrating my
          transition from electrical systems to intelligent technologies.
        </p>


        <div className="mt-10 grid gap-8 md:grid-cols-2">


          {projects.map((project, index) => (

            <motion.div

              key={project.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              className={`rounded-xl p-6 transition hover:-translate-y-2 ${
                project.featured
                ? "border border-blue-500 bg-gray-900"
                : "bg-gray-900"
              }`}

            >


              {project.featured && (

                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
                  Featured
                </span>

              )}


              <h3 className="mt-4 text-2xl font-semibold">
                {project.title}
              </h3>


              <p className="mt-2 text-blue-400">
                {project.category}
              </p>


              <p className="mt-4 text-gray-300 leading-7">
                {project.description}
              </p>


              <p className="mt-5 text-sm text-gray-400">

                <span className="font-semibold text-white">
                  Technologies:
                </span>{" "}

                {project.technologies}

              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}