import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="header">
      <nav ref={navRef}>
        <a href="#">ABOUT</a>
        <a href="#">SOLUTIONS</a>
        <a href="#">CASE STUDIES</a>
        <a href="#">FAQ</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
        <a href="#">TRACK SHIPMENT</a>
        <a href="#">SIGN</a>
        <a href="#">REGISTER</a>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <h3>
        <img className="imgggy" src="../images/Logo-Black.png" alt="00111" />
      </h3>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="faltu007">

      </div>
    </div>
  );
}

export default Navbar;
