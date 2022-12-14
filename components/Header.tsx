import Image from 'next/image';
import Link from 'next/link';

interface Page {
  route: string;
  name: string;
}

interface Props {
  onMenuClick: () => void;
  overlayOpen: boolean;
  pages: Page[];
}

export default function Header({ onMenuClick, overlayOpen, pages }: Props) {
  return (
    <nav className="bg-white z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex">
            <Image
              src="/website-logo-small.png"
              alt="Headshot image"
              width="25"
              height="25"
              className="hidden sm:block"
            />
            <span className="text-neutral-800 pl-2">
              Lisa White | Software Engineer
            </span>
          </div>
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
            <button
              className="sm:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-neutral-800 focus:outline-none"
              onClick={onMenuClick}
            >
              <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`absolute h-0.5 w-5 bg-neutral-800 transform transition duration-300 ease-in-out ${
                    overlayOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-neutral-800 transform transition-all duration-200 ease-in-out ${
                    overlayOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 bg-neutral-800 transform transition duration-300 ease-in-out ${
                    overlayOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
