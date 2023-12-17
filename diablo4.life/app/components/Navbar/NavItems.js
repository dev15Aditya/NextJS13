import { FiSearch } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export default function NavItems() {
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between w-[90%] mx-auto md:mx-4 border border-gray-500 rounded-lg p-2 md:max-w-[300px] mt-2">
        <input
          className="bg-transparent text-sm outline-none text-gray-500"
          placeholder="Try searching for Temerity..."
          type="text"
          name=""
          id=""
        />
        <FiSearch className="text-[#fdfdfd] text-xl" />
      </div>
      <ul className="text-[#fdfdfd] text-left w-[90%] mx-auto lg:w-full md:flex md:items-center mt-2">
        <li className="p-3">
          <a href="">Tracker</a>
        </li>
        <li className="p-3">
          <a href="">Builds</a>
        </li>
        <li className="p-3">
          <a href="">Database</a>
        </li>
        <li className="p-3">
          <a href="">Tools</a>
        </li>
        <li className="p-3 relative">
          <span className="text-[#952a2a] text-[10px] px-1 bg-[#252630] absolute top-0 left-10 md:right-0 rounded text-center">
            new
          </span>
          <a href="">Guides</a>
        </li>
        <li className="p-3">
          <a href="">Tier Lists</a>
        </li>
        <li className="p-3">
          <a href="">Map</a>
        </li>
        <button className="text-sm rounded-lg bg-[#952a2a] px-3 py-1 text-gray-200 ml-5 mt-3 md:mt-0">
          Build Planner
        </button>
      </ul>

      {/* Login div  */}
      <div className="flex items-center pr-4 ml-auto absolute bottom-0 right-5 md:top-[-50px]">
        <FaDiscord className="bg-[#5864F2] text-[#F2EFED] rounded-full h-7 w-7 p-1" />
        <Link className="text-[#fdfdfd] underline ml-2" href="/">
          Login
        </Link>
      </div>
    </div>
  );
}
