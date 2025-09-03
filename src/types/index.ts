export interface UserInput {
  age: number;
  gender: 'male' | 'female' | 'other';
  fitnessGoal: 'weight-loss' | 'muscle-gain' | 'flexibility' | 'endurance' | 'general-fitness';
  healthConditions: string[];
  exercisePreference: 'home' | 'gym' | 'outdoor';
  timeAvailability: 15 | 30 | 60;
}

export interface Exercise {
  id: string;
  name: string;
  type: string;
  duration: string;
  sets?: string;
  reps?: string;
  description: string;
  videoUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
}

export interface WorkoutPlan {
  title: string;
  description: string;
  frequency: string;
  duration: string;
  exercises: Exercise[];
  tips: string[];
  motivationalQuote: string;
  caloriesBurned?: string;
}

export interface Rule {
  id: string;
  name: string;
  conditions: {
    age?: { min?: number; max?: number };
    gender?: string[];
    fitnessGoal?: string[];
    healthConditions?: { includes?: string[]; excludes?: string[] };
    exercisePreference?: string[];
    timeAvailability?: number[];
  };
  recommendations: {
    workoutType: string;
    exercises: string[];
    frequency: string;
    intensity: 'low' | 'moderate' | 'high';
  };
}