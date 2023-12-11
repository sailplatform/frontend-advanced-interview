import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAIL() Front-end Interview',
  description: 'A collection of front-end web development interview questions.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-blue-50 from-50% via-70% via-sky-100 to-indigo-50 w-screen h-screen">
        <main className="mx-auto container prose-sm sm:prose-lg px-8 sm:px-16 py-8 sm:py-16 overflow-y-scroll h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
