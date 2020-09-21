import React, { useState } from "react";
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
  const [navExtended, setNavExtended] = useState(false);
  return (
    <section>
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
      <nav className="navbar navbar-mobile" id="nav-mobile">
        <div
          className="nav-link"
          onClick={() => {
            const nav = document.getElementById("nav-mobile");
            nav.scrollIntoView();
            if (!navExtended) {
              const ham1 = document.getElementById("ham1");
              const ham2 = document.getElementById("ham2");
              const nav = document.getElementById("nav-mobile");
              const bag = document.getElementById("bag-mobile");
              const navExtended = document.getElementById("nav-extended");
              const linksSection = document.getElementById("linksSection");
              const searchSection = document.getElementById("searchSection");
              document.body.style.height = "100vh";
              document.body.style.overflow = "hidden";
              navExtended.style.backgroundColor = "rgba(0,0,0,1)";
              nav.style.backgroundColor = "rgba(0,0,0,1)";
              bag.style.opacity = 0;
              linksSection.style.opacity = "1";
              searchSection.style.opacity = "1";
              ham1.style.marginBottom = 0;
              ham2.style.marginTop = "-1px";
              navExtended.style.height = "100vh";
              navExtended.style.width = "100vw";
              navExtended.style.visibility = "visible";
              // Hamburguer Timeout
              setTimeout(() => {
                ham1.style.transform = "rotate(45deg)";
                ham2.style.transform = "rotate(-45deg)";
                setNavExtended(true);
              }, 100);
            } else {
              const ham1 = document.getElementById("ham1");
              const ham2 = document.getElementById("ham2");
              const nav = document.getElementById("nav-mobile");
              const bag = document.getElementById("bag-mobile");
              document.body.style.height = "100%";
              document.body.style.overflow = "auto";
              const linksSection = document.getElementById("linksSection");
              const searchSection = document.getElementById("searchSection");
              const navExtended = document.getElementById("nav-extended");
              navExtended.style.height = "0";
              linksSection.style.opacity = "0";
              searchSection.style.opacity = "0";
              nav.style.backgroundColor = "rgba(0,0,0,0.8)";
              navExtended.style.backgroundColor = "rgba(0,0,0,0.8)";
              navExtended.style.visibility = "hidden";
              ham1.style.transform = "rotate(0deg)";
              ham2.style.transform = "rotate(0deg)";
              bag.style.opacity = 1;
              setTimeout(() => {
                ham1.style.marginBottom = "5px";
                ham2.style.marginTop = "5px";
                setNavExtended(false);
              }, 100);
            }
          }}
        >
          <div className="nav-hamburger-1" id="ham1"></div>
          <div className="nav-hamburger-2" id="ham2"></div>
        </div>
        <div className="nav-link">
          <img
            src={AppleIcon}
            alt="Apple"
            className="nav-image apple-img-mobile"
          />
        </div>
        <div className="nav-link" id="bag-mobile">
          <img src={Bag} alt="Bag" className="nav-image" />
        </div>
      </nav>
      <div className="nav-extended" id="nav-extended">
        <div className="search-section" id="searchSection">
          <i class="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search"
            placeholder="Search apple.com"
          />
        </div>
        <div className="br br-links"></div>
        <div className="nav-extended-links-section" id="linksSection">
          <div className="nav-link">
            <img src={Mac} alt="Mac" className="nav-image nav-image-extended" />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img
              src={Ipad}
              alt="iPad"
              className="nav-image nav-image-extended"
            />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img
              src={Iphone}
              alt="iPhone"
              className="nav-image nav-image-extended"
            />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img
              src={Watch}
              alt="Watch"
              className="nav-image nav-image-extended"
            />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img src={TV} alt="TV" className="nav-image nav-image-extended" />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img
              src={Music}
              alt="Music"
              className="nav-image nav-image-extended"
            />
            <div className="br br-links"></div>
          </div>
          <div className="nav-link">
            <img
              src={Support}
              alt="Support"
              className="nav-image nav-image-extended"
            />
            <div className="br br-links"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
