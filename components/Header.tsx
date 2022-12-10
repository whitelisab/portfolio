import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Connect', route: '/connect' }
];

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex">
              <Image
                src="/website-logo-small.png"
                alt="Headshot image"
                width="25"
                height="25"
              />
              <span className="text-neutral-800 pl-2">
                Lisa White | Software Engineer
              </span>
            </div>
          </Link>
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {pages.map((page) => (
                  <Link href={page.route} key={page.name}>
                    <p className="text-neutral-800 px-2 py-2 text-md">
                      {page.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
