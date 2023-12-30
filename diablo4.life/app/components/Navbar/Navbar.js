'use client';

import Image from 'next/image';
import { useState } from 'react';
import NavItems from './NavItems';
import Link from 'next/link';

import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#252630] py-5 md:h-[110px]">
      <div className="container w-[95%] mx-auto flex items-center justify-between flex-wrap md:relative">
        {/* Logo on the left */}
        <li className="text-white list-none">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="DIABOLO4.LIFE"
              className="h-8"
            />
          </Link>
        </li>

        {/* Hamburger icon on the right (visible on mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className="hamburger"></div>
            <div
              className={`hamburger ${isMenuOpen ? 'shrink' : 'expand'}`}
            ></div>
          </button>
        </div>

        {/* NavBar Items  */}
        <div
          className={`md:flex ${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col mt-4 lg:mt-0 w-full`}
        >
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
