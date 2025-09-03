import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">Progress</span>
        <span className="text-sm font-medium text-cyan-400">{currentStep}/{totalSteps}</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;