import React from "react";

const Header = () => {
  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="flex border-b-2 h-16" aria-label="Global">
        <div className="flex items-center">
          <a href="#" className="m-2 p-2">
            <img className="w-auto h-14" src="/logo.png" alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
