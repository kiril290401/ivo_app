import Image from "next/image";

const ServiceCard = ({ photo, title, text }) => {
  return (
    <div className=" m-auto min-h-80 p-4 ">
      <div className="max-w-sm rounded-lg overflow-hidden flex flex-col justify-center items-center gap-7">
        <Image
          src={photo}
          alt={title}
          width={100}
          height={100}
          objectFit="cover"
        />
        <div className="font-semibold text-2xl mb-4 text-center ">{title}</div>
        
        <p className="text-center text-gray-700 text-base px-4 pb-4">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
