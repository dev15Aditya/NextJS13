import './Card.css';

export default function Card() {
  return (
    <div className="text-[#d6d6d6] bg-[#252630] p-4 rounded-lg hover:border-[1px] hover:border-dotted hover:border-red-500 flex justify-between text-[19px] mt-4 shadow-powder md:w-[32%]">
      <div className="md:w-1/2">Ashava the Pestilent</div>
      <div className="flex flex-col items-end pb-5">
        <div className="text-[13px]">starts in</div>
        <div>03:04:18</div>
      </div>
    </div>
  );
}
