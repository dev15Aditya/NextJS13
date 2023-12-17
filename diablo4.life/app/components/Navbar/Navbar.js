'use client';

import Image from 'next/image';
import { useState } from 'react';
import NavItems from './NavItems';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#252630] p-4 md:h-[100px]">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo on the left */}
        <div className="text-white">
          <Image src="" alt="DIABOLO4.LIFE" className="h-8" />
        </div>

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
          className={`lg:flex ${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col mt-4 lg:mt-0 w-full md:fixed md:pt-8`}
        >
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
