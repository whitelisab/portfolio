import Link from 'next/link';

interface Page {
  route: string;
  name: string;
}

interface Props {
  pages: Page[];
}

export default function MobileMenu({ pages }: Props) {
  return (
    <div className="fixed flex flex-col top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-white">
      <ul className="w-full flex flex-col items-start">
        {pages.map((page) => (
          <li key={page.name}>
            <Link href={page.route} key={page.name}>
              <p className="text-neutral-800 px-2 py-2 text-md">{page.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
