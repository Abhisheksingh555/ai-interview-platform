import { motion } from "framer-motion"
import AiPanel from "../components/AiPanel"
import StudentPanel from "../components/StudentPanel"

export default function InterviewRoom() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white flex overflow-hidden">
      {/* Left: AI */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 border-r border-gray-700 p-6 flex flex-col"
      >
        <AiPanel />
      </motion.div>

      {/* Right: Student */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 p-6 flex flex-col"
      >
        <StudentPanel />
      </motion.div>
    </div>
  )
}
