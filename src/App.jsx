import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import InterviewRoom from "./pages/InterviewRoom"
import Loader from "./components/Loader"
import { useState, useEffect } from "react"

export default function App() {
  const [loading, setLoading] = useState(true)

  // Simulate initial loading (e.g., fetching user or configs)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {loading ? (
          <Loader text="Initializing Interview Platform..." />
        ) : (
          <Routes>
            {/* 🧠 Main One-Page AI Interview Room */}
            <Route path="/" element={<InterviewRoom />} />

            {/* ❌ 404 fallback route */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-4xl font-bold text-red-500 mb-2">404</h1>
                  <p className="text-gray-400">Page not found</p>
                </div>
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  )
}
