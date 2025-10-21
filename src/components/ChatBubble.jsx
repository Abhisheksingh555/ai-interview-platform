export default function ChatBubble({ text, from }) {
  const isAI = from === "ai"
  return (
    <div
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`p-3 rounded-2xl max-w-[75%] ${
          isAI ? "bg-blue-600" : "bg-gray-700"
        }`}
      >
        {text}
      </div>
    </div>
  )
}
