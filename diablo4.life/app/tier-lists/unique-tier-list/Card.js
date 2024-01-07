'use client';
import Image from 'next/image';
import { useState } from 'react';

// Tooltip
const ToolTip = ({ child, position }) => (
  <div className="absolute p-3 bg-[#252630] rounded text-[#bcbcbc] border-[0.5px] border-solid border-[#333543] z-10 w-[400px]">
    <div
      style={{
        top: position.y,
        left: position.x,
      }}
      className="flex items-center"
    >
      <Image height={38} width={38} src={child.icon} alt={child.name} />
      <h3 className="text-[#fdfdfd]">{child.name}</h3>
    </div>
    <div>
      {child.label.map((label) => (
        <span key={label} className="text-sm bg-[#df3d40] mr-2 px-2 rounded">
          {label}
        </span>
      ))}
    </div>
    <hr className="text-[#252630] bg-[#333543] border-none h-[2px] my-2" />

    {child.feature1.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
    <hr className="text-[#252630] bg-[#333543] border-none h-[2px] my-2" />
    {child.feature2.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
    <hr className="text-[#252630] bg-[#333543] border-none h-[2px] my-2" />
    <li className="text-sm list-none text-[#f0af5f]">{child.Description}</li>
    <hr className="text-[#252630] bg-[#333543] border-none h-[2px] my-2" />

    <div>
      {child.tag && child.tag.imageUrl && (
        <div>
          {child.tag.imageUrl.map((imageUrl, index) => (
            <Image
              key={index}
              height={28}
              width={28}
              src={imageUrl}
              alt={child.name}
            />
          ))}
        </div>
      )}
      <div>{child.tag && child.tag.level}</div>
      <div>{child.tag && child.tag.worldTier}</div>
    </div>
  </div>
);

export default function Card({ data }) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredChild, setHoveredChild] = useState(null);

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      className="flex w-full justify-between my-2"
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
              <h3 className="text-[#f0af5f] border-dotted border-b-2 border-[#f0af5f]">
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
