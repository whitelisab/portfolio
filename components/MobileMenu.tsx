import Link from 'next/link';

interface Page {
  route: string;
  name: string;
}

interface Props {
  pages: Page[];
  isOpen: boolean;
}

export default function MobileMenu({ pages, isOpen }: Props) {
  return (
    <>
      {isOpen && (
        <div className="mb-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <ul>
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.route} key={page.name}>
                  <p className="text-neutral-800 px-2 py-2 text-md">
                    {page.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      )}
    </>
  );
}
