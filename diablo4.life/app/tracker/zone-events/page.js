import Card from '../components/Card';

export default function LegionEvents() {
  return (
    <div className="md:flex justify-between">
      <div className="text-[#bcbcbc] mt-5">
        <h1>
          A interactive map will appear when there is an active Helltide
          showing:
        </h1>
        <ul className="ml-1 mt-2 w-full mx-auto">
          <li className="flex items-center">
            <span className="w-1 h-1 bg-[#fdfdfd] mr-2"></span>Tortured Gifts of
            Mystery (250)
          </li>
          <li className="flex items-center">
            <span className="w-1 h-1 bg-[#fdfdfd] mr-2"></span>Tortured Gifts of
            Living Steel (300)
          </li>
          <li className="flex items-center">
            <span className="w-1 h-1 bg-[#fdfdfd] mr-2"></span>Chest Reset Timer
          </li>
          <li className="flex items-center">
            <span className="w-1 h-1 bg-[#fdfdfd] mr-2"></span>Event Locations
          </li>
          <li className="flex items-center">
            <span className="w-1 h-1 bg-[#fdfdfd] mr-2"></span>Close Waypoints
          </li>
        </ul>
      </div>
      <Card />
    </div>
  );
}
