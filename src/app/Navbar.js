"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false); // Cerrar la navegación desplegable
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black">
                <Image
                  src="/Image/logo.svg"
                  alt="Logo"
                  width={90}
                  height={90}
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block font-semibold">
            <div className="flex items-center gap-16">
              <a href="#start" className="text-slate-700 underline-hover">
                Начало
              </a>
              <a href="#services" className="text-slate-700 underline-hover">
                Услуги
              </a>
              <a href="#contact" className="text-slate-700 underline-hover">
                Контакти
              </a>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <a
                  className="relative group inline-block py-3 px-4 text-lg font-semibold text-color_principal hover:bg-white hover:text-white border-2 border-color_principal rounded-md overflow-hidden transition duration-300"
                  href="tel:${+359898773450}"
                  target="_blank"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-color_principal transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative font-extrabold">Обади се!</span>
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 6H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 18H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isClick ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="md:hidden">
          <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center gap-2 ">
            <a href="#start" className="text-black text-opacity-75" onClick={closeNavbar}>
              Начало
            </a>
            <a href="#services" className="text-black text-opacity-75" onClick={closeNavbar}>
              Услуги
            </a>
            <a href="#contact" className="text-black text-opacity-75" onClick={closeNavbar}>
              Контакти
            </a>
            <div className="flex gap-5 mt-3 py-4 items-center justify-center lg:items-start lg:justify-start">
                  <a href="https://www.instagram.com/road.assistancetodorov?igsh=MTl3dWd1aDEzZXFn" target="_blank" className="w-10 h-10 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover">
                    <Image
                      src="/Image/icon_instagram.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href="https://www.facebook.com/todorov.p.tna.pomos.provadia" target="_blank" className="w-10 h-10 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover">
                    <Image
                      src="/Image/icon_facebook.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href="https://wa.me/3580898773450?text=Здравейте,%20искам да повикам пътна помощ за " className="w-10 h-10 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover" target="_blank" rel="noopener noreferrer">
                    
                    <Image
                      src="/Image/icon_whatsapp.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
