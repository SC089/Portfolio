import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer>
    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer">
      <FaStackOverflow />
    </a>
  </footer>
);

export default Footer;
