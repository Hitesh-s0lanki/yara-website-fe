import { cn } from "@/lib/utils";
import { Beau_Rivage, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const beauRivage = Beau_Rivage({
  weight: "400", // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Team = () => {
  return (
    <div className=" w-full bg-[#FFF0F0] px-5 md:px-40 lg:px-40  py-20 flex flex-col gap-8 justify-center items-center">
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-5xl text-center",
          beauRivage.className
        )}
      >
        Experience Where it Matters
      </h1>
      <p
        className={cn(
          "text-md md:text-lg lg:text-lg text-center",
          montserrat.className
        )}
      >
        With a collective experience of over 60+ years in Retail and across
      </p>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5",
          montserrat.className
        )}
      >
        <div className="bg-white rounded-xl p-5 flex gap-5">
          <Image
            src={"/geeta.svg"}
            alt="Geeta"
            height={170}
            width={170}
            className="h-[130px] w-[130px] lg:h-[170px] lg:w-[170px] md:h-[170px] md:w-[170px]"
          />
          <div className=" py-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className=" text-lg md:text-xl lg:text-xl font-semibold">
                Geeta Mahadevan
              </h2>
              <p className=" text-sm md:text-lg lg:text-lg">CEO</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Link href={"/"}>
                <Image
                  src={"/team/aditya.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/relience.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/bigbasket.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5  flex gap-5">
          <Image
            src={"/richa.svg"}
            alt="Geeta"
            height={170}
            width={170}
            className="h-[130px] w-[130px] lg:h-[170px] lg:w-[170px] md:h-[170px] md:w-[170px]"
          />
          <div className=" py-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className=" text-lg md:text-xl lg:text-xl  font-semibold">
                Richa Mittal
              </h2>
              <p className=" text-sm md:text-lg lg:text-lg">
                EIR - Merchandising
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Link href={"/"}>
                <Image
                  src={"/team/enamor.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/ss.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/vnh.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Link href={"/"}>
                <Image
                  src={"/team/c.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/shield.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/team/nift.svg"}
                  alt="Aditya"
                  height={35}
                  width={35}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
