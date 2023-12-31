import Builds from '../components/Builds';

export default function Page() {
  return (
    <div className="text-[#fdfdfd] mt-10">
      <h1 className="text-[24px]">What gear is best for your Build?</h1>
      <p className="text-[16px] text-[#969697] my-3">
        Find the best stats and aspects for your gear
      </p>

      <div className="py-5 text-[#969697]">
        <h1 className="text-[16px]">Select a class</h1>

        <Builds />
      </div>
    </div>
  );
}
