import Image from "next/image";
import React from "react";
import CardsHeader from "@/components/CardsHeader";
const Header = () => {
  return (
    <header id="start" className="grid min-h-screen overflow-hidden relative top-0 left-0 right-0">
      <Image
        src="/Image/header-xl.jpeg"
        className="brightness-50 hidden xl:block"
        alt="Logo"
        layout="fill"
        objectFit="cover"
      />
      <Image
      src="/Image/header-sm2.jpeg"
      className="brightness-50 xl:hidden"
      alt="Logo"
      layout="fill"
      objectFit="cover"
      />
      <div className="container max-w-7xl m-auto h-screen w-screen flex mt-40 xl:justify-start justify-center z-20">
        <div className="text-center xl:text-left flex flex-col justify-start mt-20 items-center xl:items-start gap-8 ">
          <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-extrabold pb-5 ">
            Пътна Помощ <br /> <span className=" text-color_principal">Провадия</span>
          </h1>
          <p className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl mt-4">
            На разположение 24/7
          </p>
          <p className="text-gray-300 font-semibold text-center xl:text-left px-5 xl:px-0">
            Осигуряваме <span className="text-color_principal font-semibold">бърза реакция и качествени услуги</span> , за да ви върнем на
            пътя възможно най-скоро. Доверете се на нашия опит и професионализъм
            – ние сме вашият партньор на пътя.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
