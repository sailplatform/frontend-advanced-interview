'use client';

import { useState } from 'react';
import Counter from './Counter.module';

// TODO: write your code in this file.

export default function Question() {
  const [displayingCounter, setDisplayingCounter] = useState<0 | 1>(0);
  return (
    <div className="bg-white rounded-xl w-full p-4 sm:p-8 flex flex-col items-center gap-4 sm:gap-8">
      <Counter counterID={displayingCounter} />
      <button className="bg-indigo-500 px-4 py-2 shadow-md rounded-full active:shadow-inner active:bg-indigo-600 text-white">
        Switch Displaying Counter
      </button>
    </div>
  );
}
