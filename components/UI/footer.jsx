import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Logo and description */}
          <div>
            <Link href="/" aria-label="Homepage" className="inline-block text-teal-600 dark:text-teal-300">
              <Image
                src="/localbuddy-logo.png" // Replace with your actual logo path
                alt="Company Logo"
                width={118}
                height={24}
                priority
                className="rounded-md"
              />
            </Link>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              LocalBuddy connect locally
            </p>

            {/* Social media icons */}
            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22.676 0H1.324C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.07h3.127V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM3.5 7.75a4.25 4.25 0 014.25-4.25h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5a4.25 4.25 0 01-4.25-4.25v-8.5zm12.75-.25a.75.75 0 01.75-.75h.008a.75.75 0 110 1.5H17a.75.75 0 01-.75-.75zM12 8a4 4 0 100 8 4 4 0 000-8zm-5.5 4a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
              <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-300">
                About
              </Link>
              <Link href="/why-localbuddy" className="hover:text-teal-600 dark:hover:text-teal-300">
                Why LocalBuddy?
              </Link>
              <Link href="/contact" className="hover:text-teal-600 dark:hover:text-teal-300">
                Contact
              </Link>
              <Link href="/feedback" className="hover:text-teal-600 dark:hover:text-teal-300">
                Feedback
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
