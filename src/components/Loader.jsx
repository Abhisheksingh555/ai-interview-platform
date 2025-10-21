import { motion } from "framer-motion"

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-white">
      {/* Spinning circle */}
      <motion.div
        className="w-14 h-14 border-4 border-t-transparent border-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <motion.p
        className="text-lg text-gray-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        {text}
      </motion.p>
    </div>
  )
}
