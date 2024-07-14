import React from 'react'

function WorkingOnContainer() {
    return (
        <div className='working-on-container' id='working-on'>
            <h1>WORKIN' ON</h1>

            <div className="working-on-cards">
                <div className="working-on-card">
                    <div className="hover-img dev-banner"></div>

                    <div className="card-content">
                        <div className="card-text">
                            <h3>Front End Development</h3>
                            <p>I am improving myself in the Front End field and taking part in projects.</p>
                        </div>

                        <a href="https://github.com/enesmuzaffer22" target='_blank' className='nav-button'><i class="bi bi-github"></i> Github</a>
                    </div>
                </div>
                
                <div className="working-on-card">
                    <div className="hover-img design-banner"></div>

                    <div className="card-content">
                        <div className="card-text">
                            <h3>Graphic Designer</h3>
                            <p>I continue my graphic design adventure, which I started as a hobby, by taking part in some big projects.</p>
                        </div>

                        <a href="https://www.behance.net/muzafferyldrm" target='_blank' className='nav-button'><i class="bi bi-behance"></i> Behance</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingOnContainer