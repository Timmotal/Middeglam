import React from 'react'
import Link from 'next/link'

import { Josefin_Sans, Big_Shoulders_Stencil_Display, Antic_Didone } from "next/font/google";

// const josefinSans = Josefin_Sans({
//     subsets: ["latin"], 
//     weight: ["300", "400", "600", "700"], // Choose the weights you need
// });

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
});

const bigShoulders = Big_Shoulders_Stencil_Display({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "900"], // Add the weights you need
  display: "swap",
});


const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});




const Hero = () => {
  return (
<div className="  flex flex-col justify-center items-center text-white text-center py-20"
  // style="background-image: url('/middeglam_1.jpg');"
>
<h1 className={`${josefinSans.className} text-4xl md:text-6xl font-light pt-64 md:pt-0`}>
    Wake Up Flawless
</h1>
{/* <h1 className={`${bigShoulders.className} text-4xl md:text-6xl font-normal`}>
    Wake Up Flawless
</h1> */}

<p className={`${bigShoulders.className} font-bold my-4 text-lg uppercase md:text-4xl`}>Microblading &bull; Combo Brows &bull; Ombre Powder Brows</p>
<Link href="#" className="mt-6 px-6 py-3 text-md md:text-3xl bg-[#AB696D] text-white hover:bg-[#c6a9a6] hover:scale-105 transition-all duration-300">
  Book Your Brow Appointment
</Link>
</div>
  )
}

export default Hero

