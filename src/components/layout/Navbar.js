import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper  teal lighten-2">
                <div className="container">
                    <Link to="/" className="brand-logo">Plan</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;