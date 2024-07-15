import React from 'react'

function SocialMediaContainer() {
    return (
        <div className='social-media-container' id='social-media'>
            <h1>SOCIAL MEDIA</h1>
            <div className="social-media-cards">
                <a href='https://www.instagram.com/enesmuzafferr/' target='_blank' rel="noopener noreferrer" className="social-media-card">
                    <i class="bi bi-instagram"></i>
                </a>

                <a href='https://www.linkedin.com/in/muzaffer-yildirim/' rel="noopener noreferrer" target='_blank' className="social-media-card">
                    <i class="bi bi-linkedin"></i>
                </a>

                <a href='https://www.behance.net/muzafferyldrm' target='_blank' rel="noopener noreferrer" className="social-media-card">
                    <i class="bi bi-behance"></i>
                </a>

                <a href='https://github.com/enesmuzaffer22' target='_blank' rel="noopener noreferrer" className="social-media-card">
                    <i class="bi bi-github"></i>
                </a>
            </div>
        </div>
    )
}

export default SocialMediaContainer