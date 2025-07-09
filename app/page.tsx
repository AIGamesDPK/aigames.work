export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="text-center bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-float">
          AIGames.Work
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to our AI-powered gaming platform! We're building something amazing.
        </p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 animate-glow">
            Coming Soon
          </div>
          <p className="text-sm text-gray-500">
            Stay tuned for updates and announcements
          </p>
        </div>
      </div>
    </main>
  )
} 