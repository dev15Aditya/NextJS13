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
      <h1 className="text-[24px] text-[#fdfdfd]">Diablo 4 Event Trackers</h1>
      <ul className="flex gap-5 my-5">
        <li
          className={`${styles} ${
            activeLink === 'overview'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/builds/community-builds"
            onClick={() => handleClick('overview')}
          >
            Community Builds
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
            href="/builds/featured-builds"
            onClick={() => handleClick('world-bosses')}
          >
            Featured Builds
          </Link>
        </li>
        <li
          className={`${styles} ${
            activeLink === 'zone-events'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link href="/builds/gear" onClick={() => handleClick('zone-events')}>
            Gear
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
            href="/builds/build-planner"
            onClick={() => handleClick('helltides')}
          >
            Build Planner
          </Link>
        </li>
      </ul>
      <hr className="text-[#252630] bg-[#252630] border-none h-[2px] mt-2" />
    </div>
  );
}
