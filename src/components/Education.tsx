export default function Education() {

  const education = [
    {
      degree: "M.Tech in Data Science",
      institution: "Jawaharlal Nehru University",
      duration: "2024 – 2026",
      details:
        "Focused on Data Science, Machine Learning, Artificial Intelligence, Data Analytics, and computational methods for solving real-world problems.",
    },

    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Mahatma Gandhi University",
      duration: "2012 – 2016",
      details:
        "Built a strong foundation in electrical systems, electronics, embedded systems, control systems, and engineering problem-solving.",
    },
  ];


  return (
    <section
      id="education"
      className="bg-gray-900 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-5xl">

        <h2 className="text-4xl font-bold text-blue-400">
          Education
        </h2>


        <div className="mt-10 space-y-8">

          {education.map((item) => (

            <div
              key={item.degree}
              className="rounded-xl bg-gray-950 p-6 border-l-4 border-blue-500"
            >

              <h3 className="text-2xl font-semibold">
                {item.degree}
              </h3>


              <p className="mt-2 text-blue-300">
                {item.institution}
              </p>


              <p className="mt-1 text-sm text-gray-400">
                {item.duration}
              </p>


              <p className="mt-4 text-gray-300">
                {item.details}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}