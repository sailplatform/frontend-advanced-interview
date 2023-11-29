"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type CounterProps = {
  counterID: 0 | 1;
};

export default function Counter({ counterID }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div
      className={`flex flex-col gap-4 p-8 rounded-md shadow-md w-min ${
        counterID === 0 ? "bg-cyan-500" : "bg-indigo-500"
      }`}
    >
      <span className="text-8xl font-mono">{count}</span>
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
