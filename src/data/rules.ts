import { Rule } from '../types';

export const rules: Rule[] = [
  {
    id: 'rule-001',
    name: 'Weight Loss + Home + Short Time',
    conditions: {
      fitnessGoal: ['weight-loss'],
      exercisePreference: ['home'],
      timeAvailability: [15, 30]
    },
    recommendations: {
      workoutType: 'HIIT',
      exercises: ['burpees', 'mountain-climbers', 'jumping-jacks', 'high-knees'],
      frequency: '4-5 times per week',
      intensity: 'high'
    }
  },
  {
    id: 'rule-002',
    name: 'Muscle Gain + Gym + Long Time',
    conditions: {
      fitnessGoal: ['muscle-gain'],
      exercisePreference: ['gym'],
      timeAvailability: [60]
    },
    recommendations: {
      workoutType: 'Strength Training',
      exercises: ['deadlifts', 'squats', 'bench-press', 'pull-ups'],
      frequency: '4-6 times per week',
      intensity: 'high'
    }
  },
  {
    id: 'rule-003',
    name: 'Flexibility + Any Location',
    conditions: {
      fitnessGoal: ['flexibility']
    },
    recommendations: {
      workoutType: 'Yoga & Stretching',
      exercises: ['yoga-flow', 'pigeon-pose', 'warrior-poses', 'child-pose'],
      frequency: '3-4 times per week',
      intensity: 'low'
    }
  },
  {
    id: 'rule-004',
    name: 'Endurance + Outdoor',
    conditions: {
      fitnessGoal: ['endurance'],
      exercisePreference: ['outdoor']
    },
    recommendations: {
      workoutType: 'Cardio Training',
      exercises: ['running', 'cycling', 'hiking', 'stair-climbing'],
      frequency: '4-5 times per week',
      intensity: 'moderate'
    }
  },
  {
    id: 'rule-005',
    name: 'Senior Fitness (50+ Age)',
    conditions: {
      age: { min: 50 },
      fitnessGoal: ['general-fitness']
    },
    recommendations: {
      workoutType: 'Low Impact Training',
      exercises: ['walking', 'swimming', 'tai-chi', 'light-weights'],
      frequency: '3-4 times per week',
      intensity: 'low'
    }
  },
  {
    id: 'rule-006',
    name: 'Joint Issues - Low Impact',
    conditions: {
      healthConditions: { includes: ['joint-pain', 'arthritis'] }
    },
    recommendations: {
      workoutType: 'Joint-Friendly Exercise',
      exercises: ['swimming', 'water-aerobics', 'gentle-yoga', 'stationary-bike'],
      frequency: '3-4 times per week',
      intensity: 'low'
    }
  },
  {
    id: 'rule-007',
    name: 'Hypertension - Moderate Cardio',
    conditions: {
      healthConditions: { includes: ['hypertension'] }
    },
    recommendations: {
      workoutType: 'Moderate Cardio',
      exercises: ['brisk-walking', 'swimming', 'cycling', 'light-aerobics'],
      frequency: '4-5 times per week',
      intensity: 'moderate'
    }
  },
  {
    id: 'rule-008',
    name: 'Asthma - Controlled Exercise',
    conditions: {
      healthConditions: { includes: ['asthma'] }
    },
    recommendations: {
      workoutType: 'Controlled Breathing Exercise',
      exercises: ['walking', 'yoga', 'swimming', 'light-weights'],
      frequency: '3-4 times per week',
      intensity: 'low'
    }
  },
  {
    id: 'rule-009',
    name: 'Young Adults - High Intensity',
    conditions: {
      age: { min: 18, max: 30 },
      fitnessGoal: ['weight-loss', 'muscle-gain']
    },
    recommendations: {
      workoutType: 'High Intensity Training',
      exercises: ['hiit-circuits', 'crossfit', 'heavy-lifting', 'plyometrics'],
      frequency: '5-6 times per week',
      intensity: 'high'
    }
  },
  {
    id: 'rule-010',
    name: 'Time-Constrained Quick Workouts',
    conditions: {
      timeAvailability: [15]
    },
    recommendations: {
      workoutType: 'Express Workout',
      exercises: ['tabata', 'quick-hiit', 'bodyweight-circuit', 'stretch-routine'],
      frequency: 'Daily',
      intensity: 'high'
    }
  },
  {
    id: 'rule-011',
    name: 'Female Specific - Core & Lower Body',
    conditions: {
      gender: ['female'],
      fitnessGoal: ['general-fitness', 'muscle-gain']
    },
    recommendations: {
      workoutType: 'Core & Lower Body Focus',
      exercises: ['pilates', 'glute-bridges', 'leg-raises', 'planks'],
      frequency: '4-5 times per week',
      intensity: 'moderate'
    }
  },
  {
    id: 'rule-012',
    name: 'Male Upper Body Focus',
    conditions: {
      gender: ['male'],
      fitnessGoal: ['muscle-gain'],
      exercisePreference: ['gym']
    },
    recommendations: {
      workoutType: 'Upper Body Strength',
      exercises: ['bench-press', 'rows', 'shoulder-press', 'bicep-curls'],
      frequency: '4-6 times per week',
      intensity: 'high'
    }
  },
  {
    id: 'rule-013',
    name: 'Beginner General Fitness',
    conditions: {
      fitnessGoal: ['general-fitness'],
      age: { min: 25, max: 45 }
    },
    recommendations: {
      workoutType: 'Beginner Full Body',
      exercises: ['basic-squats', 'modified-pushups', 'walking', 'basic-stretches'],
      frequency: '3-4 times per week',
      intensity: 'low'
    }
  },
  {
    id: 'rule-014',
    name: 'Outdoor Enthusiast',
    conditions: {
      exercisePreference: ['outdoor'],
      fitnessGoal: ['endurance', 'general-fitness']
    },
    recommendations: {
      workoutType: 'Outdoor Adventure',
      exercises: ['trail-running', 'rock-climbing', 'kayaking', 'outdoor-bootcamp'],
      frequency: '4-5 times per week',
      intensity: 'moderate'
    }
  },
  {
    id: 'rule-015',
    name: 'Long Session Full Body',
    conditions: {
      timeAvailability: [60],
      fitnessGoal: ['general-fitness', 'muscle-gain']
    },
    recommendations: {
      workoutType: 'Full Body Workout',
      exercises: ['compound-movements', 'circuit-training', 'cardio-strength-combo', 'flexibility-cooldown'],
      frequency: '3-4 times per week',
      intensity: 'moderate'
    }
  }
];