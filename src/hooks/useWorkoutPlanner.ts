import { useState, useCallback } from 'react';
import { UserInput, WorkoutPlan } from '../types';
import { FitnessInferenceEngine } from '../utils/inferenceEngine';

export const useWorkoutPlanner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generatePlan = useCallback(async (userInput: UserInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const engine = new FitnessInferenceEngine();
      const plan = engine.generateWorkoutPlan(userInput);
      setWorkoutPlan(plan);
    } catch (err) {
      setError('Failed to generate workout plan. Please try again.');
      console.error('Error generating workout plan:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetPlan = useCallback(() => {
    setWorkoutPlan(null);
    setError(null);
  }, []);

  return {
    isLoading,
    workoutPlan,
    error,
    generatePlan,
    resetPlan
  };
};