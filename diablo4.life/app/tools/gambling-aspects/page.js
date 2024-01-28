import Image from 'next/image';

export default function Page() {
  return (
    <div className="mt-4">
      <div>
        <h1 className="text-[#fdfdfd] text-[1.5em] font-[400]">
          What Aspect are you gambling for?
        </h1>
        <p className="text-[#bcbcbc] text-[1em]">
          Get the most out of your{' '}
          <span className="text-[#64a1b9]">Murmuring Obols</span> . Identify
          which item you should target at{' '}
          <span className="border-b-[1px] border-dotted">
            The Purveyor of Curiosities
          </span>{' '}
          to get the best possible odds at getting the legendary aspect you are
          looking for.
        </p>
      </div>

      <div className="text-[#bcbcbc] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">
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
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarbarian.ac87de19.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">barbarian</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdruid.6cad31fa.png&w=64&q=75"
                alt=""
              />
              <p className="text-[8px]">druid</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnecromancer.f846fdbf.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">necro</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frogue.a7e3d2be.png&w=128&q=75"
                alt=""
              />
              <p className="text-[8px]">rogue</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
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

        <div className="my-4">
          <p className="text-[#bcbcbc] text-[1em]">Filter on Aspect Type</p>
          <div className="flex gap-5 mt-3 text-[#bcbcbc]">
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                alt="defensive"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                src="https://diablo4.life/_next/image?url=%2Faspects%2Fdefensive.png&w=64&q=1"
              />
              <p className="text-[8px]">defensive</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2Faspects%2Foffensive.png&w=64&q=1"
                alt=""
              />
              <p className="text-[8px]">offensive</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2Faspects%2Fresource.png&w=64&q=1"
                alt=""
              />
              <p className="text-[8px]">resource</p>
            </div>

            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="https://diablo4.life/_next/image?url=%2Faspects%2Futility.png&w=64&q=1"
                alt=""
              />
              <p className="text-[8px]">utility</p>
            </div>
            <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 py-2 rounded-md">
              <Image
                width={28}
                height={28}
                src="	https://diablo4.life/_next/image?url=%2Faspects%2Fmobility.png&w=64&q=1"
                alt=""
              />
              <p className="text-[8px]">mobility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
