import Link from "next/link";
import { PropsWithChildren } from "react";

type LinkBoxProps = PropsWithChildren<{ href: string }>;

export default function LinkBox({ children, href }: LinkBoxProps) {
  return (
    <Link
      href={href}
      className="px-6 py-2 bg-white shadow-md rounded-full active:shadow-inner"
    >
      {children}
    </Link>
  );
}
