import React from 'react';

export default function Display({ value }) {
  return (
    <div className="w-full h-[80px] border-2 border-black rounded-md bg-gray-100 flex items-center justify-end px-4 text-3xl font-bold overflow-x-auto">
      {value || '0'}
    </div>
  );
}