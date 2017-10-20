import React from 'react'
import logo from '../img/cropped-header.jpg'

export default () => {
    return (
        <div>
            <header>
                <a href='/'><img src={logo} alt="Fry Ghost // Brad Butler"/></a>
                <p>
                    <a href='/'>Home</a><a href='/projects'>Projects</a><a href='/contact'>Contact</a>
                </p>
            </header>
        </div>
    )
}