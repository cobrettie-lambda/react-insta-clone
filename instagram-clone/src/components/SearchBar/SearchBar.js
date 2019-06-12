import React from 'react';

import './SearchBar.css';
import { IoLogoInstagram, IoIosHeartEmpty } from 'react-icons/io';
import { FiCompass, FiUser } from "react-icons/fi";

const SearchBar = props => {
    return (
        <header className="header">
            <nav>
                <div className="logo-container">
                    <div className="logo-icon">
                        <IoLogoInstagram />
                    </div>
                    <h3 className="logo-text">
                        instagram
                    </h3>
                </div>
                <input classname="search" placeholder="Search"></input>
                <div className="icon-container">
                    <div>
                        <FiCompass />
                    </div>
                    <div>
                        <IoIosHeartEmpty />
                    </div>
                    <div>
                        <FiUser />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default SearchBar;