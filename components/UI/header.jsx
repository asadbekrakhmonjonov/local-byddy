import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md relative h-20">
      <div className="flex items-center ml-2">
        <Link href="/" className="mt-5 block">
          <Image 
            src="/localbuddy-logo.png" 
            alt="LocalBuddy Logo" 
            width={160} 
            height={58} 
          />
        </Link>
      </div>

      <nav className="absolute left-[50%] transform -translate-x-1/2 flex space-x-4">
        <Link href="/chats" className="text-white hover:text-blue-600 text-xl font-bold">Chats</Link>
        <Link href="/matchmaking" className="text-white hover:text-blue-600 text-xl font-bold">Matchmaking</Link>
        <Link href="/events" className="text-white hover:text-blue-600 text-xl font-bold">Events</Link>
        <Link href="/about" className="text-white hover:text-blue-600 text-xl font-bold">About</Link>
      </nav>
    </header>
  )
}
