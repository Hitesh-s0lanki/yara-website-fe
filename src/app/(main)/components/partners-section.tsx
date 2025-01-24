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

const PartnerSection = () => {
  return (
    <div className=" w-full px-5 md:px-40 lg:px-40 py-10 md:py-20 lg:py-20 grid gap-10 md:gap-5 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className=" w-full flex flex-col justify-center items-center gap-5">
        <h2
          className={cn(
            " text-4xl md:text-5xl lg:text-5xl text-center",
            beauRivage.className
          )}
        >
          {"We'd Love to Hear From You!"}
        </h2>
        <p
          className={cn(
            "text-md md:text-lg lg:text-lg text-center",
            montserrat.className
          )}
        >
          {"If you're interested in partnering with us, we're just a"}{" "}
          <br className="hidden md:flex lg:flex" /> message away.
        </p>
      </div>
      <div className="p-8 border rounded-xl shadow-sm border-[#FFDFE4] shadow-[#FFDFE4]">
        <Image src="/partners.svg" alt="Partners" height={50} width={50} />
        <h2
          className={cn(
            " text-xl md:text-2xl lg:text-2xl font-semibold mt-2",
            montserrat.className
          )}
        >
          Partners/Customers
        </h2>
        <p
          className={cn(" text-sm lg:text-md md:text-md", montserrat.className)}
        >
          {"Let’s create something amazing together!"}
          <br /> Get in touch with{" "}
        </p>
        <Link
          className={cn(
            " text-lg font-semibold mt-1 text-[#0077E5]",
            montserrat.className
          )}
          href="mailto:geetha@shopyara.in"
          target="_blank"
        >
          geetha@shopyara.in
        </Link>
      </div>
    </div>
  );
};

export default PartnerSection;
