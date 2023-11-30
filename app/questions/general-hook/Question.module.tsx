'use client';

import QuestionRegion from '@/component/QuestionRegion.module';
import { useState } from 'react';
import Counter from './Counter.module';

export default function Question() {
  const [displayingCounter, setDisplayingCounter] = useState<0 | 1>(0);
  return (
    <QuestionRegion>
      <Counter counterID={displayingCounter} />
      <button className="bg-indigo-500 px-4 py-2 shadow-md rounded-full active:shadow-inner active:bg-indigo-600 text-white">
        Switch Displaying Counter
      </button>
    </QuestionRegion>
  );
}
