
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Events = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const dummyEvents = [
    {
      title: "Pasta Making Workshop",
      date: "June 15, 2024",
      location: "Chicago, IL"
    },
    {
      title: "Summer BBQ Festival",
      date: "July 4, 2024",
      location: "Austin, TX"
    },
    {
      title: "Vegan Cooking Masterclass",
      date: "August 12, 2024",
      location: "Portland, OR"
    }
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
            Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600 mb-12"
          >
            Join our upcoming cooking events and food festivals.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto grid gap-6"
          >
            {dummyEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md p-6 flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mr-6 bg-[#ff9933] text-white p-3 rounded-full">
                  <Calendar />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">{event.date} • {event.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
