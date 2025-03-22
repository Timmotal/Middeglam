"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import BurgerMenu from './Burger';


export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex  justify-center items-center py-4 text-white bg-transparent w-full ">  

      {/* Mobile Menu */}
      <div className="block md:hidden">
      <BurgerMenu />

      <div className='fixed hidden px-3 mt-[-40px]'>
        <Image src="/middelglamlogo.png" alt="Middeglam Brows Logo" width={120} height={50} />
        </div>
      </div>
      
      <div className='fixed hidden w-1 align-text-top'>free consultation</div>
      {/* Menu */}
      <ul className="md:flex gap-8 my-8 uppercase text-sm hidden">
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">Information</Link></li>
        
        <div className='px-8 mt-[-40px]'>
        <Image src="/middelglamlogo.png" alt="Middeglam Brows Logo" width={150} height={50} />
        </div>
        
        <li><Link href="#">Gallery</Link></li>
        <li><Link href="#">Contact</Link></li>
        <li><Link href="#" className="border px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300">Book Now</Link></li>
      </ul>
    </nav>
  );
}
