import Webcam from "react-webcam"
import { useState } from "react"
import { User } from "lucide-react"

export default function StudentPanel() {
  const [answer, setAnswer] = useState("")

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <User className="text-green-400" size={32} />
        <h2 className="text-2xl font-semibold">You (Student)</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <Webcam className="w-[90%] h-[250px]" mirrored />
        </div>
      </div>

      <textarea
        className="mt-4 w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white"
        placeholder="Type your answer here..."
        rows="3"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        className="mt-3 bg-green-600 hover:bg-green-700 transition rounded-lg py-2 px-4 text-white"
      >
        Submit Answer
      </button>
    </div>
  )
}
