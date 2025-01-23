import { cn } from "@/lib/utils";
import { Arapey } from "next/font/google";
import Image from "next/image";

const arapey = Arapey({
  weight: "400", // Adjust if more weights are available
  subsets: ["latin"], // Specify subsets if needed
});

const QuoteSection = () => {
  return (
    <div
      className={cn(
        "w-full bg-[#FFF0F0] p-5 md:p-10 lg:p-10 flex flex-col gap-4 justify-center items-center",
        arapey.className
      )}
    >
      <Image src={"/quote.svg"} alt="quote" height={30} width={30} />
      <h3 className=" text-xl md:text-2xl lg:text-2xl text-center">
        To satisfy not only her needs but also her desires for betterment by
        creating a women-centric space for <br /> unfiltered expression, choice,
        and empowerment.
      </h3>
    </div>
  );
};

export default QuoteSection;
