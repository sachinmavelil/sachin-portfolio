"use client";

import { motion } from "framer-motion";

export default function Resume() {

  return (

    <section
      id="resume"
      className="bg-gray-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-4xl text-center">


        <motion.div

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
            duration:0.5
          }}

        >


          <h2 className="text-4xl font-bold text-blue-400">
            Resume
          </h2>


          <p className="mt-6 text-lg leading-8 text-gray-300">

            Explore my academic background, professional experience,
            technical skills, certifications, and AI/Data Science projects
            through my detailed resume.

          </p>



          <div className="mt-10">


            <a

              href="/resume/Sachin_MV_Resume.pdf"

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"

            >

              📄 View Resume

            </a>


          </div>



          <p className="mt-6 text-sm text-gray-500">

            Resume will be updated regularly with new projects,
            certifications, and professional achievements.

          </p>


        </motion.div>


      </div>


    </section>

  );
}