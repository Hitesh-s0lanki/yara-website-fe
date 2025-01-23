import { cn } from "@/lib/utils";
import { Beau_Rivage, Montserrat } from "next/font/google";

const beauRivage = Beau_Rivage({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const values = [
  {
    title: "Aspiration",
    description: "Inspiring women to embrace their individuality",
  },
  {
    title: "Affordability",
    description: "Quality products at accessible prices",
  },
  {
    title: "Access",
    description: "Bridging gaps in underserved markets",
  },
  {
    title: "Trust",
    description: "Building a brand synonymous with confidence and care",
  },
];

const MissionSection = () => {
  return (
    <div className="w-full  py-20 px-5 md:px-40 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-20">
      <div className="w-full">
        <h2
          className={cn(
            " text-4xl md:text-5xl lg:text-5xl text-center md:text-start lg:text-start",
            beauRivage.className
          )}
        >
          Our Mission
        </h2>
        <ul
          className={cn(
            "text-md lg:text-lg md:text-lg flex flex-col gap-5 md:gap-8 lg:gap-8 list-disc py-8 px-5",
            montserrat.className
          )}
        >
          <li>
            Yara aims to be the ultimate destination for women, by women,
            offering a curated blend of lingerie, beauty, personal care, fem
            hygiene, fashion jewelry, and services.{" "}
          </li>
          <li>
            Driven by the aspirations, affordability, and access needs of women
            in Tier 2 and smaller towns, Yara fosters a vibrant community where
            women connect, share, and discover what’s good and new.{" "}
          </li>
          <li>
            With an untapped market full of potential, Yara is dedicated to
            empowering women and expanding possibilities.
          </li>
        </ul>
      </div>
      <div className="w-full">
        <h2
          className={cn(
            " text-4xl md:text-5xl lg:text-5xl text-center md:text-start lg:text-start",
            beauRivage.className
          )}
        >
          Our Values
        </h2>
        <ul
          className={cn(
            "text-lg flex flex-col gap-4 py-5 px-2",
            montserrat.className
          )}
        >
          {values.map((value) => (
            <CardView
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const CardView = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="shadow-sm border border-[#FFDFE4] shadow-[#FFDFE4] p-5 rounded-xl">
      <h3 className="text-lg font-semibold text-center md:text-start lg:text-start">
        {title}
      </h3>
      <p className="text-sm text-center md:text-start lg:text-start">
        {description}
      </p>
    </div>
  );
};

export default MissionSection;
