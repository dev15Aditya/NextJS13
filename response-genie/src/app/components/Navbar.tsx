'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SigninButton from './SigninButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:border-b border-gray-300 dark:border-gray-700 lg:px-28 backdrop-blur-sm bg-[#030001]/30">
      <div className="flex w-full items-center justify-between px-4 py-2 flex-wrap">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/icon.png"
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              alt="MailGienie Logo"
              width={72}
              height={16}
              priority
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              MailGienie
            </span>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden hover:backdrop-blur-sm"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col mt-5 lg:mt-0 lg:flex-row lg:items-center lg:space-x-5 lg:ml-auto">
            <li>
              <Link
                href="/pages/feature"
                className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                aria-current="page"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                Support
              </Link>
            </li>
            <li>
              {/* <Link
                href="/pages/login"
                className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                Login
              </Link> */}
              <SigninButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
