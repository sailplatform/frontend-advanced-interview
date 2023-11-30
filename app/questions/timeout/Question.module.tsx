'use client';

import QuestionRegion from '@/component/QuestionRegion.module';
import { useCallback, useState } from 'react';
import Countdown from './Timeout.module';

export default function Question() {
  const [shouldShow, setShow] = useState(false);
  const showCountdown = useCallback(() => setShow(true), []);
  const hideCountdown = useCallback(() => setShow(false), []);
  return (
    <QuestionRegion>
      {shouldShow && <Countdown />}
      <button
        onClick={showCountdown}
        className="bg-indigo-500 px-4 py-2 shadow-md rounded-full active:shadow-inner active:bg-indigo-600 text-white"
      >
        Initiate Timer
      </button>
    </QuestionRegion>
  );
}
