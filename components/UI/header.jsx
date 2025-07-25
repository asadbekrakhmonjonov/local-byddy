import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md relative">
      <div className="flex items-center p-10 ml-4 mt-2">
        <Image 
          src="/localbuddy-logo.png" 
          alt="LocalBuddy Logo" 
          width={214} 
          height={78} 
        />
      </div>


      {/* Centered navigation moved slightly left and bigger text */}
      <nav className="absolute left-[40%] transform -translate-x-1/2 flex space-x-6">
        <Link href="/chats" className="text-white hover:text-blue-600 text-2xl font-semibold">Chats</Link>
        <Link href="/matchmaking" className="text-white hover:text-blue-600 text-2xl font-semibold">Matchmaking</Link>
        <Link href="/events" className="text-white hover:text-blue-600 text-2xl font-semibold">Events</Link>
        <Link href="/about" className="text-white hover:text-blue-600 text-2xl font-semibold">About</Link>
      </nav>
    </header>
  )
}
