import Image from 'next/image';

export default function Builds() {
  return (
    <div className="flex gap-5 mt-3">
      <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
        <Image
          width={35}
          height={35}
          src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarbarian.ac87de19.png&w=128&q=75"
          alt=""
        />
        <p className="text-[8px]">barbarian</p>
      </div>
      <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
        <Image
          width={35}
          height={35}
          src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdruid.6cad31fa.png&w=64&q=75"
          alt=""
        />
        <p className="text-[8px]">druid</p>
      </div>
      <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
        <Image
          width={35}
          height={35}
          src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnecromancer.f846fdbf.png&w=128&q=75"
          alt=""
        />
        <p className="text-[8px]">necro</p>
      </div>
      <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
        <Image
          width={35}
          height={35}
          src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frogue.a7e3d2be.png&w=128&q=75"
          alt=""
        />
        <p className="text-[8px]">rogue</p>
      </div>
      <div className="flex flex-col items-center brightness-75 hover:bg-[#252630] hover:brightness-100 p-2 rounded-md">
        <Image
          width={40}
          height={40}
          src="https://diablo4.life/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsorcerer.5cf2b6cc.png&w=64&q=75"
          alt=""
        />
        <p className="text-[8px]">sorcerer</p>
      </div>
    </div>
  );
}
