import "./css/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from 'react';
import HeadContainer from './components/HeadContainer.jsx';
import LetsMeetContainer from "./components/LetsMeetContainer.jsx";
import WorkingOnContainer from "./components/WorkingOnContainer.jsx";
import SocialMediaContainer from "./components/SocialMediaContainer.jsx";
import FooterContainer from './components/FooterContainer.jsx';

function App() {

  return (
    <div className="App">
        <HeadContainer />
        <LetsMeetContainer />
        <WorkingOnContainer />
        <SocialMediaContainer />
        <FooterContainer />
    </div>
  );
}

export default App;
