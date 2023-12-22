import Image from 'next/image';

export default function TrendingCard() {
  return (
    <div className="md:flex">
      {/* Trending Item  */}
      <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 md:grid-rows-3 md:grid-cols-1 md:w-full md:h-[400px] my-2 md:mr-2">
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
      <div className="md:w-[69%]">
        <div className="">
          {/* side Card 1 */}
          <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 my-2 md:mx-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[126px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
                src="https://cdn.sanity.io/images/p9yc0a85/production/72a49f866587df5e32f7c3b62fa5241b39d6c32e-1574x816.png"
                alt=""
              />
            </div>
            <div className="pl-4 flex flex-col justify-center gap-1">
              <div className="text-[#fdfdfd] text-[1rem] ">
                Significantly Reduced Cost for Bloodforged Sigils
              </div>
              <div className="text-[#9b9b9b] text-[.75rem]">2 weeks ago</div>
            </div>
          </div>

          {/* side Card 2 */}
          <div className="bg-[#252630] grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 my-2 md:mx-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[126px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
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
          <div className="hidden bg-[#252630] md:grid grid-cols-[minmax(100px,2fr),3fr] rounded-md overflow-hidden cursor-pointer hover:brightness-125 my-2 md:mx-2">
            <div className="relative">
              <Image
                width={200}
                height={100}
                className="h-[126px] md:w-[600px] object-cover object-center transition-all duration-300 ease-out max-h-[200px]"
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
    </div>
  );
}
