export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-emerald-600">
            Taxcare Group 
          </h1>
          <nav className="space-x-4 text-sm">
            <a href="#" className="text-gray-700 hover:text-emerald-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Get Started</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-center">
          © 2024 Taxcare Group, Inc.
        </div>
      </footer>
    </div>
  )
}
