"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-gray-950 px-6 text-white">

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row">


        {/* Left Side */}

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-3 font-semibold text-blue-400">
            👋 Hello, I'm
          </p>


          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Sachin M V
          </h1>


          <h2 className="mt-5 text-2xl text-blue-300">
            Data Science Professional | Machine Learning | Computer Vision | NLP
          </h2>


          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">

            Engineering graduate with professional experience in electrical
            power systems and research analysis, now applying Artificial
            Intelligence, Machine Learning, Computer Vision, and Natural
            Language Processing to solve real-world problems.

          </p>


          <div className="mt-6 inline-block rounded-full border border-green-500 bg-green-900/30 px-5 py-2 text-green-300">

            🟢 Open to Data Science, AI & Machine Learning Opportunities

          </div>


          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">

            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Projects
            </a>


            <a
              href="#resume"
              className="rounded-lg border border-gray-500 px-6 py-3 font-semibold transition hover:bg-gray-800"
            >
              Resume
            </a>


            <a
              href="#contact"
              className="rounded-lg border border-gray-500 px-6 py-3 font-semibold transition hover:bg-gray-800"
            >
              Contact Me
            </a>

          </div>


          <div className="mt-12 grid grid-cols-3 gap-8 text-center md:text-left">

            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                4
              </h3>

              <p className="text-gray-400">
                Projects
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                20+
              </h3>

              <p className="text-gray-400">
                Certifications
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                3+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

          </div>


        </motion.div>


        {/* Right Side */}

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src="/images/profile.png"
            alt="Sachin M V"
            className="h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-2xl md:h-96 md:w-96"
          />

        </motion.div>


      </div>

    </section>
  );
}