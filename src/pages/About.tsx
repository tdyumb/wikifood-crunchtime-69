
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-8"
          >
            About WikiFoods
          </motion.h1>
          
          <div className="max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 mb-6"
            >
              WikiFoods is your ultimate destination for discovering, learning, and mastering the art of cooking. 
              Our platform brings together food enthusiasts, home cooks, and professional chefs from around the world.
            </motion.p>
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8 my-12"
            >
              <motion.div 
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To make cooking accessible, enjoyable, and rewarding for everyone, 
                  regardless of their experience level.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To create a global community where culinary knowledge is shared, 
                  celebrated, and preserved for future generations.
                </p>
              </motion.div>
            </motion.div>

            {/* Recipe Attribution Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md my-12"
            >
              <h2 className="text-2xl font-bold mb-6">Recipe Attributions</h2>
              <p className="text-gray-600 mb-4">
                We'd like to express our sincere gratitude to the following websites for their fantastic recipes that 
                helped make WikiFoods possible:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.tasteofhome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Taste of Home</span>
                </a>
                <a 
                  href="https://www.allrecipes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Allrecipes</span>
                </a>
                <a 
                  href="https://www.bettycrocker.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Betty Crocker</span>
                </a>
                <a 
                  href="https://www.inspiredtaste.net"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Inspired Taste</span>
                </a>
                <a 
                  href="https://foolproofliving.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Foolproof Living</span>
                </a>
                <a 
                  href="https://www.loveandlemons.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <ExternalLink size={16} className="mr-2 text-gray-500" />
                  <span className="text-blue-600">Love and Lemons</span>
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                Each recipe on our platform includes a direct link to its original source. We believe in giving proper 
                credit to these amazing content creators who have inspired our culinary journey.
              </p>
            </motion.div>

            {/* TSA Forms Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md my-12"
            >
              <h2 className="text-2xl font-bold mb-6">TSA Forms</h2>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://pdf.ac/1n7WMi")}
                >
                  <Download className="mr-2" />
                  Copyright Checklist
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://pdf.ac/4dfRqT")}
                >
                  <Download className="mr-2" />
                  Plan of Work Log
                </Button>
              </div>
            </motion.div>

            {/* Credits Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md my-12"
            >
              <h2 className="text-2xl font-bold mb-6">Credits</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg">TSA Team</h3>
                  <p>Special thanks to our wonderful TSA team for their dedication and hard work in making this project possible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Images</h3>
                  <p>All images are provided by Unsplash - Beautiful, free images and photos that you can download and use for any project. These images are copyright-free and were carefully selected by our team.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hosting</h3>
                  <p>This website is proudly hosted on AWS Cloud Web Hosting Services, ensuring reliable and scalable performance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
