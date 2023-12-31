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
      <ul className="flex gap-3 md:gap-5 my-5">
        <li
          className={`${styles} ${
            activeLink === 'overview'
              ? 'border-b-2 border-red-500 brightness-100'
              : ''
          }`}
        >
          <Link
            href="/tracker/overview"
            onClick={() => handleClick('overview')}
          >
            overview
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
            href="/tracker/world-bosses"
            onClick={() => handleClick('world-bosses')}
          >
            world bosses
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
            href="/tracker/zone-events"
            onClick={() => handleClick('zone-events')}
          >
            zone events
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
            href="/tracker/helltides"
            onClick={() => handleClick('helltides')}
          >
            helltides
          </Link>
        </li>
      </ul>
      <hr className="text-[#252630] bg-[#252630] border-none h-[2px] mt-2" />
    </div>
  );
}
