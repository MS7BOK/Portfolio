import ProjectCard from "./ProjectCard";

const projectList = [
  {
    title: "Virtual Sensei",
    description: "An AI-powered martial arts trainer using PoseNet for real-time feedback.",
    tech: ["React", "TensorFlow.js", "Node.js", "MediaPipe"],
    link: "https://github.com/MS7BOK/virtual-sensei",
  },
  {
    title: "Babysitters Club App",
    description: "A trusted babysitting exchange platform with points-based rewards.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/MS7BOK/babysitters-club",
  },
  {
    title: "Travel Log App",
    description: "A travel diary with photo uploads and map pins built with the MERN stack.",
    tech: ["MERN", "Cloudinary", "Leaflet"],
    link: "https://github.com/MS7BOK/travel-log",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Projects</h2>
        <p className="text-gray-600 mb-12">
          A showcase of full-stack builds and experimental work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
