import React from "react";
import AppleIcon from "../images/globalnav_apple_image_large.svg";
import Mac from "../images/globalnav_links_mac_image_large.svg";
import Ipad from "../images/ipad-nav.svg";
import Iphone from "../images/iphone-nav.svg";
import Watch from "../images/watch-nav.svg";
import TV from "../images/tv-nav.svg";
import Music from "../images/music-nav.svg";
import Support from "../images/support-nav.svg";
import Search from "../images/globalnav_search_image_large.svg";
import Bag from "../images/globalnav_bag_image_large.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-link">
          <img src={AppleIcon} alt="Apple" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Mac} alt="Mac" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Ipad} alt="Ipad" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Iphone} alt="Iphone" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Watch} alt="Watch" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={TV} alt="TV" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Music} alt="Music" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Support} alt="Support" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Search} alt="Search" className="nav-image" />
        </div>
        <div className="nav-link">
          <img src={Bag} alt="Bag" className="nav-image" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
