import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/seo';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = baseMetadata();

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2614950503137419"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-slate-100">
        <NavBar />
        <main className="mx-auto min-h-screen w-full max-w-[110rem] px-4 py-12 sm:px-6 lg:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
