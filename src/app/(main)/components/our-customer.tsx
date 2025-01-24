import { cn } from "@/lib/utils";
import { Beau_Rivage, Montserrat } from "next/font/google";
import Image from "next/image";

const beauRivage = Beau_Rivage({
  weight: "400", // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const data = [
  {
    title: "The Ambitious Go-Getter",
    description:
      "I want to feel like the best version of myself, no matter where I go or what I do",
    image: "/our-customer/ambitious.svg",
  },
  {
    title: "The Empowered Trailblazer",
    description:
      "I want something that feels good and lets me be, while I take care of everyone and everything else",
    image: "/our-customer/enpowered.svg",
  },
  {
    title: "The Fearless Trailblazer",
    description:
      "I’ve grown into who I am, I know what feels right, and I choose authenticity and expression on my own terms",
    image: "/our-customer/fearless.svg",
  },
  {
    title: "The Ageless Muse",
    description:
      "I’ve lived. I know what I want and I choose my comfort and style on my own terms",
    image: "/our-customer/ageless.svg",
  },
];

const OurCustomer = () => {
  return (
    <div className="w-full py-10 md:py-20 lg:py-20 px-5 flex flex-col justify-center items-center gap-10 md:gap-20 lg:gap-20">
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-5xl text-center",
          beauRivage.className
        )}
      >
        Our Customers
      </h1>
      <div className="grid grid-cols-2 md:flex lg:flex justify-center items-center gap-5">
        {data.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className=" h-[244px] md:h-[400px] lg:h-[400px] w-full md:w-[223px] lg:w-[223px] relative group md:hover:w-[466px] lg:hover:w-[466px] transition-all duration-1000">
      <div
        className="absolute h-[244px] md:h-[400px] lg:h-[400px] w-full flex flex-col gap-1 justify-end text-center p-4 md:p-5 lg:p-5  rounded-xl z-[99999] transition-all duration-1000 ease-in-out"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
        }}
      >
        <h2
          className={cn(
            " text-white text-start text-md md:text-lg lg:text-lg  font-semibold translate-y-0 transition-transform ease-in-out pr-12 md:pr-5 lg:pr-5",
            montserrat.className
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-white text-xs md:text-sm lg:text-sm text-start hidden md:group-hover:flex lg:group-hover:flex opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-all group-hover:fade-in-100 md:hover:min-w-[400px] min-w-[400px]",
            montserrat.className
          )}
          style={{
            transitionDuration: "1000ms", // The actual animation duration (1s)
            animationDelay: "1000ms",
          }}
        >
          {description}
        </p>
      </div>
      <Image
        src={image}
        alt={title}
        width={223}
        height={400}
        className={cn(
          " h-[244px] md:h-[400px] lg:h-[400px] w-full rounded-xl shadow-sm border object-cover ",
          title !== "The Fearless Trailblazer" && "object-center"
        )}
      />
    </div>
  );
};

export default OurCustomer;
