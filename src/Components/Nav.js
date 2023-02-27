import React, {useEffect, useState} from 'react'

import "./Nav.css"

function Nav() {

    const [show , setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else setShow(false)
        })
    })
    return (
        <div className={`navbar ${show && "nav_scroll"}`}>
            <img
                className='nav_logo'
                src="netflix.png"
                alt="Netflix Logo" />

            <img
                className='nav_avatar'
                src="avatar.png"
                alt="Login Avatar" />
        </div>
    )
}

export default Nav