import React, { useEffect, useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
    };

    useEffect(() => {
        const navLinkClickHandler = () => {
            setMenuOpen(false);
        };

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", navLinkClickHandler);
        });

        return () => {
            document.querySelectorAll(".nav-link").forEach(link => {
                link.removeEventListener("click", navLinkClickHandler);
            });
        };
    }, []);

    const getLogoSrc = () => {
        return theme === 'dark' ? 'logo.png' : 'logo-blue.png';
    };

    return (
        <header>
            <div className="logo">
                <img src={getLogoSrc()} alt="Logo" />
            </div>

            <ul className={`nav-menu ${menuOpen ? 'active' : ''} ${theme === 'dark' ? 'dark-theme' : ''}`}>
                <li><a href="#lets-meet" className="nav-link">Let's meet</a></li>
                <li><a href="#working-on" className="nav-link"> Workin' on</a></li>
                <li><a href="https://github.com/enesmuzaffer22" target='_blank' className="nav-button nav-link"><i className="bi bi-github"></i> Github</a></li>
                <li><a href="https://www.behance.net/muzafferyldrm" target='_blank' className="nav-button nav-link"><i className="bi bi-behance"></i> Behance</a></li>
                <button className='dark-light' onClick={toggleTheme}><i className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}`}></i></button>
            </ul>

            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Navbar;
