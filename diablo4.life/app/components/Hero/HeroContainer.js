import Image from 'next/image';
import TrendingCard from './TrendingCard';

export default function HeroContainer() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center">
        <Image
          height={30}
          width={28}
          className="bg-[#252630] p-1 rounded-lg"
          src="/trending.png"
          alt=""
        />
        <h1 className="text-gray-200 text-xl ml-3">Featured News</h1>
      </div>

      <TrendingCard />
    </div>
  );
}
