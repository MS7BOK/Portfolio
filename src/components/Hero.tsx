import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-indigo-50 to-teal-100">
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Building with <span className="text-teal-600">Kindness</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-xl">
          A lovable full-stack engineer crafting functional, human-centered web experiences.
        </p>
        <a
          href="#projects"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl text-md shadow-lg transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
