'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// TODO: write your code in this file.

type CounterProps = {
  counterID: 0 | 1;
};

export default function Counter({ counterID }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div
      className={`flex flex-col gap-4 p-8 items-center rounded-md shadow-md ${
        counterID === 0 ? 'bg-cyan-500' : 'bg-fuchsia-500'
      }`}
    >
      <span className="font-mono">Counter {counterID}</span>
      <span className="text-6xl font-mono">{count}</span>
      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <button aria-label="Increase count">
          <PlusIcon
            aria-label="Increment"
            className="bg-gray-300 active:bg-gray-400 shadow-sm active:shadow-inner rounded-full p-1"
            width={24}
            height={24}
          />
        </button>
        <button aria-label="Decrese count">
          <MinusIcon
            aria-label="Decrement"
            className="bg-gray-300 active:bg-gray-400 shadow-sm active:shadow-inner rounded-full p-1"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
