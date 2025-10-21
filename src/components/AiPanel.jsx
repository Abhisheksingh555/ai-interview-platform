import { useState } from "react"
import ChatBubble from "./ChatBubble"
import { Bot } from "lucide-react"

export default function AiPanel() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! Let's start your interview." },
  ])

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <Bot className="text-blue-400" size={32} />
        <h2 className="text-2xl font-semibold">AI Interviewer</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <ChatBubble key={i} text={m.text} from={m.from} />
        ))}
      </div>

      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 px-4 text-white"
      >
        Next Question
      </button>
    </div>
  )
}
