import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

type Props = {
  children: React.ReactNode;
};

const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' }
];

const meta = {
  title: 'Lisa White - Software Engineer',
  author: 'Lisa White',
  description:
    'Focused on front-end development with JavaScript, React, Salesforce development, and a passionate career coach and educator',
  url: 'https://whitelisab.com',
  image: 'https://whitelisab.com/banner.png'
};

export default function Container({ children }: Props) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const handleMenuClick = () => {
    if (overlayOpen) {
      setOverlayOpen(false);
      document.body.style.overflow = '';
    } else {
      setOverlayOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={meta.url} />
        <meta name="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:creator" content={meta.author} />
        <meta name="twitter:site" content="@lmbel" />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/website-logo-small.png" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between px-8">
        <Header
          onMenuClick={handleMenuClick}
          overlayOpen={overlayOpen}
          pages={pages}
        />
        {overlayOpen && <MobileMenu pages={pages} />}
        <main className="flex justify-center">{children}</main>
        <Footer />
      </div>
    </>
  );
}
