import { PropsWithChildren } from 'react';

export default function QuestionRegion({ children }: PropsWithChildren) {
  return (
    <div className="bg-white rounded-xl w-full p-4 sm:p-8 flex flex-col items-center gap-4 sm:gap-8">
      {children}
    </div>
  );
}
