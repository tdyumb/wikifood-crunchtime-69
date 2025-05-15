
import React from 'react';
import { Clock, Star, LeafyGreen, Apple, Search } from 'lucide-react'; // Using LeafyGreen for general dietary, Apple for flavor
import { Button } from '@/components/ui/button'; // Importing Button for a potential future "Take the Quiz" button

const RecipeQuizTeaser = () => {
  const filterQuestions = [
    {
      id: 1,
      question: "Time to Make",
      example: "e.g. <1hr, 1–3hrs, 3+hrs",
      icon: <Clock className="h-5 w-5 text-orange-500" />
    },
    {
      id: 2,
      question: "Skill Level",
      example: "Easy, Intermediate, Advanced",
      icon: <Star className="h-5 w-5 text-orange-500" />
    },
    {
      id: 3,
      question: "Dietary Needs",
      example: "Vegan, Nut-Free, etc.",
      icon: <LeafyGreen className="h-5 w-5 text-orange-500" />
    },
    {
      id: 4,
      question: "Flavor Profile",
      example: "Fruity, Chocolatey, etc.",
      icon: <Apple className="h-5 w-5 text-orange-500" />
    },
    {
      id: 5,
      question: "Available Ingredients",
      example: "optional",
      icon: <Search className="h-5 w-5 text-orange-500" /> // Using Search as a generic icon for ingredients
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Can't find your perfect recipe?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Try our quick quiz! Answer 5 simple questions and we'll help you discover delicious recipes tailored to your preferences.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {filterQuestions.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-3 p-3 bg-orange-100 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-1">{item.question}</h3>
              <p className="text-sm text-gray-500">{item.example}</p>
            </div>
          ))}
        </div>

        {/* 
          A button can be added here later if you want to link to an actual quiz page.
          For example:
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Take the Quiz!
          </Button> 
        */}
        <p className="text-sm text-gray-500 mt-2">
            (Quiz feature coming soon!)
        </p>

      </div>
    </section>
  );
};

export default RecipeQuizTeaser;

