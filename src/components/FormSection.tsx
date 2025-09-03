import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  isVisible: boolean;
}

const FormSection = ({ title, description, children, isVisible }: FormSectionProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

export default FormSection;