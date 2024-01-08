'use client';
import Image from 'next/image';
import { useState } from 'react';

import ToolTip from './ToolTip';

export default function Card({ data }) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredChild, setHoveredChild] = useState(null);

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      className="flex w-full justify-between my-2 shadow-md"
      onMouseMove={handleMouseMove}
    >
      <div className="text-[4rem] bg-[#5a657a] rounded-l-lg w-[20%] md:w-[10%] flex items-center justify-center text-[#bcbcbc]">
        {data.text}
      </div>
      <div className="w-[78%] md:w-[89%] rounded-r-lg bg-[#252630] p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.children.map((child, index) => (
          <div
            key={index}
            className="flex items-center relative group cursor-pointer"
            onMouseEnter={() => setHoveredChild(index)}
            onMouseLeave={() => setHoveredChild(null)}
          >
            <Image height={28} width={28} src={child.icon} alt={child.name} />
            <div>
              <h3 className="text-[#bcbcbc] border-dotted border-b-2 border-[#bcbcbc]">
                {child.name}
              </h3>
              {hoveredChild === index && (
                <ToolTip child={child} position={tooltipPosition} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
