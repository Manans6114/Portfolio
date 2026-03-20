import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const element = e.currentTarget as HTMLAnchorElement;
        const target = element.getAttribute("data-href");

        if (!target) return;

        document.querySelector(target)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    links.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    // ✅ CLEANUP (important)
    return () => {
      links.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MS
        </a>

        <a
          href="mailto:manansharma127021@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          manansharma127021@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;