import Link from 'next/link';

export default function Card({ path, name }) {
  return (
    <div className="w-[24%]">
      <Link
        href={path}
        className="block text-center text-gray-200 text-[10px] md:text-lg font-bold h-[100%] p-4 bg-[#252630] rounded-tl-2xl rounded-br-2xl  ml-2 md:py-[2rem]"
      >
        {name}
      </Link>
    </div>
  );
}
