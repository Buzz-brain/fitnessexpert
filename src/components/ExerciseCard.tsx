import { motion } from 'framer-motion';
import { Play, Clock, Target, Award } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

const ExerciseCard = ({ exercise, index }: ExerciseCardProps) => {
  const difficultyColors = {
    beginner: 'from-green-500 to-emerald-500',
    intermediate: 'from-yellow-500 to-orange-500',
    advanced: 'from-red-500 to-pink-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
    >
      {/* Video Section */}
      <div className="relative aspect-video bg-gray-900">
        <iframe
          src={exercise.videoUrl}
          title={exercise.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-semibold text-white
            bg-gradient-to-r ${difficultyColors[exercise.difficulty]}
          `}>
            {exercise.difficulty}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {exercise.name}
            </h3>
            <p className="text-cyan-400 text-sm font-medium">
              {exercise.type}
            </p>
          </div>
          <Play className="w-6 h-6 text-cyan-400" />
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {exercise.description}
        </p>

        {/* Exercise Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">{exercise.duration}</span>
          </div>
          {exercise.sets && (
            <div className="flex items-center space-x-2 text-gray-300">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-sm">{exercise.sets}</span>
            </div>
          )}
          {exercise.reps && (
            <div className="flex items-center space-x-2 text-gray-300">
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-sm">{exercise.reps}</span>
            </div>
          )}
        </div>

        {/* Equipment */}
        {exercise.equipment.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exercise.equipment.map((item) => (
              <span
                key={item}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExerciseCard;