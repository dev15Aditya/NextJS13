import TextEditor from './TextEditor';
import Link from 'next/link';
import Image from 'next/image';
import { FiMessageSquare } from 'react-icons/fi';

export default function Footer() {
  return (
    <div>
      {/* Comments  */}
      <div className="p-6">
        <h1 className="text-gray-200 text-xl">Comments</h1>
        <div className="flex items-center">
          <div className="h-[30px] w-[30px] bg-[#44495A] rounded-full"></div>
          <span className="text-[12px] text-gray-300 mx-2">Guest</span>
          <span className="text-[10px] text-gray-400">now</span>
        </div>

        <button
          type="button"
          class="text-[#eaeaea] bg-[#44495a] hover:brightness-150 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          <span className="mr-2">
            <FiMessageSquare />
          </span>
          Show Comments
        </button>
      </div>

      {/* About Diabolo  */}
      <div className="bg-[#252630] p-6 md:flex md:justify-between">
        <div className="text-gray-200 text-[16px] w-full">
          <Image height={200} width={200} src="/logo.png" alt="logo" />
          <p>
            <br />
            <span className="font-bold">Diablo4.life</span> is not affiliated
            with or endorsed by Activision Blizzard, Inc.
          </p>
          <br />
          <p>contact@diablo4.life</p>
          <br />
          <p>© December 2023 Diablo4Life. All rights reserved.</p>
          <br />
        </div>
        <div className="flex items-center justify-between w-full">
          {/* LINKS  */}
          <div className="w-full">
            <h1 className="text-xl text-gray-200 mb-4">Links</h1>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Contact
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Tools
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Content Creators
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Build Planner
            </Link>
          </div>

          {/* OFFICIAL  */}
          <div className="w-full">
            <h1 className="text-xl text-gray-200 mb-4">Official</h1>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Discord
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Reddit
            </Link>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              Blizzard Forum
            </Link>
            <h1 className="text-xl text-gray-200 my-5" href="/">
              Others Sites by Me
            </h1>
            <Link
              className="block text-lg text-gray-400 hover:underline hover:text-gray-200 my-2"
              href="/"
            >
              D2Runewizard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
