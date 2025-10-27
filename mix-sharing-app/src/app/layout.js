import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mix Sharing App',
  description: 'Share and discover music mixes easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="text-center text-2xl font-bold">Mix Sharing App</h1>
        </header>
        <main>{children}</main>
        <footer className="text-center py-4">
          <p>&copy; {new Date().getFullYear()} Mix Sharing App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}