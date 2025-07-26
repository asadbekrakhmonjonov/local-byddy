import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 shadow-md bg-dark text-white relative h-24">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image 
            src="/localbuddy-logo.png" 
            alt="LocalBuddy Logo" 
            width={160} 
            height={58} 
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link href="/chats" className="hover:text-blue-400 text-lg font-medium">Why Globy?</Link>
        <Link href="/matchmaking" className="hover:text-blue-400 text-lg font-medium">Contact</Link>
        <Link href="/events" className="hover:text-blue-400 text-lg font-medium">Feedbacks</Link>
        <Link href="/about" className="hover:text-blue-400 text-lg font-medium">Contributors</Link>
      </nav>

      {/* Social Icons */}
      <div className="flex items-center space-x-4">
        <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="hover:text-pink-400">
          <Instagram size={24} />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="hover:text-blue-500">
          <Facebook size={24} />
        </Link>
      </div>
    </footer>
  )
}
