import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/cropped-header.jpg'

export default () => {
    return (
        <div>
            <header>
                <a href='/'><img src={logo} alt="Fry Ghost // Brad Butler"/></a>
                <p>
                    <Link to='/'>Home</Link><Link to='/projects'>Projects</Link><Link to='/contact'>Contact</Link>
                </p>
            </header>
        </div>
    )
}