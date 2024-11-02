import clsx from "clsx";
import Image from "next/image";

type Props = {
  image: string;
  text: string;
  textPosition?: "top" | "middle" | "bottom";
};

const TopCard = ({ image, text, textPosition = "bottom" }: Props) => {
  return (
    <div
      dir="rtl"
      className="relative bg-white shadow-lg rounded-xl overflow-hidden w-full flex-1 group"
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={image}
          alt="Card Image"
          layout="fill"
          className="object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3
        className={clsx(
          "card absolute left-0 right-0 px-4 py-2 text-white text-lg text-center font-semibold bg-black bg-opacity-40 transform transition-transform duration-300 group-hover:scale-105",
          {
            "md:top-[15%] top-1/2 transform -translate-y-1/2":
              textPosition === "top",
            "top-1/2 transform -translate-y-1/2": textPosition === "middle",
            "md:bottom-[15%] top-1/2 transform -translate-y-1/2":
              textPosition === "bottom",
          }
        )}
      >
        {text}
      </h3>
    </div>
  );
};

export default TopCard;
