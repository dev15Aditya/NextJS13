import React from 'react';

type CounterProps = {
  count: number;
};

const Counter = ({ count }: CounterProps) => {
  return (
    <div className="flex my-5">
      <div className="text-blue-400 border-t-2 border-gray-200 text-lg w-[200px] text-center py-2 font-bold">
        {count} Posts
      </div>
      <div className="border-2 bg-gray-200 rounded-bl-lg rounded-tr-lg"></div>
      <div className="border-b-2 border-gray-200 w-full"></div>
    </div>
  );
};

export default Counter;
