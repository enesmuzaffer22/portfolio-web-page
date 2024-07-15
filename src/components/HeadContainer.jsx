import React from 'react'
import Navbar from './Navbar'

function HeadContainer() {
    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div className='head-container'>
            <Navbar />

            <div className="hero">
                <h1>MUZAFFER<br></br>YILDIRIM</h1>
                <p>designer & developer</p>

                <div className="arrow-down">
                    <i class="bi bi-arrow-down-circle" onClick={scrollDown}></i>
                </div>
            </div>
        </div>
    )
}

export default HeadContainer