import { motion } from 'framer-motion';
import { Activity, Heart, Target, Zap } from 'lucide-react';

const loadingMessages = [
  "Analyzing your fitness profile...",
  "Applying expert rules...",
  "Selecting optimal exercises...",
  "Personalizing your workout plan...",
  "Almost ready to get you moving!"
];

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4"
    >
      <div className="text-center max-w-md">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          >
            <Activity className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-6 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          />
        </div>

        {/* Loading Messages */}
        <motion.div
          key="loading-messages"
          className="space-y-4"
        >
          {loadingMessages.map((message, index) => (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.8, duration: 0.6 }}
              className="text-white text-lg font-medium"
            >
              {message}
            </motion.p>
          ))}
        </motion.div>

        {/* Pulsing Effect */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8"
        >
          <p className="text-cyan-300 text-sm font-medium">
            Creating your perfect workout...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;