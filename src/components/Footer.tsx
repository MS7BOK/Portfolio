const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Maximilian Sebok. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/MS7BOK" target="_blank" className="hover:text-teal-600">GitHub</a>
          <a href="mailto:max@example.com" className="hover:text-teal-600">Email</a>
          <a href="https://linkedin.com/in/maximilian-sebok" target="_blank" className="hover:text-teal-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
