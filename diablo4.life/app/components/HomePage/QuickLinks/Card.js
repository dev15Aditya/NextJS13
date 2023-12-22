import Link from 'next/link';

export default function Card({ path, name }) {
  return (
    <div className="w-[25%] my-3">
      <Link
        href={path}
        className="block text-gray-200 text-[1rem] md:text-lg font-bold h-[100%] px-[2rem] py-[1rem] bg-[#252630] rounded-tl-2xl rounded-br-2xl  ml-2 md:py-[2rem] text-center hover:brightness-150"
      >
        {name}
      </Link>
    </div>
  );
}
