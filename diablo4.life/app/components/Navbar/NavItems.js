import { FiSearch } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import './Navbar.css';

const navItems = [
  {
    Tracker: ['Helltide', 'Legion Events', 'World Bosses'],
    Builds: ['Commuinty Builds', 'Featured Builds', 'build Planner'],
    Database: [
      'Unique Loot Tables',
      'Vampiric Powers',
      'Endgame Boss Paths',
      'Skills',
      'Aspects',
      'Uniques',
      'Paragon Glyphs',
      'Gear Affixes',
      'Hidden Rares',
    ],
    Tools: ['Gambling Aspects', 'Target Farming Uniques', 'Nightmare Dungeons'],
    Guides: ['Abattoir of Zir', 'Midwinter Blight', 'Secret Cow Level'],
    'Tier Lists': ['Unique Dungeons', 'Unique Items', 'Vampiric Powers'],
    Map: [],
  },
];

export default function NavItems() {
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

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
      <ul className="text-gray-300 text-left w-full mx-auto lg:w-full md:flex md:items-center mt-2 md:pt-2">
        {Object.entries(navItems[0]).map(([category, subItems]) => (
          <li key={category} className="p-3 relative">
            <Link href="/tracker" className="block md:mb-2">
              {category}
            </Link>
            {isMediumScreen && subItems.length > 0 && (
              <div className="hidden md:absolute w-auto bg-[#393E4C] text-gray-300 left-0 top-100 z-50">
                <ul className="list-none pl-3 pr-6 border py-2 space-y-1">
                  {subItems.map((subItem, index) => (
                    <li key={index} className="my-1 z-50 list-none">
                      <Link
                        href="/"
                        className="block hover:text-gray-100"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
        {/* <button className="md:mb-2 text-sm rounded-lg bg-[#952a2a] px-3 py-1 text-gray-200 ml-5 mt-3 md:mt-0 hover:brightness-150">
          Build Planner
        </button> */}
      </ul>

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
