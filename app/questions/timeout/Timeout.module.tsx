'use client';

import { useState } from 'react';

export default function Countdown() {
  const [count, setCount] = useState(5);
  return (
    <div className="flex flex-col gap-4 p-8 items-center rounded-md shadow-md">
      <span className="font-mono">{count}</span>
    </div>
  );
}
