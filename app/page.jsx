import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-start justify-start min-h-screen bg-dark pt-[150px] pl-[250px] pr-4 gap-10">
      {/* Left content */}
      <div className="max-w-xl text-left relative">
        <div className="relative inline-block">
          <div className="dot-grid absolute inset-0 z-0 pointer-events-none" />
          <h1 className="relative z-10 text-4xl font-bold mb-4">
            Great Meetings Are Just The Beginning
          </h1>
        </div>

        <p className="text-lg mb-6">
          We help you build great meeting habits through collaborative agendas and easy-to-schedule meetings.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Sign-in
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Registration
          </button>
        </div>
      </div>

      {/* Right image layout */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="relative w-28 h-64 rounded-full overflow-hidden">
            <Image 
              src={`/picture-${num}.png`} 
              alt={`Person ${num}`} 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}
