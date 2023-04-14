import Link from "next/link";
import navbarStyle from "../../styles/navbar.module.css";
import { useEffect, useState } from "react";
export default function AppNavbar() {
  const [activeState, setActiveState] = useState("/");
  useEffect(() => {
    if (window.location.pathname !== "/") {
      let location = window.location.pathname.split("/")[1];
      setActiveState(location);
    }
  }, []);

  return (
    <div>
      <nav className={navbarStyle.navbar}>
      <p className={navbarStyle.header}> AS/SO </p>

        <ul className={navbarStyle.navbar_ul}>

          <div
            onClick={() => setActiveState("/")}
            className={
              activeState === "/"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/">
              Home
            </Link>
          </div>
          <div
            onClick={() => setActiveState("about")}
            className={
              activeState === "about"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/about">
              About
            </Link>
          </div>
          <div
            onClick={() => setActiveState("services")}
            className={
              activeState === "services"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/services">
              Services
            </Link>
          </div>
          <div
            onClick={() => setActiveState("pricing")}
            className={
              activeState === "pricing"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/pricing">
              Pricing
            </Link>
          </div>
          <div
            onClick={() => setActiveState("articles")}
            className={
              activeState === "articles"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/articles">
              Articles
            </Link>
          </div>
          <div
            onClick={() => setActiveState("contact")}
            className={
              activeState === "contact"
                ? `${navbarStyle.active} ${navbarStyle.navbar_title}`
                : navbarStyle.navbar_title
            }
          >
            <Link style={{ textDecoration: "none" }} href="/contact">
              Contact
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
