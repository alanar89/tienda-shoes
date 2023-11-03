import { headerLogo } from "../assets/images/index.js";
import { hamburger, close } from "../assets/icons/index.js";
import { navLinks } from "../constants/index.js";
import { useState } from "react";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handlerClick = () => {
    setMenu(!menu);
  };
  return (
    <header className="md:padding-x py-6 w-full absolute z-20 ">
      <nav className="flex justify-between  items-center  max-container">
        <a href="/" className="padding-x md:p-0">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1 flex
        justify-center items-center gap-16 max-md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-montserrat leading-normal text-slate-gray"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-md:block  cursor-pointer fixed z-20  right-0 px-8"
          onClick={handlerClick}
        >
          <img
            src={!menu ? hamburger : close}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
        {/* hamburger menu */}
        <div
          className={`${menu ? "top-0 " : "-top-full"} w-full bg-white fixed 
    transition-all duration-300 p-0  md:hidden`}
        >
          <ul
            className=" flex flex-col
         items-center w-full gap-10 p-0  mt-12 mb-4"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="font-montserrat leading-normal text-slate-gray"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
