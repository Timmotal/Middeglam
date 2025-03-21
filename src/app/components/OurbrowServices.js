import Image from "next/image";
import Link from "next/link";

export default function OurbrowServices() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-fulll bg-white shadow-lg py-10 md:px-8 flex flex-col md:flex-row ">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center pb-8 md:pb-0 px-4 w-full md:w-1/2">
        <div className="">
          <h2 className="text-3xl md:text-4xl  font-light uppercase text-gray-700">
            Our Brow Services
          </h2>
          <div className=" w-full border-b-[1.5px] border-[#C09A92] my-4"></div>
          </div>
          <p className="text-gray-600 leading-8">
            Lisa has developed her own technique by understanding each client’s
            desired result, as each face is unique as a fingerprint. She works
            one-on-one with each client, analyzing each arch, shape, and line,
            while taking the contour, shape, and color into consideration,
            hence creating the perfect brow.
          </p>
          <p className="text-gray-600 leading-8 mt-4">
            Services include microblading, ombre powder brows, and combo brows/microshading.
            Lisa also offers brow shaping (waxing, tweezing) for men, women, and youths.
          </p>
          <button className="mt-6 px-6 py-3 text-lg bg-[#AB696D] text-white hover:bg-[#c6a9a6] hover:scale-105 transition-all duration-300 cursor-pointer">
            Book Your Appointment
          </button>

          {/* <Link href="#" className="mt-6 px-6 py-3 text-lg bg-[#dbbfbb] text-[#2B2B2B] hover:bg-[#c6a9a6] hover:scale-105 transition-all duration-300">
  Book Your Brow Appointment
</Link> */}
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src="/our_brow_services.png" // Add an image inside /public folder
            alt="Brow services"
            width={400}
            height={400}
            className="w-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
