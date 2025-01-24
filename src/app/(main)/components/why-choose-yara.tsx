import { cn } from "@/lib/utils";
import { Beau_Rivage, Montserrat } from "next/font/google";
import Image from "next/image";

const beauRivage = Beau_Rivage({
  weight: "400", // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const data = [
  {
    title: "Bright and Spacious Stores",
    description:
      "Step into vibrant, thoughtfully designed stores located in key markets or shop conveniently online.",
    image: "/whyyara/bright_and_spacious_stores.svg",
    colspan: true,
  },
  {
    title: "Wide Assortment",
    description:
      "Explore a wide range of variety to fulfill your needs across all categories",
    image: "/whyyara/wide-assortment.svg",
    colspan: false,
  },
  {
    title: "All-Women Team",
    description:
      "Experience a welcoming atmosphere with women associates who truly understand your needs.",
    image: "/whyyara/all-woman-team.svg",
    colspan: false,
  },
  {
    title: "Touch, Feel & Trust",
    description:
      "Explore products you can see and feel, ensuring a perfect choice every time.",
    image: "/whyyara/touch.svg",
    colspan: false,
  },
  {
    title: "Try & Buy",
    description:
      "No surprises here! Try on your selections before making a decision.",
    image: "/whyyara/try.svg",
    colspan: false,
  },
  {
    title: "Privacy First",
    description: "Your comfort matters—shop with total privacy and confidence.",
    image: "/whyyara/privacy.svg",
    colspan: true,
  },
];

const WhyChooseYara = () => {
  return (
    <div className="w-full py-20 px-5 md:px-56 lg:px-56 bg-[#FFF0F0] flex flex-col gap-8 md:gap-16 lg:gap-16 justify-center items-center">
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-5xl text-center",
          beauRivage.className
        )}
      >
        Why Choose Yara
      </h1>
      <div
        className={cn(
          " flex overflow-y-auto md:grid lg:grid grid-cols-4 gap-5 w-full",
          montserrat.className
        )}
      >
        {data.map((item) => (
          <ImageCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({
  title,
  description,
  image,
  colspan,
}: {
  title: string;
  description: string;
  image: string;
  colspan?: boolean;
}) => {
  return (
    <div
      className={cn(
        "box w-full min-w-[300px] md:min-w-[30px] lg:min-w-[30px] h-[200px] md:h-[300px] lg:h-[300px] rounded-xl zoom-in group",
        colspan ? "col-span-2" : ""
      )}
    >
      <div
        className="absolute min-w-[300px] md:min-w-[30px] lg:min-w-[30px] h-[200px] md:h-[300px] lg:h-[300px] w-full flex flex-col gap-0.5 justify-end text-center p-5  rounded-xl z-[99999] transition-all duration-1000 ease-in-out"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
        }}
      >
        <h2
          className={cn(
            " text-white text-start text-md md:text-lg lg:text-lg font-semibold translate-y-0 duration-1000 ease-in-out transition-all"
            // title === "All-Women Team" && "group-hover:translate-y-[-75px]",
            // title === "Privacy First" && "group-hover:translate-y-[-25px]"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-white text-xs md:text-md lg:text-md text-start md:hidden lg:hidden md:group-hover:flex lg:group-hover:flex md:opacity-0 lg:opacity-0 md:translate-y-5 lg:translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-all group-hover:ease-in-out",
            colspan ? "md:pr-10 lg:pr-10" : ""
          )}
          style={{ transitionDuration: "3000ms" }}
        >
          {description}
        </p>
      </div>
      <Image
        src={image}
        alt="Bright and Spacious Stores"
        width={300}
        height={180}
        className=" w-full min-w-[300px] md:min-w-[30px] lg:min-w-[30px] h-[200px] md:h-[300px] lg:h-[300px] object-center object-cover rounded-xl shadow-sm img"
      />
    </div>
  );
};

export default WhyChooseYara;
