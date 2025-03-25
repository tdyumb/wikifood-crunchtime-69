
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, text: "info@wikifoods.com" },
    { icon: <Phone className="h-6 w-6" />, text: "(555) 123-4567" },
    { icon: <MapPin className="h-6 w-6" />, text: "123 Cooking St, Foodville, CA" }
  ];

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
            Contact Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600 mb-12"
          >
            Have questions or feedback? We'd love to hear from you!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto"
          >
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className="text-[#ff9933]">{item.icon}</div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
