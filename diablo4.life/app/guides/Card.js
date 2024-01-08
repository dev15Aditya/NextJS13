import Image from 'next/image';
import Link from 'next/link';

export default function Card({ data }) {
  return (
    <Link
      href={`/guides/articles/${data.link}`}
      className="block bg-transparent"
    >
      <article className="overflow-hidden group-hover:brightness-125">
        <div className="relative h-[120px] md:h-[200px]">
          <Image
            layout="fill"
            className="rounded-lg hover:brightness-150 transition duration-300 ease-in-out"
            src={data.url}
            alt={data.title}
          />
          <p className="text-gray-200 absolute bottom-2 left-2 text-sm bg-slate-600 rounded px-1">
            {data.title}
          </p>
        </div>
        <div className="flex flex-col justify-between py-4 leading-normal">
          <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white overflow-ellipsis overflow-hidden">
            {data.heading}
          </h5>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            {data.editDetail}
          </p>
        </div>
      </article>
    </Link>
  );
}
