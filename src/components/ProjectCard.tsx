import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="block bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 dark:border-gray-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full dark:bg-teal-700/20 dark:text-teal-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
