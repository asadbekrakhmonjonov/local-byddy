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
          We help your team build great meeting habits through collaborative agendas and easy-to-schedule meetings.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Start Today
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Registration
          </button>
        </div>
      </div>

      {/* Right image layout */}
      <div className="flex gap-[8px] relative">
        {/* Left column */}
        <div className="flex flex-col gap-[8px]">
          <div className="relative w-28 h-52 rounded-full overflow-hidden">
            <Image src="/picture-1.png" alt="Person 1" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-28 h-64 rounded-full overflow-hidden">
            <Image src="/picture-2.png" alt="Person 2" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <Image src="/picture-3.png" alt="Person 3" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Right column with staggered offset */}
        <div className="flex flex-col gap-[8px] mt-[60px]">
          <div className="relative w-28 h-40 rounded-full overflow-hidden">
            <Image src="/picture-4.png" alt="Person 4" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-28 h-64 rounded-full overflow-hidden">
            <Image src="/picture-5.png" alt="Person 5" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <Image src="/picture-6.png" alt="Person 6" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
