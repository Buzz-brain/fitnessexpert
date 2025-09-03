import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InputFieldProps {
  label: string;
  children: ReactNode;
  icon?: ReactNode;
}

const InputField = ({ label, children, icon }: InputFieldProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <label className="flex items-center space-x-2 text-sm font-medium text-gray-200">
        {icon}
        <span>{label}</span>
      </label>
      {children}
    </motion.div>
  );
};

export default InputField;