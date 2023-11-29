import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Link href="/" className="hover:underline" tabIndex={0}>
        <ArrowLeftIcon
          aria-hidden
          width={24}
          height={24}
          className="inline mr-2"
        />
        Back to homepage
      </Link>
      {children}
    </>
  );
}
