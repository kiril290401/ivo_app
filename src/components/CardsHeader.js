import React from "react";

const CardsHeader = () => {
  return (
    <div className="container max-w-5xl m-auto px-4 z-30 -mt-36 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center">
        <div className="bg-slate-300 min-h-44 max-w-72 flex flex-col justify-evenly gap-2 p-4">
          <p className="text-lg font-semibold">Денонощна Пътна Помощ</p>
          <p className="text-gray-500">
            Ние предлагаме бързи и надеждни услуги за пътна помощ 24/7 в град
            Провадия и региона.
          </p>
        </div>
        <div className="bg-color_principal min-h-80 min-w-80 flex flex-col justify-evenly gap-2 p-4">
          <p className="text-lg font-semibold">Обслужвани Райони</p>
          <p className="text-white">
            Лицензирана Пътна Помощ Провадия 24/7 и регион: Варна, Шумен, Девня,
            АМ Хемус, Нови пазар, Каспичан, Невша, Суворово, Вълчи дол,
            Габърница, Слънчево, Повеляново, Гроздьово, Старо Оряхово,
            Шкорпиловци, Дългопол, Дъскотна, Айтос, Аспарухово, Бозвелийско,
            Рояк, Аврен.
          </p>
        </div>
        <div className="bg-slate-300 min-h-44 max-w-72 flex flex-col justify-evenly gap-2 p-4">
          <p className="text-lg font-semibold">Репатриране на Автомобили</p>
          <p className="text-gray-500">
            Репатриране на автомобили и друг вид техника до 4 т. Бърза и сигурна
            услуга за вашето превозно средство.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsHeader;
