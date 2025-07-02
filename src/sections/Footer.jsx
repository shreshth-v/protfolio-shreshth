import { socialImgs } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/shreshth21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shreshth-v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shreshth Vishwakarma. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
