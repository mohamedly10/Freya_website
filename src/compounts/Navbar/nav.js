import React from "react";
import "../Navbar/nav.css";
import facebookIcon from "../../assets/icon/facebook.png";
import instaIcon from "../../assets/icon/instagram.png";
import twitterIcon from "../../assets/icon/twitter.png";
import ArrowIcon from "../../assets/icon/arrow.png";

// Navigation items data
const navItems = [
  { title: "Home", hasDropdown: true, dropdownItems: ["about us", "about us", "slider"] },
  { title: "Page", hasDropdown: true, dropdownItems: ["about us", "about us", "about us"] },
  { title: "Project", hasDropdown: true, dropdownItems: ["about us", "about us", "about us"] },
  { title: "Blog", hasDropdown: false },
  { title: "Contact", hasDropdown: false },
  { title: "Elements", hasDropdown: false }
];

const socialIcons = [
  { icon: facebookIcon, link: "#" },
  { icon: twitterIcon, link: "#" },
  { icon: instaIcon, link: "#" }
];

const NavDropdown = ({ title, dropdownItems }) => (
  <div className="DropDown">
    <li>
      <a href="#">
        {title}<img src={ArrowIcon} alt="arrow" />
      </a>
    </li>
    <ul className="Drop_Down_content">
      {dropdownItems.map((item, index) => (
        <li key={index}><a href="#">{item}</a></li>
      ))}
    </ul>
  </div>
);

const NavDropdownSmall = ({ title, dropdownItems }) => (
  <div className="DropDown">
    <li>
      <a href="#">
        {title}
      </a>
    </li>
    <ul className="Drop_Down_content_2">
      {dropdownItems.map((item, index) => (
        <li key={index}><a href="#">{item}</a></li>
      ))}
    </ul>
  </div>
);

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li className="logo">
          <a href="#">FREYA</a>
        </li>
        
        <div className="option">
          {navItems.map((item, index) => (
            item.hasDropdown ? (
              <NavDropdown 
                key={index}
                title={item.title}
                dropdownItems={item.dropdownItems}
              />
            ) : (
              <li key={index}>
                <a href="#">
                  {item.title}<img src={ArrowIcon} alt="arrow" />
                </a>
              </li>
            )
          ))}
        </div>
      </ul>

      <ul className="navbar-right">
        <div className="socialMedia">
          {socialIcons.map((social, index) => (
            <div key={index}>
              <a href={social.link}>
                <img src={social.icon} alt="social icon" />
              </a>
            </div>
          ))}
        </div>

        <div className="DropDown_smallScreen">
          <li>
            <a href="#">
              <img src={ArrowIcon} alt="menu" />
            </a>
          </li>
          <ul className="Drop_Down_content_s">
            {navItems.map((item, index) => (
              item.hasDropdown?
           <NavDropdownSmall
           title={item.title}
           dropdownItems={item.dropdownItems}
           />
              :
              <li key={index}>
              <a href="#">{item.title}</a>
            </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;