import React from 'react'

function SocialMediaContainer() {
    return (
        <div className='social-media-container' id='social-media'>
            <h1>SOCIAL MEDIA</h1>
            <div className="social-media-cards">
                <div className="social-media-card">
                    <i class="bi bi-instagram"></i>
                </div>

                <div className="social-media-card">
                    <i class="bi bi-linkedin"></i>
                </div>

                <div className="social-media-card">
                    <i class="bi bi-behance"></i>
                </div>

                <div className="social-media-card">
                    <i class="bi bi-github"></i>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaContainer