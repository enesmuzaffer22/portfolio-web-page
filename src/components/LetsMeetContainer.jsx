import React from 'react'

function LetsMeetContainer() {
    return (
        <div className='lets-meet-container' id='lets-meet'>
            <h1>LET'S MEET</h1>
            <div className="lets-meet-cards">
                <div className="lets-meet-card">
                    <i class="bi bi-emoji-smile-upside-down"></i>

                    <p>Hello! I am Muzaffer.</p>
                </div>

                <div className="lets-meet-card">
                    <i class="bi bi-mortarboard"></i>

                    <p>I am a student in the Computer Engineering department at Istanbul Health and Technology University.</p>
                </div>

                <div className="lets-meet-card">
                    <i class="bi bi-rocket-takeoff"></i>

                    <p>I am very interested in design and software. Due to this curiosity, I actively try to develop projects.</p>
                </div>

                <div className="lets-meet-card">
                    <i class="bi bi-code-slash"></i>

                    <p>I am working towards specializing in the position of "Front End Developer" for the later stages of my career.</p>
                </div>
            </div>
        </div>
    )
}

export default LetsMeetContainer