import React, { Component } from "react";
import "../Navbar/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter,faInstagram ,faBasketball} from "@fortawesome/free-brands-svg-icons";
import facebookIcon from "../../assets/icon/facebook.png"
import instaIcon from "../../assets/icon/instagram.png"
import twitterIcon from "../../assets/icon/twitter.png"
import ArrowIcon from "../../assets/icon/arrow.png"
class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <ul className="navbar-left">
            <li className="logo"><a href="#">FREYA</a></li>
            <div className="DropDown">
              <li><a href="#">Home<img src={ArrowIcon}/></a></li>
              <ul className="Drop_Down_content">
              <li>about us</li>
              <li>how are you</li>
              <li>slider</li>
              </ul>
              </div>
              <div className="DropDown">
              <li><a href="#">page<img src={ArrowIcon}/></a></li>
              <ul className="Drop_Down_content">
              <li>about us</li>
              <li>how are you</li>
              <li>slider</li>
              </ul>
              </div>
              <div className="DropDown">
              <li><a href="#">Project<img src={ArrowIcon}/></a></li>
              <ul className="Drop_Down_content">
              <li>about us</li>
              <li>how are you</li>
              <li>slider</li>
              </ul>
              </div>
            <li><a href="#">Blog<img src={ArrowIcon}/></a></li>
            <li><a href="#">Contact<img src={ArrowIcon}/></a></li>
            <li><a href="#">Elements<img src={ArrowIcon}/></a></li>
          </ul>
          <ul className="navbar-right">
            {/* Proper usage of FontAwesomeIcon */}
            <div> <a href="#"><img src={facebookIcon}/></a></div>
        <div> <a href="#"><img src={twitterIcon}/></a></div>
        <div> <a href="#"><img src={instaIcon}/></a></div>
            
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
