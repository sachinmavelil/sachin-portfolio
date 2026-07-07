"use client";

import { motion } from "framer-motion";

export default function Skills() {

const skillGroups = [

  {
    title: "Data Science & Artificial Intelligence",
    skills: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Transformer Models",
      "Data Analysis",
      "Data Visualization",
    ],
  },


  {
    title: "Python Libraries & AI Tools",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Hugging Face Transformers",
      "MarianMT",
      "Gradio",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },


  {
    title: "Programming Languages",
    skills: [
      "Python",
      "C",
      "C++",
      "SQL",
      "HTML",
    ],
  },


  {
    title: "Developer Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Kaggle",
      "Hugging Face",
      "Android Studio",
    ],
  },


  {
    title: "Electrical Engineering Background",
    skills: [
      "Embedded Systems",
      "Arduino",
      "MATLAB",
      "AutoCAD",
      "DIALux",
      "QGIS",
      "Control Systems",
    ],
  },

];


return (

<section
id="skills"
className="bg-gray-950 px-6 py-20 text-white"
>

<div className="mx-auto max-w-6xl">


<h2 className="text-4xl font-bold text-blue-400">
Skills
</h2>


<p className="mt-3 text-gray-400">
Technical skills covering Artificial Intelligence, Data Science,
software tools, and electrical engineering.
</p>


<div className="mt-10 grid gap-8 md:grid-cols-2">


{skillGroups.map((group,index)=>(


<motion.div

key={group.title}

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

className="rounded-xl bg-gray-900 p-6 shadow-lg"

>


<h3 className="text-2xl font-semibold">
{group.title}
</h3>


<div className="mt-4 flex flex-wrap gap-3">


{group.skills.map((skill)=>(

<span
key={skill}
className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300"
>
{skill}
</span>

))}


</div>


</motion.div>


))}


</div>

</div>

</section>

);

}