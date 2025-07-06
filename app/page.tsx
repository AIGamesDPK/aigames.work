export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-md mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you something amazing!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse"></div>
        </div>
        <p className="text-xl font-semibold text-blue-600">
          Coming Soon...
        </p>
      </div>
    </main>
  )
} 