import { useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('About Me');

    const handleNavClick = (section) => {
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