

const Projects = () => {
  const projects = [
    {
      title: "StayBangla Hotel Management System",
      desc: "A full-stack system to manage Hotel system with user authentication. and fully responseable",
      tech: ["React", "Django-rest-api", "MySql"],
      img: "/project1.png ",
      link: "https://stay-bangla-mk4p.vercel.app/",
      link1: "https://github.com/Atiar-Rahman/stay_bangla_client",
    },
    {
      title: "StayBangla Hotel Management System Banckend",
      desc: "A full-stack system to manage scholarships with user authentication.",
      tech: ["Django-rest-api", "MySql"],
      img: "/project1.png ",
      link: "https://hotel-management-blue-seven.vercel.app/swagger/",
      link1: "https://github.com/Atiar-Rahman/hotel_management",
    },
    {
      title: "Symptom Based Multicancer detection tool",
      desc: "This website create django. use Machine learning model analysis paitent symptom and predict risk three types of cancer (1) livercancer,(2) lung cancer and (3) breast cancer",
      tech: ["React", "Django-rest-api", "MySql"],
      img: "/project1.png ",
      link: "https://symtom-based-cancer-detection.onrender.com/",
      link1: "https://github.com/Atiar-Rahman/Symtom_based_Cancer_detection",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React + Tailwind.",
      tech: ["React", "TailwindCSS","typescript"],
      img: "/project2.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 mr-3 text-blue-500 font-semibold hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={project.link1}
                  target="_blank"
                  className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
                >
                  View Github →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
