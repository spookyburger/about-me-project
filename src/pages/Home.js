import React from 'react'
import avatar from '../img/avatar.jpg'

export default () => {
    return (
        <article>
            <h1>Welcome to my ReactJS about me page!</h1>
            <div className='bio'>
            <div className='bioleft'>
                <p>
                    This is my bio, though honestly I feel like someone else should be writing it. I've worked in the gaming industry over 10 years and have experience as both a Graphic Designer and as Art Director. Currently, I work full time in graphic design and web development. I'm learning ReactJS so that I can expand on the things I am able to build for clients. Ahoy!
                </p>
            </div>
            <div className='bioright'>
                <img src={avatar} alt=""/>
            </div>
            </div>
        </article>
    )
}