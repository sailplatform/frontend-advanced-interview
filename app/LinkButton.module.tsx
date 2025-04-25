import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  link: string;
}

export default function LinkButton(props: Props) {
  const { children, link } = props;
  return (
    <Link
      href={link}
      className="rounded-full cursor-pointer bg-white px-4 py-3 font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}
