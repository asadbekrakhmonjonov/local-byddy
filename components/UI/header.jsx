'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/matchmaking', label: 'Matchmaking' },
    { href: '/chat', label: 'Chat' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/localbuddy-logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="rounded-md"
          />
          <span className="text-2xl font-semibold dark:text-white">LocalBuddy</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          id="mobile-menu"
          className={`transition-all duration-300 ease-in-out w-full md:flex md:w-auto md:items-center ${menuOpen ? '' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-gray-50 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none dark:bg-gray-800 md:dark:bg-transparent border md:border-0 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded md:p-0 ${
                    pathname === link.href
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:md:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
