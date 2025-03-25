
import Navigation from "@/components/Navigation";
import { QrCode, Apple, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Download Our App
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 mb-12"
          >
            Get our recipe app on your device
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-8 mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Apple className="w-6 h-6" />
              Download for iOS
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Smartphone className="w-6 h-6" />
              Download for Android
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.div 
              className="p-8 bg-white rounded-lg shadow-lg"
              animate={{ boxShadow: ["0px 4px 10px rgba(0,0,0,0.1)", "0px 8px 30px rgba(0,0,0,0.2)", "0px 4px 10px rgba(0,0,0,0.1)"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <QrCode className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-600">Scan to download</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Download;
