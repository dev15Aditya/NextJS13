import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className="bg-[#252630] text-center text-[#fdfdfd] p-2 rounded-md">
        Updated for Season 2!
      </div>
      <h1 className="text-[1.5em] text-[#fdfdfd] font-[400] my-3">
        What Unique are you farming?
      </h1>
      <div className="text-[#bcbcbc] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="my-4 font-[300]">
          <h1 className="text-[1em]">Select an Aspect</h1>
          <p className="text-sm mt-2 mb-1">Search on name or description</p>
          <input
            placeholder="e.g. charged"
            className="bg-[#252630] rounded-md text-sm pl-3 py-2"
          />
        </div>

        <div className="my-4">
          <p className="text-[#bcbcbc] text-[1em]">Filter on Class</p>
          <div className="flex gap-5 mt-3 text-[#bcbcbc]">
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarbarian.ac87de19.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">barbarian</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdruid.6cad31fa.png&w=64&q=75"
                alt=""
              />
              <p className="text-[8px]">druid</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnecromancer.f846fdbf.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">necro</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frogue.a7e3d2be.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">rogue</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsorcerer.5cf2b6cc.png&w=64&q=75"
                alt=""
              />
              <p className="text-[8px]">sorcerer</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-[1.3em] text-[#fdfdfd] font-[400] my-3 pt-5">
        Best Monsters, Dungeons, and Bosses to Farm
      </h1>

      <div className="bg-[#CB4848] text-center text-[#fdfdfd] p-2 rounded-md my-3">
        select a unique first
      </div>

      <p className="text-[1em] my-3 text-[#bcbcbc]">
        Big thanks to <span className="text-[#fdfdfd]">Sairaph</span> (discord)
        for sharing his extensive{' '}
        <span className="text-[#fdfdfd] underline">testing data</span>.
      </p>

      <h1 className="text-[1.5em] text-[#fdfdfd] font-[400] my-4 pt-5">
        Watch GGM covering the tool{' '}
      </h1>

      <p className="text-[1em] text-[#bcbcbc]">
        Shout-out to Ginger Gaming Mentor for coming up with this great idea!
        Check out his video below.
      </p>
    </div>
  );
}
