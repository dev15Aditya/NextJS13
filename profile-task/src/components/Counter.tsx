import React, { useState } from 'react';

type CounterProps = {
  count: number;
};

const Counter = ({ count }: CounterProps) => {
  return (
    <div className="flex mb-1 ml-3 lg:ml-16">
      <div
        style={{ borderBottomRightRadius: '-8px' }}
        className="text-blue-400 border-t-2 border-gray-200 text-lg w-[100px] text-center p-2"
      >
        {count} Posts
      </div>
      <div className="border-2 bg-gray-200 rounded-bl-lg rounded-tr-lg"></div>
      <div className="border-b-2 border-gray-200 w-full"></div>
    </div>
  );
};

export default Counter;
