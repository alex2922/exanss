import { Link } from 'react-router-dom'
import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className='header-con'>

            <div className="header">
                <Link className='logo' to="/"> </Link>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>

                </div>
            </div>




        </div>

    )
}

export default Header