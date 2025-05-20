
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRecipes } from '@/contexts/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface QuizAnswers {
  timeToMake: string;
  mealType: string;
  dietaryNeeds: string[];
}

interface RecipeQuizFormProps {
  onSubmit: () => void;
}

const timeToMakeOptions = [
  { id: 'time-short', label: 'Quick (30 mins or less)' },
  { id: 'time-medium', label: 'Moderate (30-60 mins)' },
  { id: 'time-long', label: 'Long (60+ mins)' },
];

const mealTypeOptions = [
  { id: 'meal-breakfast', label: 'Breakfast' },
  { id: 'meal-lunch', label: 'Lunch' },
  { id: 'meal-dinner', label: 'Dinner' },
  { id: 'meal-dessert', label: 'Dessert' },
];

const dietaryNeedsOptions = [
  { id: 'diet-vegetarian', label: 'Vegetarian' },
  { id: 'diet-vegan', label: 'Vegan' },
  { id: 'diet-gluten-free', label: 'Gluten-Free' },
  { id: 'diet-dairy-free', label: 'Dairy-Free' },
];

const RecipeQuizForm: React.FC<RecipeQuizFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    timeToMake: '',
    mealType: '',
    dietaryNeeds: [],
  });

  const { filters, setFilters } = useRecipes();
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleRadioChange = (question: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleDietaryNeedsChange = (need: string) => {
    setAnswers(prev => {
      const newDietaryNeeds = prev.dietaryNeeds.includes(need)
        ? prev.dietaryNeeds.filter(item => item !== need)
        : [...prev.dietaryNeeds, need];
      return { ...prev, dietaryNeeds: newDietaryNeeds };
    });
  };

  const handleFindRecipes = () => {
    console.log('Quiz Answers:', answers);

    const { dietaryNeeds, mealType } = answers;
    const selectedDietaryNeeds = dietaryNeeds.map(d => d.toLowerCase());
    
    let mealTypeValue: string[] = [];
    if (mealType) {
      mealTypeValue = [mealType.toLowerCase()];
    }
    
    const newFilterState = {
      ...filters,
      dietaryRestrictions: selectedDietaryNeeds.length > 0 ? selectedDietaryNeeds : filters.dietaryRestrictions,
      mealType: mealTypeValue.length > 0 ? mealTypeValue : filters.mealType
    };
    
    setFilters(newFilterState);
    
    onSubmit();
    navigate('/find-recipe');
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
            <h3 className="text-xl font-semibold">Time to Make</h3>
            <p className="text-sm text-gray-600">How much time do you have to cook?</p>
            <RadioGroup defaultValue={answers.timeToMake} onValueChange={(value) => handleRadioChange('timeToMake', value)} className="grid grid-cols-1 gap-4">
              {timeToMakeOptions.map(option => (
                <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option.label} id={option.id} className="h-4 w-4 text-orange-500 focus:ring-0 focus:ring-offset-0" />
                  <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer flex-grow">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
            <h3 className="text-xl font-semibold">Meal Type</h3>
            <p className="text-sm text-gray-600">What kind of meal are you looking for?</p>
            <RadioGroup defaultValue={answers.mealType} onValueChange={(value) => handleRadioChange('mealType', value)} className="grid grid-cols-1 gap-4">
              {mealTypeOptions.map(option => (
                <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option.label} id={option.id} className="h-4 w-4 text-orange-500 focus:ring-0 focus:ring-offset-0" />
                  <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer flex-grow">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
            <h3 className="text-xl font-semibold">Dietary Needs</h3>
            <p className="text-sm text-gray-600">Select any dietary restrictions or preferences.</p>
            <div className="grid grid-cols-2 gap-4">
              {dietaryNeedsOptions.map(option => (
                <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Checkbox
                    id={option.id}
                    checked={answers.dietaryNeeds.includes(option.label)}
                    onCheckedChange={() => handleDietaryNeedsChange(option.label)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer flex-grow">{option.label}</Label>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-orange-500 text-white py-6 px-8 rounded-t-lg">
        <h2 className="text-2xl font-bold text-center">Recipe Finder Quiz</h2>
        <p className="text-sm text-white/90 text-center mt-1">Answer a few questions to find the perfect recipe for you!</p>
      </div>

      <div className="p-8 bg-white">
        <AnimatePresence mode="wait" initial={false}>
          {renderStepContent()}
        </AnimatePresence>
      </div>

      <div className="bg-gray-50 px-8 py-4 flex justify-between items-center rounded-b-lg">
        <Button 
          onClick={handlePrevious} 
          disabled={currentStep === 1} 
          variant="outline" 
          className="transition-transform hover:scale-105"
          type="button"
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </Button>
        <div className="text-sm text-gray-600">Step {currentStep} of 3</div>
        {currentStep < 3 ? (
          <Button 
            onClick={handleNext} 
            className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105"
            type="button"
          >
            Next
            <ChevronRight size={20} className="ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handleFindRecipes} 
            className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105 flex items-center justify-center"
            type="button"
          >
            <Search size={20} className="mr-2" />
            <span>Find Recipes</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RecipeQuizForm;
