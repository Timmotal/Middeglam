import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const staticImages = [
    "/middeglam_1.jpg",
    "/middeglam_2.jpg",
    "/middeglam_3.jpg",
    "/middeglam_4.jpg",
    "/middeglam_5.jpg",
    "/middeglam_6.jpg",
    "/middeglam_7.jpg",
    "/middeglam_8.jpg",
  ];

export default function Footer() {
  return (
    <footer className="bg-white py-12 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-evenly md:items-start ">
        {/* Left: Navigation */}
        <div className="mb-8 md:mb-0 text-center">
          <h3 className="text-[#AB696D] text-xl uppercase font-semibold tracking-wider">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700 ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/policies">Policies</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/care">Before & After Care</Link></li>
          </ul>
          <button className="cursor-pointer mt-6 bg-[#AB696D] text-white hover:bg-[#c6a9a6] hover:scale-105 transition-all duration-300 duration-300 font-semibold py-3 px-6 transition">
            Book Appointment
          </button>
        </div>

        {/* Center: Logo & Location */}
        <div className="flex flex-col items-center">
        <div className="inline-block max-w-[120px] w-full h-auto">
          <Image 
            src="/middelglamlogo_black.png" 
            alt="Middeglam Brows" 
            width={120}
          height={40}
            // className=""
            // layout="fill"
            // width={120} height={80} 
          />
          </div>
          <p className="mt-2 text-gray-700 text-sm uppercase tracking-wide">
            Based in Lagos
          </p>
        </div>

        {/* Right: Location & Hours */}
        <div className="text-center">
          <h3 className="text-[#AB696D] text-xl uppercase font-semibold tracking-wider">
            Location
          </h3>
          <p className="mt-2 text-gray-700">553, opposite Wema bank </p>
          <p className="text-gray-700">Abule Egba, Lagos</p>

          <h3 className="text-[#AB696D] text-xl uppercase font-semibold tracking-wider mt-6">
            Hours
          </h3>
          <p className="text-gray-700">Tuesday-Saturday: 9am-5pm</p>
          <p className="text-gray-700">Sunday: CLOSED</p>
          <p className="text-gray-700">Monday: CLOSED</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebookF} className="text-[#AB696D] w-6 h-6 hover:text-[#C09A92] text-3xl transition-transform duration-300  hover:scale-110" />
        </Link>
        <Link href="https://instagram.com">
        <FontAwesomeIcon icon={faInstagram} className="text-[#AB696D] w-6 h-6 hover:text-[#C09A92] text-3xl transition-transform duration-300  hover:scale-110" />
        </Link>
        <Link href="mailto:info@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="text-[#AB696D] w-6 h-6 hover:text-[#C09A92] text-3xl transition-transform duration-300  hover:scale-110" />
         </Link>
      </div>

      <div>
      <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-[#C09A92] text-white px-6 py-2 text-lg font-semibold cursor-pointer">
            @MIDDE GLAM BROWS
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {staticImages.map((src, index) => (
            <div key={index} className="relative w-full h-48">
              <Image
                src={src}
                alt="Brow Image"
                layout="fill"
                objectFit="cover"
                className=" hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-4">
        © COPYRIGHT {new Date().getFullYear()} MIDDEGLAM BROWS | ALL RIGHTS RESERVED
      </p>
    </section>
      </div>
    </footer>
  );
}
