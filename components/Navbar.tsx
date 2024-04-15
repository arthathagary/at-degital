"use client";
import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* desktop menu */}
      <nav className="bg-primary-color px-5 py-[26px] h-[77px] flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lg:hidden lucide lucide-menu text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <nav className="lg:hidden px-5 py-[26px] text-black  absolute top-0 right-0 bottom-0 left-0   w-full h-screen bg-white ease-in-out duration-500 overflow-hidden">
          <ul className="uppercase flex flex-col gap-7">
            <li className="flex justify-between items-center">
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x"
                onClick={toggleMenu}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
