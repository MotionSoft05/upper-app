"use client";
import { useState } from "react";

function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="/img/logo.png" className="h-8 mr-3" alt="Logo" />
        </a>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileNavOpen ? "block" : "hidden"
          }`}
          id="MobileContent"
        >
          <ul className=" scroll-smooth flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#preguntas"
                className="block py-2 pl-3 pr-4 text-white hover:text-custom md:p-0"
              >
                Precios
              </a>
            </li>
            <li>
              <a
                href="#precios"
                className="block py-2 pl-3 pr-4 text-white hover:text-custom md:p-0"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 pl-3 pr-4 text-white hover:text-custom md:p-0"
                aria-current="page"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
