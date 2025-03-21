import React from 'react'
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
});


const VideoSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/video.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-6 pt-56 md:pt-0 z-10">
        <h2 className={` ${josefinSans.className} text-2xl md:text-5xl max-w-2xl font-light leading-10 md:leading-18 uppercase tracking-widest`}>
          Book Your Brow Appointment Today
        </h2>
        <button className="mt-6 bg-[#C09A92] text-white font-semibold py-3 px-8 md:px-32 transition cursor-pointer">
          Check Availability
        </button>
      </div>
    </div>
  )
}

export default VideoSection