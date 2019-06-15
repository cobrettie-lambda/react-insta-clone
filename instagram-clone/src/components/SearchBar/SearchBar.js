import React from 'react';

import './SearchBar.css';
// import { IoLogoInstagram, IoIosHeartEmpty } from 'react-icons/io';
// import { FiCompass, FiUser } from "react-icons/fi";

// const SearchBar = () => {
//     return (
//         <header className="header">
//             <nav>
//                 <div className="logo-container">
//                     <div className="logo-icon">
//                         <IoLogoInstagram />
//                     </div>
//                     <h3 className="logo-text">
//                         Instagram
//                     </h3>
//                 </div>
//                 <input className="search" placeholder="Search"></input>
//                 <div className="icon-container">
//                     <div>
//                         <FiCompass />
//                     </div>
//                     <div>
//                         <IoIosHeartEmpty />
//                     </div>
//                     <div>
//                         <FiUser />
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };



const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        {/* <img alt="instagram logo" src={''} className="logo-image" 
        /> */}
        <i className="logo-image fab fa-instagram"></i>
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
