import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAIL() Front-end Interview',
  description:
    'A collection of advanced front-end web development interview questions, curated by SAIL() platform.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-sky-50 from-50% via-70% via-sky-100 to-sky-50 w-screen h-screen">
        <main className="mx-auto container max-w-screen-lg prose-sm sm:prose-lg px-12 sm:px-24 py-8 sm:py-16 overflow-y-scroll h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
