import Image from "next/image";
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


export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-pink-50 shadow-lg  mt-10">
      {/* Left - Text Section */}
      <div className="flex-1 text-center md:text-center p-6">
        <h2 className={`${loversQuarrel.className} text-6xl md:text-7xl text-[#C09A92]`}>about Middeglam</h2>
        <h3 className={` ${anticDidone.className} text-2xl text-gray-700 uppercase font-semibold tracking-wide my-4`}>
          Owner + Brow Expert
        </h3>
        <p className="text-gray-600 my-10">
          Lisa is an experienced cosmetic tattoo artist and an arch enthusiast.
          She’s one of Winnipeg’s leading brow artists. With years of experience
          in the industry, she understands the fundamentals in creating a perfect
          brow for each individual.
        </p>
        <button className=" uppercase bg-[#C09A92] text-white py-3 px-6 cursor-pointer">
          Learn More About Me
        </button>
      </div>

      {/* Right - Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/about.png" // Place an image inside public folder
          alt="Lisa working"
          width={450}
          height={300}
          className=" shadow-lg"
        />
      </div>
    </div>
  );
}
