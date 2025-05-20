
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RecipeQuizTeaser = () => {
  const navigate = useNavigate();

  const handleTakeQuiz = () => {
    navigate('/find-recipe');
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Looking for the perfect beginner recipe?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Try our quick filter! Find delicious recipes tailored to your time available and dietary preferences.
        </p>
        
        <Button 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={handleTakeQuiz}
        >
          Find Recipes
        </Button>
      </div>
    </section>
  );
};

export default RecipeQuizTeaser;
