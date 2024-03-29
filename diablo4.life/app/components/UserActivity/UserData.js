import user from './user.json';
import User from './User';
import Timer from '../Timer';

export default function UserData() {
  return (
    <div className="hidden md:block w-full">
      {/* Timer 1 */}
      <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between">
        <p>World Boss</p>
        <Timer duration={12000} />
        <span className="absolute top-[-2px] right-5 text-[8px]">
          starts in
        </span>
      </div>

      {/* Timer 2 */}
      <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between my-2">
        <p>World Boss</p>
        <Timer duration={1200} />
        <span className="absolute top-[-2px] right-5 text-[8px]">
          starts in
        </span>
      </div>

      {/* Timer 3 */}
      <div className="text-gray-200 text-[.75rem] bg-[#393E4C] px-5 py-2 rounded-lg flex relative text-sm justify-between">
        <p>World Boss</p>
        <Timer duration={120} />
        <span className="absolute top-[-2px] right-5 text-[8px]">
          starts in
        </span>
      </div>
      <p className="text-gray-200 text-lg mt-3 mb-1">Online</p>
      {user.map((user) => (
        <User key={user.id} user={user.user} />
      ))}
    </div>
  );
}
