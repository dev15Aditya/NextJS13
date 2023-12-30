import Card from './Card';
import data from './Data.json';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function CardList() {
  return (
    <div className="my-5">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h1 className="text-gray-200 text-[20px]">Diablo 4 Guides</h1>
          <p className="text-gray-400 flex items-center ml-4 text-[12px] group">
            <span className="group-hover:underline transition duration-300">
              View All Guides
            </span>
            <FaArrowRight className="text-gray-400 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
          </p>
        </div>
        <div className="hidden md:flex md:items-center">
          {/* pages */}
          <p className="text-gray-200 text-sm">1/2</p>
          <FaArrowLeft className="text-gray-200 ml-2 bg-[#44495a] text-3xl p-1 rounded-lg hover:brightness-150" />
          <FaArrowRight className="text-gray-200 ml-2 bg-[#44495a] text-3xl p-1 rounded-lg hover:brightness-150" />
        </div>
      </div>
      <div className="flex flex-nowrap overflow-x-auto select-none">
        {data.map((item) => (
          <Card
            key={item.id}
            url={item.url}
            title={item.title}
            heading={item.heading}
            editDetail={item.editDetail}
            updateDetails={item.updateDetail}
          />
        ))}
      </div>
    </div>
  );
}
