import { FiSearch } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export default function NavItems() {
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
        <li className="p-3 md:hover:bg-[#393E4C] relative">
          <a href="" className="block md:mb-2">
            Tracker
          </a>

          <div className="hidden absolute w-[120px] bg-[#393E4C] text-gray-300 left-0 top-100">
            <ul className="list-none pl-3 border py-2 space-y-1">
              <li className="my-1">
                <a href="" className="block hover:text-gray-100">
                  Helltide
                </a>
              </li>
              <li className="my-1">
                <a href="" className="block hover:text-gray-100">
                  Legion Events
                </a>
              </li>
              <li className="my-1">
                <a href="" className="block hover:text-gray-100">
                  World Bosses
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="p-3 md:hover:bg-[#393E4C]">
          <a href="" className="block md:mb-2">
            Builds
          </a>
        </li>
        <li className="p-3 md:hover:bg-[#393E4C]">
          <a href="" className="block md:mb-2">
            Database
          </a>
        </li>
        <li className="p-3 md:hover:bg-[#393E4C]">
          <a href="" className="block md:mb-2">
            Tools
          </a>
        </li>
        <li className="p-3 relative md:hover:bg-[#393E4C]">
          <span className="text-[#952a2a] text-[10px] px-1 bg-transparent absolute top-0 left-10 md:right-0 rounded text-center">
            new
          </span>
          <a href="" className="block md:mb-2">
            Guides
          </a>
        </li>
        <li className="p-3 md:hover:bg-[#393E4C]">
          <a href="" className="block md:mb-2">
            Tier Lists
          </a>
        </li>
        <li className="p-3 md:hover:bg-[#393E4C]">
          <a href="" className="block md:mb-2">
            Map
          </a>
        </li>
        <button className="md:mb-2 text-sm rounded-lg bg-[#952a2a] px-3 py-1 text-gray-200 ml-5 mt-3 md:mt-0 hover:brightness-150">
          Build Planner
        </button>
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
