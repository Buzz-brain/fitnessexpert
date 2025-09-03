import { UserInput, Rule, WorkoutPlan, Exercise } from '../types';
import { rules } from '../data/rules';
import { exercises } from '../data/exercises';
import { motivationalQuotes, fitnessaTips } from '../data/quotes';

export class FitnessInferenceEngine {
  private rules: Rule[] = rules;
  private exercises: Exercise[] = exercises;

  public generateWorkoutPlan(userInput: UserInput): WorkoutPlan {
    const matchedRules = this.forwardChaining(userInput);
    
    if (matchedRules.length === 0) {
      return this.getDefaultPlan();
    }

    // Use the best matching rule (first one in priority)
    const bestRule = matchedRules[0];
    const recommendedExercises = this.getExercisesByIds(bestRule.recommendations.exercises);
    
    return this.buildWorkoutPlan(userInput, bestRule, recommendedExercises);
  }

  private forwardChaining(userInput: UserInput): Rule[] {
    const matchedRules: Rule[] = [];

    for (const rule of this.rules) {
      if (this.evaluateRule(rule, userInput)) {
        matchedRules.push(rule);
      }
    }

    // Sort by specificity (rules with more conditions first)
    return matchedRules.sort((a, b) => 
      this.getRuleSpecificity(b) - this.getRuleSpecificity(a)
    );
  }

  private evaluateRule(rule: Rule, userInput: UserInput): boolean {
    const conditions = rule.conditions;

    // Check age condition
    if (conditions.age) {
      if (conditions.age.min && userInput.age < conditions.age.min) return false;
      if (conditions.age.max && userInput.age > conditions.age.max) return false;
    }

    // Check gender condition
    if (conditions.gender && !conditions.gender.includes(userInput.gender)) {
      return false;
    }

    // Check fitness goal condition
    if (conditions.fitnessGoal && !conditions.fitnessGoal.includes(userInput.fitnessGoal)) {
      return false;
    }

    // Check exercise preference condition
    if (conditions.exercisePreference && !conditions.exercisePreference.includes(userInput.exercisePreference)) {
      return false;
    }

    // Check time availability condition
    if (conditions.timeAvailability && !conditions.timeAvailability.includes(userInput.timeAvailability)) {
      return false;
    }

    // Check health conditions
    if (conditions.healthConditions) {
      if (conditions.healthConditions.includes) {
        const hasRequiredCondition = conditions.healthConditions.includes.some(condition =>
          userInput.healthConditions.includes(condition)
        );
        if (!hasRequiredCondition) return false;
      }

      if (conditions.healthConditions.excludes) {
        const hasExcludedCondition = conditions.healthConditions.excludes.some(condition =>
          userInput.healthConditions.includes(condition)
        );
        if (hasExcludedCondition) return false;
      }
    }

    return true;
  }

  private getRuleSpecificity(rule: Rule): number {
    let specificity = 0;
    const conditions = rule.conditions;

    if (conditions.age) specificity += 2;
    if (conditions.gender) specificity += 1;
    if (conditions.fitnessGoal) specificity += 3;
    if (conditions.exercisePreference) specificity += 2;
    if (conditions.timeAvailability) specificity += 2;
    if (conditions.healthConditions) specificity += 4;

    return specificity;
  }

  private getExercisesByIds(exerciseIds: string[]): Exercise[] {
    return this.exercises.filter(exercise => exerciseIds.includes(exercise.id));
  }

  private buildWorkoutPlan(userInput: UserInput, rule: Rule, recommendedExercises: Exercise[]): WorkoutPlan {
    const workoutType = rule.recommendations.workoutType;
    const frequency = rule.recommendations.frequency;
    const intensity = rule.recommendations.intensity;

    // If no specific exercises found, get general exercises based on workout type
    let exercises = recommendedExercises;
    if (exercises.length === 0) {
      exercises = this.getExercisesByWorkoutType(workoutType);
    }

    // Limit exercises based on time availability
    const maxExercises = userInput.timeAvailability === 15 ? 4 : 
                        userInput.timeAvailability === 30 ? 6 : 8;
    exercises = exercises.slice(0, maxExercises);

    const caloriesBurned = this.estimateCaloriesBurned(userInput, exercises);
    const tips = this.generatePersonalizedTips(userInput, intensity);
    const quote = this.getRandomMotivationalQuote();

    return {
      title: `Personalized ${workoutType} Plan`,
      description: `A tailored ${intensity}-intensity ${workoutType.toLowerCase()} program designed specifically for your goals and preferences.`,
      frequency,
      duration: `${userInput.timeAvailability} minutes per session`,
      exercises,
      tips,
      motivationalQuote: quote,
      caloriesBurned
    };
  }

  private getExercisesByWorkoutType(workoutType: string): Exercise[] {
    const typeMap: { [key: string]: string[] } = {
      'HIIT': ['burpees', 'mountain-climbers', 'jumping-jacks', 'high-knees', 'tabata'],
      'Strength Training': ['deadlifts', 'squats', 'bench-press', 'pull-ups'],
      'Yoga & Stretching': ['yoga-flow', 'pigeon-pose', 'planks'],
      'Cardio Training': ['running', 'swimming', 'walking'],
      'Low Impact Training': ['walking', 'swimming', 'planks'],
      'Full Body Workout': ['squats', 'planks', 'burpees', 'mountain-climbers']
    };

    const exerciseIds = typeMap[workoutType] || ['walking', 'squats', 'planks'];
    return this.getExercisesByIds(exerciseIds);
  }

  private estimateCaloriesBurned(userInput: UserInput, exercises: Exercise[]): string {
    let baseCalories = userInput.timeAvailability * 8; // 8 calories per minute base

    // Adjust for age and gender
    if (userInput.age > 50) baseCalories *= 0.85;
    if (userInput.gender === 'female') baseCalories *= 0.9;

    // Adjust for workout intensity
    const hasHighIntensity = exercises.some(ex => 
      ex.type.includes('HIIT') || ex.type.includes('Strength')
    );
    
    if (hasHighIntensity) baseCalories *= 1.4;
    else if (exercises.some(ex => ex.type.includes('Cardio'))) baseCalories *= 1.2;

    return `${Math.round(baseCalories)}-${Math.round(baseCalories * 1.3)} calories`;
  }

  private generatePersonalizedTips(userInput: UserInput, intensity: string): string[] {
    const tips = [...fitnessaTips];
    const personalizedTips: string[] = [];

    // Add age-specific tips
    if (userInput.age > 50) {
      personalizedTips.push("Focus on maintaining bone density with weight-bearing exercises.");
    }

    // Add goal-specific tips
    if (userInput.fitnessGoal === 'weight-loss') {
      personalizedTips.push("Combine cardio with strength training for optimal fat burning.");
    } else if (userInput.fitnessGoal === 'muscle-gain') {
      personalizedTips.push("Eat protein within 30 minutes after your workout for muscle recovery.");
    }

    // Add health condition tips
    if (userInput.healthConditions.includes('hypertension')) {
      personalizedTips.push("Monitor your heart rate and avoid holding your breath during exercises.");
    }

    // Add 3-4 random general tips
    const randomTips = tips.sort(() => Math.random() - 0.5).slice(0, 3);
    
    return [...personalizedTips, ...randomTips];
  }

  private getRandomMotivationalQuote(): string {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  }

  private getDefaultPlan(): WorkoutPlan {
    return {
      title: 'General Fitness Plan',
      description: 'A balanced workout routine suitable for general fitness goals.',
      frequency: '3-4 times per week',
      duration: '30 minutes per session',
      exercises: this.getExercisesByIds(['walking', 'squats', 'planks', 'jumping-jacks']),
      tips: fitnessaTips.slice(0, 4),
      motivationalQuote: this.getRandomMotivationalQuote(),
      caloriesBurned: '200-300 calories'
    };
  }
}