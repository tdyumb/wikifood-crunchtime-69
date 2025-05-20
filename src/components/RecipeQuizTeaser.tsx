
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import RecipeQuizForm from './RecipeQuizForm';

const RecipeQuizTeaser = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const filterQuestions = [
    {
      id: 1,
      question: "Time to Make",
      example: "e.g. <30 mins, 30-60 mins, 60+ mins",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-orange-500">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      id: 2,
      question: "Meal Type",
      example: "Breakfast, Lunch, Dinner, Dessert",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-orange-500">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
        </svg>
      )
    },
    {
      id: 3,
      question: "Dietary Needs",
      example: "Vegetarian, Vegan, Gluten-Free, Dairy-Free",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-orange-500">
          <path d="M2 22c1.25-1.67 2.04-3.92 2.04-6.42 0-4.84-3.55-9.45-3.55-9.45S2 3.18 7.42 3.18c2.95 0 5.63 1.17 7.58 3.06a8.32 8.32 0 0 0 12 11.76" />
          <path d="M16 22c2-2.67 3-6 3-9" />
          <path d="M8 22c-2-2.67-3-6-3-9" />
          <path d="M12 22c-1-1.33-1.5-3-1.5-4.5s.5-3.17 1.5-4.5c1 1.33 1.5 3 1.5 4.5s-.5 3.17-1.5 4.5Z" />
        </svg>
      )
    }
  ];

  const handleQuizSubmit = () => {
    console.log("Recipe quiz submitted. Closing dialog.");
    setIsQuizOpen(false);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Can't find your perfect recipe?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Try our quick quiz! Answer 3 simple questions and we'll help you discover delicious recipes tailored to your preferences.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
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

        <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Take the Quiz!
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] p-0 border-none shadow-xl">
            <RecipeQuizForm onSubmit={handleQuizSubmit} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default RecipeQuizTeaser;
