import { FiSearch } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import './Navbar.css';

const navItems = [
  {
    Tracker: {
      nav: [
        { name: 'Helltide', link: '/tracker/helltide' },
        { name: 'Legion Events', link: '/tracker/legion-events' },
        { name: 'World Bosses', link: '/tracker/world-bosses' },
      ],
      link: '/tracker/overview',
    },
    Builds: {
      nav: [
        { name: 'Commuinty Builds', link: '/builds/community' },
        { name: 'Featured Builds', link: '/builds/featured' },
        { name: 'Build Planner', link: '/builds/planner' },
      ],
      link: '/builds',
    },
    Database: {
      nav: [
        { name: 'Unique Loot Tables', link: '/database/loot-tables' },
        { name: 'Vampiric Powers', link: '/database/vampiric-powers' },
        { name: 'Endgame Boss Paths', link: '/database/boss-paths' },
        // ... other database items
      ],
      link: '/database',
    },
    Tools: {
      nav: [
        { name: 'Gambling Aspects', link: '/tools/gambling' },
        { name: 'Target Farming Uniques', link: '/tools/farming' },
        { name: 'Nightmare Dungeons', link: '/tools/nightmare-dungeons' },
      ],
      link: '/tools',
    },
    Guides: {
      nav: [
        { name: 'Abattoir of Zir', link: '/guides/abattoir' },
        { name: 'Midwinter Blight', link: '/guides/midwinter' },
        { name: 'Secret Cow Level', link: '/guides/cow-level' },
      ],
      link: '/guides',
    },
    'Tier Lists': {
      nav: [
        { name: 'Unique Dungeons', link: '/tier-lists/dungeons' },
        { name: 'Unique Items', link: '/tier-lists/items' },
        { name: 'Vampiric Powers', link: '/tier-lists/powers' },
      ],
      link: '/tier-lists',
    },
    Map: {},
  },
];

export default function NavItems() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    setIsMediumScreen(window.innerWidth >= 768);
  }, [isMediumScreen]);

  const categories = Object.entries(navItems[0]);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between w-full mx-auto md:mx-4 border border-gray-500 rounded-lg p-2 md:max-w-[350px] mt-2 md:absolute md:top-[-40px] md:left-28">
        <input
          className="bg-transparent text-sm outline-none text-gray-500 w-full"
          placeholder="Try searching for Temerity..."
          type="text"
          name=""
          id=""
        />
        <FiSearch className="text-[#fdfdfd] text-xl" />
      </div>
      <div className="text-gray-300 text-left w-full mx-auto lg:w-full md:flex md:items-center mt-2 md:pt-2">
        {categories.map(([category, data]) => (
          <div key={category} className="navli p-3 relative">
            {data.link ? (
              <Link href={data.link} className="block md:mb-2">
                {category}
              </Link>
            ) : (
              <span className="block md:mb-2">{category}</span>
            )}
            {isMediumScreen && data.nav && data.nav.length > 0 && (
              <div className="hidden md:absolute w-auto bg-[#393E4C] text-gray-300 left-0 top-100 z-50">
                <div className="list-none pl-3 pr-6 border py-2 space-y-1">
                  {data.nav.map((subItem, index) => (
                    <div key={index} className="my-1 z-50 list-none">
                      {subItem.link ? (
                        <Link
                          href={subItem.link}
                          className="block hover:text-gray-100"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <span
                          className="block hover:text-gray-100"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          {subItem.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Login div  */}
      <div className="flex items-center pr-4 ml-auto absolute bottom-0 right-5 md:top-[-50px]">
        <FaDiscord className="bg-[#5864F2] text-[#F2EFED] rounded-full h-7 w-7 p-1" />
        <Link
          className="text-gray-100 text-[.90rem] bg-[#393E4C] px-3 py-1 ml-2 rounded-lg hover:brightness-150"
          href="/"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
