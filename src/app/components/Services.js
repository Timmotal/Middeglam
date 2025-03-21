import Link from "next/link";
import { Lovers_Quarrel, Antic_Didone } from "next/font/google";





const loversQuarrel = Lovers_Quarrel({
    weight: "400",
    subsets: ["latin"],
  });
  const anticDidone = Antic_Didone({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
  });

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#FAF4F2]">
      <h1 className={` ${loversQuarrel.className} text-6xl md:text-8xl font-serif text-[#C09A92] `}>
        hello there gorgeous
      </h1>
      <h2 className={` ${anticDidone.className} text-3xl text-[#7D6B68] my-8 md:mt-4`}>
        BROW STUDIO LOCATED IN LAGOS
      </h2>
      <p className="text-[#7D6B68] max-w-2xl">
        Lisa Tran has combined her artistic talent and passion for beauty to
        create a unique microblading approach for natural brows. Working with
        individuals of all ages, shapes, and colours, Lisa helps her clients
        look and feel confident in their brows using innovative practices and
        superior products in a clean and safe work environment.
      </p>
      <Link
        href="#"
        className="mt-6 px-6 py-3 bg-[#C09A92] text-white text-lg cursor-pointer"
      >
        VIEW BROW SERVICES
      </Link>
    </div>
  );
}
