import Image from 'next/image';

export default function Card({
  url,
  title,
  heading,
  editDetail,
  updateDetails,
}) {
  return (
    <a href="#" className="block bg-transparent m-2 w-[350px]">
      <div className="relative  h-[250px] w-[350px]">
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-lg hover:brightness-150 transition duration-300 ease-in-out"
          src={url}
          alt=""
        />
        <p className="text-gray-200 absolute bottom-2 left-2 text-sm bg-slate-600 rounded px-1">
          {title}
        </p>
      </div>
      <div className="flex flex-col justify-between py-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white overflow-ellipsis overflow-hidden">
          {heading}
        </h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {editDetail}
        </p>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {updateDetails}
        </p>
      </div>
    </a>
  );
}
