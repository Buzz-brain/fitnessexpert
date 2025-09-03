import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserInput } from './types';
import { useWorkoutPlanner } from './hooks/useWorkoutPlanner';
import LandingPage from './components/LandingPage';
import WorkoutForm from './components/WorkoutForm';
import LoadingScreen from './components/LoadingScreen';
import WorkoutResults from './components/WorkoutResults';

function App() {
  const { isLoading, workoutPlan, error, generatePlan, resetPlan } = useWorkoutPlanner();
  const [currentView, setCurrentView] = useState<'landing' | 'form' | 'results'>('landing');

  const handleFormSubmit = async (userInput: UserInput) => {
    setCurrentView('results');
    await generatePlan(userInput);
  };

  const handleReset = () => {
    resetPlan();
    setCurrentView('landing');
  };

  const handleGetStarted = () => {
    setCurrentView('form');
  };

  const handleBackToHome = () => {
    resetPlan();
    setCurrentView('landing');
  };

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentView('form')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Try Again
            </button>
            <button
              onClick={handleBackToHome}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading State
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Results State
  if (workoutPlan && currentView === 'results') {
    return (
      <WorkoutResults 
        workoutPlan={workoutPlan} 
        onReset={handleReset}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <AnimatePresence mode="wait">
      {currentView === 'landing' && (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onGetStarted={handleGetStarted} />
        </motion.div>
      )}
      
      {currentView === 'form' && (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <WorkoutForm 
            onSubmit={handleFormSubmit}
            onBackToHome={handleBackToHome}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;