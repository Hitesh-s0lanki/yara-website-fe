import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className={cn(
        " w-full bg-[#343434] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-20 lg:gap-20 px-5 md:px-56 lg:px-56 py-10",
        font.className
      )}
    >
      <div className=" space-y-5 md:space-y-10 lg:space-y-10">
        <h1 className="text-white text-lg md:text-2xl lg:text-2xl font-semibold">
          IBEC Consulting <br /> Private Limited
        </h1>
        <div className="space-y-1">
          <h2 className="text-white text-lg md:text-2xl lg:text-2xl font-semibold">
            Registered Office
          </h2>
          <p className="text-white text-md">
            C-539, SFS Flats, Sheikh Sarai Phase I, South <br /> Delhi, New
            Delhi-110017, India
          </p>
        </div>
      </div>
      <div className="space-y-5 w-full flex justify-end flex-col items-end">
        <div className="space-y-5 md:space-y-10 lg:space-y-10">
          <div className="space-y-1">
            <h2 className="text-white text-lg md:text-2xl lg:text-2xl font-semibold">
              Corporate Office
            </h2>
            <p className="text-white text-md">
              6 Rushabh Complex, Dalia Industrial Estate, Off <br /> New Link
              Road, Andheri West, Mumbai 400053
            </p>
          </div>
          <div className="space-y-1">
            <h2 className="text-white text-lg md:text-2xl lg:text-2xl font-semibold">
              CIN
            </h2>
            <p className="text-white text-md">U74140DL2020PTC362323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
