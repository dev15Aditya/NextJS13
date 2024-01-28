'use client';
import Link from 'next/link';
import { useState } from 'react';

const styles =
  'text-[#fdfdfd] brightness-75 hover:brightness-100 active:brightness-100 text-[16px]';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div>
      <h1 className="text-[24px] text-[#fdfdfd]">Diablo 4 Tools</h1>
      <ul className="flex gap-3 md:gap-10 my-5 overflow-scroll md:overflow-hidden">
        <li
          className={`${styles} ${
            activeLink === 'overview'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/tools/gambling-aspects"
            onClick={() => handleClick('overview')}
            className="whitespace-nowrap"
          >
            Gambling Aspects
          </Link>
        </li>
        <li
          className={`${styles} ${
            activeLink === 'world-bosses'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/tools/unique-target-farming"
            onClick={() => handleClick('world-bosses')}
            className="whitespace-nowrap"
          >
            Unique Target Farming
          </Link>
        </li>
        <li
          className={`${styles} ${
            activeLink === 'zone-events'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/tools/glyph-xp-calculator"
            onClick={() => handleClick('zone-events')}
            className="whitespace-nowrap"
          >
            Glyph XP Calculator
          </Link>
        </li>
        <li
          className={`${styles} ${
            activeLink === 'helltides'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/tools/nightmare-dungeons"
            onClick={() => handleClick('helltides')}
            className="whitespace-nowrap"
          >
            Nightmare Dungeons
          </Link>
        </li>
      </ul>
      <hr className="text-[#252630] bg-[#252630] border-none h-[2px] mt-2" />
    </div>
  );
}
