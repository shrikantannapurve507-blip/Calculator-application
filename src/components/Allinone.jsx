import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

export default function AppInOne() {
  const [input, setInput] = useState('');

  const handleClick = (val) => {
    if (val === 'C') {
      setInput('');
    } else if (val === '=') {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => (prev === 'Error' ? val : prev + val));
    }
  };

  const buttonValues = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '', '0', '.'
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      
      <div className="bg-white border-4 border-black p-6 rounded-xl shadow-xl w-[320px]">
        
        <Display value={input} />

        <div className="grid grid-cols-3 gap-4 mt-4">
          {buttonValues.map((val, index) => (
            <Button key={index} value={val} onClick={() => handleClick(val)} />
          ))}
        </div>

      </div>

    </div>
  );
}