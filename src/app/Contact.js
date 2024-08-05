import React from "react";
import Image from "next/image";
import GoogleMaps from "@/components/GoogleMaps";

const Contact = () => {
  return (
    <section id="contact" className="py-16 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-12 text-center text-color_principal">
        Контакти
      </h2>
      <div className="container max-w-7xl text-center lg:text-left gap-4 p-6 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div>
          <div className="grid gap-3 items-center justify-center">
            <p>
              Телефон:{" "}
              <a className="text-2xl font-medium" href="tel:+3580898773450">
                <br />0898773450

              </a>
            </p>
            <p>
              Имейл:{" "}
              <a className="text-2xl font-medium" href="mailto:todorov909090@abv.bg">
                <br />todorov909090@abv.bg
              </a>
            </p>
            <div>
              <p>Социални мрежи:</p>
              <div className="">
                <div className="flex gap-5 mt-3 items-center justify-center lg:items-start lg:justify-start">
                  <a href="https://www.instagram.com/road.assistancetodorov?igsh=MTl3dWd1aDEzZXFn" className="w-14 h-14 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover">
                    <Image
                      src="/Image/icon_instagram.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://www.facebook.com/todorov.p.tna.pomos.provadia" className="w-14 h-14 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover">
                    <Image
                      src="/Image/icon_facebook.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://wa.me/3580898773450?text=Здравейте,%20искам да повикам пътна помощ за " className="w-14 h-14 bg-color_principal flex justify-center items-center transition duration-200 hover:bg-color_principal-hover" target="_blank" rel="noopener noreferrer">
                    
                    <Image
                      src="/Image/icon_whatsapp.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-20 grid gap-3">
              <p className="uppercase text-color_principal">
                Работно време:
              </p>
              <div>
                <p>
                  На разположение 24/7
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase text-color_principal">Местоположение:</p>
              <p className="text-xl">Провадия, кв.Север бл.5</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-grow">
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};

export default Contact;
