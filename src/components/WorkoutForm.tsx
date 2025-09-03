import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Target, 
  Heart, 
  Home, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { UserInput } from '../types';
import FormSection from './FormSection';
import InputField from './InputField';
import SelectButton from './SelectButton';
import ProgressIndicator from './ProgressIndicator';

interface WorkoutFormProps {
  onSubmit: (data: UserInput) => void;
  onBackToHome: () => void;
}

const healthConditionOptions = [
  'none',
  'asthma',
  'hypertension',
  'joint-pain',
  'arthritis',
  'diabetes',
  'heart-condition'
];

const WorkoutForm = ({ onSubmit, onBackToHome }: WorkoutFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserInput>>({
    healthConditions: []
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(formData as UserInput);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.age && formData.age >= 13 && formData.age <= 100;
      case 2: return formData.gender;
      case 3: return formData.fitnessGoal;
      case 4: return formData.healthConditions !== undefined;
      case 5: return formData.exercisePreference;
      case 6: return formData.timeAvailability;
      default: return false;
    }
  };

  const toggleHealthCondition = (condition: string) => {
    if (condition === 'none') {
      setFormData({ ...formData, healthConditions: [] });
      return;
    }

    const currentConditions = formData.healthConditions || [];
    const hasCondition = currentConditions.includes(condition);
    
    if (hasCondition) {
      setFormData({
        ...formData,
        healthConditions: currentConditions.filter(c => c !== condition)
      });
    } else {
      setFormData({
        ...formData,
        healthConditions: [...currentConditions, condition]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative"
      >
        {/* Back to Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBackToHome}
          className="absolute top-6 left-6 flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Home</span>
        </motion.button>

        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold mb-4"
          >
            <Sparkles className="w-5 h-5" />
            <span>AI Fitness Expert</span>
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Let's Create Your Perfect Workout
          </h1>
          <p className="text-gray-300">
            Answer a few questions to get a personalized exercise plan powered by AI
          </p>
        </div>

        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {/* Step 1: Age */}
        <FormSection
          title="What's your age?"
          description="This helps us tailor the intensity and type of exercises"
          isVisible={currentStep === 1}
        >
          <InputField label="Age" icon={<User className="w-4 h-4" />}>
            <input
              type="number"
              min="13"
              max="100"
              value={formData.age || ''}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
              className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Enter your age"
            />
          </InputField>
        </FormSection>

        {/* Step 2: Gender */}
        <FormSection
          title="What's your gender?"
          description="This helps personalize exercise recommendations"
          isVisible={currentStep === 2}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['male', 'female', 'other'].map((gender) => (
              <SelectButton
                key={gender}
                selected={formData.gender === gender}
                onClick={() => setFormData({ ...formData, gender: gender as any })}
              >
                <div className="text-center">
                  <User className="w-8 h-8 mx-auto mb-2" />
                  <span className="capitalize font-medium">{gender}</span>
                </div>
              </SelectButton>
            ))}
          </div>
        </FormSection>

        {/* Step 3: Fitness Goal */}
        <FormSection
          title="What's your fitness goal?"
          description="Choose your primary objective"
          isVisible={currentStep === 3}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'weight-loss', label: 'Weight Loss', icon: Target },
              { key: 'muscle-gain', label: 'Muscle Gain', icon: Target },
              { key: 'flexibility', label: 'Flexibility', icon: Target },
              { key: 'endurance', label: 'Endurance', icon: Heart },
              { key: 'general-fitness', label: 'General Fitness', icon: Sparkles }
            ].map(({ key, label, icon: Icon }) => (
              <SelectButton
                key={key}
                selected={formData.fitnessGoal === key}
                onClick={() => setFormData({ ...formData, fitnessGoal: key as any })}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{label}</span>
                </div>
              </SelectButton>
            ))}
          </div>
        </FormSection>

        {/* Step 4: Health Conditions */}
        <FormSection
          title="Any health conditions?"
          description="This ensures safe exercise recommendations"
          isVisible={currentStep === 4}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {healthConditionOptions.map((condition) => (
              <SelectButton
                key={condition}
                selected={
                  condition === 'none' 
                    ? (formData.healthConditions?.length === 0)
                    : (formData.healthConditions?.includes(condition) || false)
                }
                onClick={() => toggleHealthCondition(condition)}
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium capitalize">
                    {condition.replace('-', ' ')}
                  </span>
                </div>
              </SelectButton>
            ))}
          </div>
        </FormSection>

        {/* Step 5: Exercise Preference */}
        <FormSection
          title="Where do you prefer to exercise?"
          description="Choose your ideal workout environment"
          isVisible={currentStep === 5}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { key: 'home', label: 'Home', icon: Home },
              { key: 'gym', label: 'Gym', icon: Target },
              { key: 'outdoor', label: 'Outdoor', icon: Heart }
            ].map(({ key, label, icon: Icon }) => (
              <SelectButton
                key={key}
                selected={formData.exercisePreference === key}
                onClick={() => setFormData({ ...formData, exercisePreference: key as any })}
              >
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-medium">{label}</span>
                </div>
              </SelectButton>
            ))}
          </div>
        </FormSection>

        {/* Step 6: Time Availability */}
        <FormSection
          title="How much time do you have?"
          description="Choose your available workout duration"
          isVisible={currentStep === 6}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { minutes: 15, label: '15 min', desc: 'Quick & Effective' },
              { minutes: 30, label: '30 min', desc: 'Balanced Workout' },
              { minutes: 60, label: '1 hour', desc: 'Complete Session' }
            ].map(({ minutes, label, desc }) => (
              <SelectButton
                key={minutes}
                selected={formData.timeAvailability === minutes}
                onClick={() => setFormData({ ...formData, timeAvailability: minutes as any })}
              >
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">{label}</div>
                  <div className="text-sm opacity-75">{desc}</div>
                </div>
              </SelectButton>
            ))}
          </div>
        </FormSection>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${currentStep === 1 
                ? 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-400' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`
              flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all duration-300
              ${isStepValid()
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg'
                : 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-400'
              }
            `}
          >
            <span>{currentStep === totalSteps ? 'Generate Plan' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Progress Text */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Step {currentStep} of {totalSteps} - Your perfect workout is almost ready!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkoutForm;