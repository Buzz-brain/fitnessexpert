import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Target, 
  Play, 
  Sparkles, 
  Star,
  Users,
  Award,
  Zap,
  Heart,
  Activity,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Advanced rule-based system analyzes your profile to create the perfect workout plan",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Tailored to Your Goals & Health",
      description: "Personalized plans considering your fitness goals, health conditions, and preferences",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Play,
      title: "Real Workout Videos",
      description: "Professional exercise demonstrations with embedded YouTube videos for each workout",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Stylish & Easy to Use",
      description: "Beautiful, intuitive interface with smooth animations and responsive design",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      quote: "Finally, a fitness planner that understands me! The AI recommendations are spot-on.",
      author: "Sarah M.",
      role: "Fitness Enthusiast",
      rating: 5
    },
    {
      quote: "I love how it considers my health conditions. The workouts are perfect for my needs.",
      author: "Mike R.",
      role: "Busy Professional",
      rating: 5
    },
    {
      quote: "The video demonstrations make it so easy to follow along. Best fitness app ever!",
      author: "Emma L.",
      role: "Beginner",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Workouts Generated", icon: Activity },
    { number: "15+", label: "Expert Rules", icon: Brain },
    { number: "98%", label: "User Satisfaction", icon: Heart },
    { number: "50+", label: "Exercise Types", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity }
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              y: [-20, 20, -20]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity }
            }}
            className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-lg"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold mb-8 shadow-lg shadow-cyan-500/25"
            >
              <Zap className="w-5 h-5" />
              <span>AI-Powered Fitness Expert</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              Fitness Planner
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a personalized workout plan designed just for you with{' '}
              <span className="text-cyan-400 font-semibold">AI-powered expert rules</span>.
              No more guessing – just results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="group flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span>Start Planning</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-2xl hover:bg-gray-700/50 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                AI Fitness Expert?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of personalized fitness with our intelligent recommendation system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Users Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied users who transformed their fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 shadow-2xl"
          >
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered their perfect workout routine. 
              Your personalized fitness plan is just one click away.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span>Get My Workout Plan</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <div className="flex items-center justify-center space-x-6 mt-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Instant Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">FitExpert AI</span>
              </div>
              <p className="text-gray-400">
                Developed as part of Intelligent Systems Project
              </p>
            </div>
            
            <div className="flex space-x-8">
              <button 
                onClick={onGetStarted}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Start Planning
              </button>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 FitExpert AI. Built with ❤️ for intelligent fitness planning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;