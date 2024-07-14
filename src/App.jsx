import React, { useState, useEffect } from 'react';
import "./css/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeadContainer from './components/HeadContainer.jsx';
import LetsMeetContainer from "./components/LetsMeetContainer.jsx";
import WorkingOnContainer from "./components/WorkingOnContainer.jsx";
import SocialMediaContainer from "./components/SocialMediaContainer.jsx";
import FooterContainer from './components/FooterContainer.jsx';

function App() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="App">
            <HeadContainer />
            <LetsMeetContainer />
            <WorkingOnContainer />
            <SocialMediaContainer />
            <FooterContainer />

            {showScroll && (
                <div className="scroll-to-top" onClick={scrollTop}>
                    <i className="bi bi-arrow-up-circle"></i>
                </div>
            )}
        </div>
    );
}

export default App;
