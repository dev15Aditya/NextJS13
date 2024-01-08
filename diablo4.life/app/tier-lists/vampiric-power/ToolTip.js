import Image from 'next/image';

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

    {/* {child.tag && Array.isArray(child.tag) && (
      <div>
        {child.tag.map((tag, index) => (
          <div key={index}>
            <div>
              {Array.isArray(tag.imageUrl) &&
                tag.imageUrl.map((imageUrl, idx) => (
                  <Image
                    key={idx}
                    height={28}
                    width={28}
                    src={imageUrl}
                    alt={child.name}
                  />
                ))}
            </div>
            <div>{tag.level}</div>
            <div>{tag.worldTier}</div>
          </div>
        ))}
      </div>
    )} */}
  </div>
);

export default ToolTip;
