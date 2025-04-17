const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
        <p className="text-gray-600 text-lg mb-8">
          I'm Maximilian — a passionate full-stack engineer with a love for building meaningful digital experiences. With a background in both design and engineering, I combine technical skill with human-centered thinking to create fast, beautiful, and functional web applications.
        </p>
        <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-700">
          {["JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"].map(skill => (
            <span key={skill} className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
