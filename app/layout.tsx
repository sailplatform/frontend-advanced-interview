import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TEEL Lab Web Front-end Development Interview',
  description:
    'A collection of advanced front-end web development interview questions, curated by CMU TEEL Lab.',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-linear-to-tr from-sky-50 from-50% via-70% via-sky-100 to-sky-50 w-screen h-screen">
        <div className="overflow-y-scroll size-full">
          <main className="mx-auto container max-w-screen-lg prose-sm sm:prose-lg px-12 sm:px-24 py-8 sm:py-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
