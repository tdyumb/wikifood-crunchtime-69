
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600"
          >
            Coming soon! Stay tuned for our latest culinary articles and insights.
          </motion.p>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-24 h-24 border-4 border-[#ff9933] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-center mt-4 text-[#ff9933] font-medium">Cooking up some great content...</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
