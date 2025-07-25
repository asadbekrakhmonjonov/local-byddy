import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-start justify-start min-h-screen bg-dark pt-[150px] pl-[250px] pr-4 gap-10">
      {/* Left content */}
      <div className="max-w-xl text-left relative">
        <div className="relative inline-block">
          {/* Dot grid positioned top-left behind h1 */}
          <div className="dot-grid absolute inset-0 z-0 pointer-events-none" />
          <h1 className="relative z-10 text-4xl font-bold mb-4">
            Great Meetings Are Just The Beginning
          </h1>
        </div>

        <p className="text-lg mb-6">
          We help you meet people with similar interests and good intentions to help you localize faster.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Sign-in
          </button>
          <button className="border border-gray-300 text-gray-500 px-6 py-2 rounded hover:bg-gray-100 transition">
            Registration
          </button>
        </div>
      </div>

      {/* Right image container */}
      <div className="flex flex-col w-96 gap-4">
        <div className="w-full h-80 relative">
          <Image
            src="/picture-1.png"
            alt="Illustration 1"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="w-full h-80 relative">
          <Image
            src="/picture-2.png"
            alt="Illustration 2"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}
