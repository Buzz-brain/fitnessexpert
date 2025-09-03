import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SelectButtonProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

const SelectButton = ({ children, selected, onClick, className = '' }: SelectButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        p-4 rounded-xl border-2 transition-all duration-300 text-left
        ${selected 
          ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white shadow-lg shadow-cyan-500/25' 
          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
        }
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default SelectButton;