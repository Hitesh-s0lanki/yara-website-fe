import Image from "next/image";
import { Beau_Rivage, Lato } from "next/font/google";
import { cn } from "@/lib/utils";

const beauRivage = Beau_Rivage({
  weight: "400", // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const lato = Lato({
  weight: ["700"], // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const Hero = () => {
  return (
    <div className="hero h-screen w-full flex flex-col items-center justify-center bg-[url(/background.svg)]  bg-cover bg-center gap-2">
      <Image src="/logo.svg" alt="logo" height={300} width={300} />
      <h1
        className={cn(
          " text-4xl md:text-6xl lg:text-6xl",
          beauRivage.className
        )}
      >
        {"It’s a Journey of Discovery"}
      </h1>
      <h2
        className={cn(
          "px-10 text-md lg:px-0 md:px-0 text-center",
          lato.className
        )}
      >
        Unveiling a world where every woman feels seen heard and celebrated
      </h2>
    </div>
  );
};

export default Hero;
