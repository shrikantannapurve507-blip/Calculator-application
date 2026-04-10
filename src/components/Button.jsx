import React from 'react';

export default function Button({ value, onClick }) {
  if (!value) {
    return <div></div>;
  }

  return (
    <button
      onClick={onClick}
      className="h-[70px] w-full text-2xl font-semibold border-2 border-black rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
    >
      {value}
    </button>
  );
}