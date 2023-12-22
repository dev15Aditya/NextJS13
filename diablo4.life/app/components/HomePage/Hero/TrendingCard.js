import Image from 'next/image';
import user from './user.json';
import User from './User';

export default function TrendingCard() {
  return (
    <div className="md:flex">
      {/* Trending Item  */}
      <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 md:grid-rows-3 md:grid-cols-1 md:w-full md:h-[400px] m-2">
        <div className="relative">
          <Image
            width={200}
            height={100}
            className="h-[150px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
            src="https://cdn.sanity.io/images/p9yc0a85/production/4cd09e9ff57419c672443fc9756a92159f2f9fab-1574x816.png"
            alt=""
          />
        </div>
        <div className="pl-4 md:px-4 md:py-[7rem] flex flex-col justify-center gap-2">
          <div className="text-[#fdfdfd] text-[1rem] md:text-[1.75rem]">
            Significantly Reduced Cost for Bloodforged Sigils
          </div>
          <div className="text-[#9b9b9b] text-[.75rem]">2 weeks ago</div>
        </div>
      </div>
      {/* Side Card  */}
      <div className="md:w-[60%]">
        <div className="">
          {/* side Card 1 */}
          <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 m-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[150px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
                src="https://cdn.sanity.io/images/p9yc0a85/production/72a49f866587df5e32f7c3b62fa5241b39d6c32e-1574x816.png"
                alt=""
              />
            </div>
            <div className="pl-4 flex flex-col justify-center gap-2">
              <div className="text-[#fdfdfd] text-[1rem] ">
                Significantly Reduced Cost for Bloodforged Sigils
              </div>
              <div className="text-[#9b9b9b] text-[.75rem]">2 weeks ago</div>
            </div>
          </div>

          {/* side Card 2 */}
          <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 m-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[150px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
                src="https://cdn.sanity.io/images/p9yc0a85/production/8c789dc35ac6f461f1ac94a1f8478719122cd7d9-1574x816.png"
                alt=""
              />
            </div>
            <div className="pl-4 flex flex-col justify-center gap-2">
              <div className="text-[#fdfdfd] text-[1rem]">
                Significantly Reduced Cost for Bloodforged Sigils
              </div>
              <div className="text-[#9b9b9b] text-[.75rem]">2 weeks ago</div>
            </div>
          </div>

          {/* side Card 3 */}
          <div className="hidden bg-[#252630] md:grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 m-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[150px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
                src="https://cdn.sanity.io/images/p9yc0a85/production/f08f3fb3017fbedf769438c63feb9c4acabf4da8-1574x816.png"
                alt=""
              />
            </div>
            <div className="pl-4 flex flex-col justify-center gap-2">
              <div className="text-[#fdfdfd] text-[1rem]">
                Significantly Reduced Cost for Bloodforged Sigils
              </div>
              <div className="text-[#9b9b9b] text-[.75rem]">2 weeks ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Online  */}
      <div className="hidden md:block w-[35%]">
        {/* Timer 1 */}
        <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between">
          <p>World Boss</p>
          <p>01: 21 : 44</p>
          <span className="absolute top-[-2px] right-5 text-[8px]">
            starts in
          </span>
        </div>

        {/* Timer 2 */}
        <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between my-2">
          <p>World Boss</p>
          <p>01: 21 : 44</p>
          <span className="absolute top-[-2px] right-5 text-[8px]">
            starts in
          </span>
        </div>

        {/* Timer 3 */}
        <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between">
          <p>World Boss</p>
          <p>01: 21 : 44</p>
          <span className="absolute top-[-2px] right-5 text-[8px]">
            starts in
          </span>
        </div>
        <p className="text-gray-200 text-lg mb-3">Online</p>
        {user.map((user) => (
          <User key={user.id} user={user.user} />
        ))}
      </div>
    </div>
  );
}
