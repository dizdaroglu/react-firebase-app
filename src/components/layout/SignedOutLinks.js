import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signin">Signup</NavLink></li>
            <li><NavLink to="/signup">Login</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;