"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaHackerrank,
} from "react-icons/fa";

import {
  SiHuggingface,
  SiLeetcode,
} from "react-icons/si";


export default function Contact() {


  const links = [

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sachinmavelil/",
      icon: <FaLinkedin size={24} />,
    },

    {
      name: "GitHub",
      url: "https://github.com/sachinmavelil",
      icon: <FaGithub size={24} />,
    },

    {
      name: "Kaggle",
      url: "https://www.kaggle.com/sachinmavelil",
      icon: <FaKaggle size={24} />,
    },

    {
      name: "Hugging Face",
      url: "https://huggingface.co/sachinmavelil",
      icon: <SiHuggingface size={24} />,
    },

    {
      name: "LeetCode",
      url: "https://leetcode.com/u/sachinmavelil/",
      icon: <SiLeetcode size={24} />,
    },

    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/sachinvmavelil",
      icon: <FaHackerrank size={24} />,
    },

  ];



  return (

    <section
      id="contact"
      className="bg-gray-900 px-6 py-20 text-white"
    >


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

        className="mx-auto max-w-5xl text-center"

      >


        <h2 className="text-4xl font-bold text-blue-400">
          Contact
        </h2>


        <p className="mt-6 text-lg text-gray-300">

          Feel free to connect with me for opportunities,
          collaborations, or discussions related to Data Science,
          Artificial Intelligence, Machine Learning, and technology.

        </p>



        <div className="mt-8 rounded-xl bg-gray-800 p-6">


          <p className="text-lg">

            📧{" "}

            <a

              href="mailto:sachinvmavelil@gmail.com"

              className="font-medium text-blue-300 transition hover:text-blue-400"

            >

              sachinvmavelil@gmail.com

            </a>


          </p>


        </div>



        <div className="mt-10 flex flex-wrap justify-center gap-5">


          {links.map((link,index)=>(


            <motion.a

              key={link.name}

              href={link.url}

              target="_blank"

              rel="noopener noreferrer"


              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.3,
                delay:index*0.1
              }}


              className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"

            >

              {link.icon}

              <span>
                {link.name}
              </span>


            </motion.a>


          ))}


        </div>


      </motion.div>


    </section>

  );

}