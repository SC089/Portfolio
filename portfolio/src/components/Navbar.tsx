import { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('About Me');

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase().replace(' ', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map((title) => (
        <button
          key={title}
          onClick={() => handleNavClick(title)}
          className={activeSection === title ? 'active' : ''}
        >
          {title}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
