import CallButton from "@/components/CallButton";
import CardsHeader from "@/components/CardsHeader";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      photo: "/Image/services_tow_truck.png",
      title: "Денонощна пътна помощ",
      text: "Предлагаме превоз на леки коли, ванове, бусове и всякаква селско стопанска техника до 4 тона.",
    },
    {
      photo: "/Image/services_battery.png",
      title: "Подаване на ток",
      text: "Помощ за подаване на ток на ниски цени.",
    },
    {
      photo: "/Image/services_gasoil.png",
      title: "Доставка на гориво",
      text: "Предлагаме доставка на гориво за леки коли, джипове, микробуси, строителна техника и други",
    },
    {
      photo: "/Image/services_wheel.png",
      title: "Смяна на гуми",
      text: "Смяна на гуми при авария на пътя на изгодни цени, без скрити такси.",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col items-stretch min-h-screen max-w-7xl m-auto p-2 bg-fixed bg-cover bg-center"
    >
      {/* <CardsHeader /> */}
      <div className="py-32 w-full flex flex-col justify-evenly">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-color_principal">
          Нашите услуги
        </h2>
        <div className="my-6 text-center">
          <p>
            Ние предлагаме <span className="text-color_principal font-semibold"> лицензирана пътна помощ </span> в Провадия 24/7, покривайки
            широк регион, включващ: 
          </p>
          <p>Градове: Варна, Шумен, Девня, Нови пазар, Суворово, Вълчи дол, Дългопол, Повеляново и Айтос</p>
          <p>Села: Каспичан, Невша, Габърница, Слънчево, Гроздьово, Старо Оряхово, Шкорпиловци, Дъскотна, Бозвелийско, Аспарухово, Рояк и Авре</p>
          <p>Магистрали: АМ Хемус</p>
          <p>
            Нашият екип от професионалисти е<span className="text-color_principal font-semibold"> винаги в готовност </span>, за да ви
            осигури надеждна помощ на пътя, независимо къде се намирате в този
            обширен регион.
          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              photo={service.photo}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
      <CallButton/>
    </div>
  );
}
