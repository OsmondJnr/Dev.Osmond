import { useEffect, useState } from "react";
import "./header.css"

function Header() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setShowBackToTop(window.scrollY > 260);
      };

      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);

    return (
      <>
        {showBackToTop && (
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <ion-icon name="arrow-up"></ion-icon>
          </a>
        )}

        <nav className="main-nav">
          <a className="logo" href="#home" aria-label="Go to home">
            DEV <span>Osmond</span>
          </a>
          <ul className="nav-links" id="navLinks">
            <li>
              <a href="#about" className="nav-link-item" aria-label="About">
                <span className="nav-icon" aria-hidden="true">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <span className="nav-text">About</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link-item" aria-label="Projects">
                <span className="nav-icon" aria-hidden="true">
                  <ion-icon name="grid-outline"></ion-icon>
                </span>
                <span className="nav-text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link-item" aria-label="Contact">
                <span className="nav-icon" aria-hidden="true">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Header;