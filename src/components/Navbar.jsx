import React, { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        if (hamburger && navMenu) {
            const mobileMenu = () => {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            };

            hamburger.addEventListener("click", mobileMenu);

            const navLink = document.querySelectorAll(".nav-link");

            const closeMenu = () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            };

            navLink.forEach(n => n.addEventListener("click", closeMenu));

            // Cleanup event listeners on component unmount
            return () => {
                hamburger.removeEventListener("click", mobileMenu);
                navLink.forEach(n => n.removeEventListener("click", closeMenu));
            };
        }
    }, []);

    return (
        <header>
            <div className="logo">
                <img src="logo-blue.png" alt="Logo" />
            </div>

            <ul className="nav-menu">
                <li><a href="#lets-meet" className="nav-link">Let's meet</a></li>
                <li><a href="#working-on" className="nav-link"> Workin' on</a></li>
                <li><a href="" className="nav-button nav-link"><i className="bi bi-github"></i> Github</a></li>
                <li><a href="" className="nav-button nav-link"><i className="bi bi-behance"></i> Behance</a></li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Navbar;
