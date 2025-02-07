import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-lg font-semibold">Farah - Web Developer</p>
      <p className="text-sm text-gray-400 mt-1">
        Building creative and user-friendly web experiences.
      </p>

      <div className="flex justify-center space-x-4 mt-3">
        <a
          href="https://github.com/farahsamsi"
          target="blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://github.com/farahsamsi"
          target="blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:samsiprome1@gmail.com" className="hover:text-gray-300">
          <FaEnvelope size={20} />
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-3">©</p>
    </footer>
  );
};

export default Footer;
