"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/nav.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);

  return (
    <header>
      <nav id="nav" className="nav">
        <div className="nav__wrapper">
          <div className="nav__wrapper__logo">
            <Link href={"/"}>
              <img src="./React.svg" alt="" />
            </Link>
          </div>
          <div>
            <ul
              className={`nav__wrapper__ul ${toggleMenu ? "nav_active" : ""}`}
            >
              <li className="nav__wrapper__ul__li">
                <Link href="/" className="nav__wrapper__ul__li__a active">
                  About us
                </Link>
              </li>
              <li className="nav__wrapper__ul__li">
                <Link href="/" className="nav__wrapper__ul__li__a active">
                  What we do
                </Link>
              </li>
              <li className="nav__wrapper__ul__li">
                <Link href="/" className="nav__wrapper__ul__li__a active">
                  Our work
                </Link>
              </li>
              <li className="nav__wrapper__ul__li">
                <Link href="/" className="nav__wrapper__ul__li__a active">
                  Blog
                </Link>
              </li>
              <li className="nav__wrapper__ul__li">
                <Link href="/" className="nav__wrapper__ul__li__a active">
                  Say Hi
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="nav__wrapper__toggle"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img src="./menu.png" width="20px" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
