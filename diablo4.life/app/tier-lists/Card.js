import Image from 'next/image';
import Link from 'next/link';

export default function TierCard({ url, title, description, time, link }) {
  return (
    <Link href={`/tier-lists/${link}`} className="block group bg-transparent">
      <article className="overflow-hidden group-hover:brightness-125">
        <div className="relative h-[120px] md:h-[200px]">
          <Image
            alt={title}
            layout="fill"
            className="absolute rounded-lg inset-0 w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105"
            src={url}
          />
        </div>
        <div className="py-3 flex flex-col gap-0.5">
          <h1 className="text-white text-lg overflow-hidden line-clamp-3">
            {title}
          </h1>
          <div className="flex gap-0.5 text-xs">
            <span className="text-gray-600">{description}</span>
          </div>
          <div className="text-xs text-gray-600">{time}</div>
        </div>
      </article>
    </Link>
  );
}
