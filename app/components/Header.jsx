import React from "react";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
        <img src="./logo.png" alt="" className="logo" />
        <h1>Github Finder</h1>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
