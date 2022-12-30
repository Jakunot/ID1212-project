import React from 'react';
import {Link} from 'react-router-dom';

import '../css/header.css';

function Header() {
	return (
        <header>
            <p className = 'header-p'>Our Project</p>
            <Link to='/home'><div className="header-button">About</div></Link>
            <Link to='/about'><div className="header-button">More Info</div></Link>
        </header>
	);
}
export default Header;
