import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=" bg-gray-500 text-black py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-black-300">Connect with us on social media:</p>

        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/yogendhra9Y
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-2xl hover:text-gray-400"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yogendhra-gadhamchetty-30b866276/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-2xl hover:text-gray-400"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yogendhra_09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl hover:text-gray-400"
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Yogendhra9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-2xl hover:text-gray-400"
            />
          </a>
        </div>

        <p className="text-black text-sm">
          © 2024 Yogendhra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
