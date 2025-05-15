import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRecipes } from '@/contexts/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface QuizAnswers {
  timeToMake: string;
  skillLevel: string;
  dietaryNeeds: string[];
  flavorProfile: string;
  availableIngredients: string;
}

// This type definition is for the setFilters from useRecipes context.
// Ensure it matches the actual type in RecipeContext.ts for consistency.
type RecipeFilterStateFromContext = {
  cuisineType: string[];
  mealType: string[];
  dietaryRestrictions: string[];
};

interface RecipeQuizFormProps {
  onSubmit: () => void;
}

const timeToMakeOptions = [
  { id: 'time-short', label: 'Quick (30 mins or less)' },
  { id: 'time-medium', label: 'Moderate (30-60 mins)' },
  { id: 'time-long', label: 'Long (60+ mins)' },
];

const skillLevelOptions = [
  { id: 'skill-beginner', label: 'Beginner' },
  { id: 'skill-intermediate', label: 'Intermediate' },
  { id: 'skill-advanced', label: 'Advanced' },
];

const dietaryNeedsOptions = [
  { id: 'diet-vegetarian', label: 'Vegetarian' },
  { id: 'diet-vegan', label: 'Vegan' },
  { id: 'diet-gluten-free', label: 'Gluten-Free' },
  { id: 'diet-dairy-free', label: 'Dairy-Free' },
];

const flavorProfileOptions = [
  { id: 'flavor-sweet', label: 'Sweet' },
  { id: 'flavor-savory', label: 'Savory' },
  { id: 'flavor-spicy', label: 'Spicy' },
  { id: 'flavor-umami', label: 'Umami' },
];

const RecipeQuizForm: React.FC<RecipeQuizFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    timeToMake: '',
    skillLevel: '',
    dietaryNeeds: [],
    flavorProfile: '',
    availableIngredients: '',
  });

  const { setFilters } = useRecipes();
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleInputChange = (question: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
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

    const { dietaryNeeds } = answers;
    const selectedDietaryNeeds = dietaryNeeds.map(d => d.toLowerCase());
    
    setFilters((prevFilters: RecipeFilterStateFromContext) => ({
      ...prevFilters,
      dietaryRestrictions: selectedDietaryNeeds.length > 0 ? selectedDietaryNeeds : prevFilters.dietaryRestrictions,
      // Removed mealType update from here as answers.timeToMake is not a mealType.
      // mealType: prevFilters.mealType, // Keep existing mealType filters
    }));
    
    onSubmit(); // Call the onSubmit prop (e.g., to close the dialog)
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
            <h3 className="text-xl font-semibold">Skill Level</h3>
            <p className="text-sm text-gray-600">What's your cooking skill level?</p>
            <RadioGroup defaultValue={answers.skillLevel} onValueChange={(value) => handleRadioChange('skillLevel', value)} className="grid grid-cols-1 gap-4">
              {skillLevelOptions.map(option => (
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
      case 4:
        return (
          <motion.div key="step4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
            <h3 className="text-xl font-semibold">Flavor Profile</h3>
            <p className="text-sm text-gray-600">What kind of flavors are you in the mood for?</p>
            <RadioGroup defaultValue={answers.flavorProfile} onValueChange={(value) => handleRadioChange('flavorProfile', value)} className="grid grid-cols-2 gap-4">
              {flavorProfileOptions.map(option => (
                <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option.label} id={option.id} className="h-4 w-4 text-orange-500 focus:ring-0 focus:ring-offset-0" />
                  <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer flex-grow">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        );
      case 5:
        return (
          <motion.div key="step5" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
            <h3 className="text-xl font-semibold">Available Ingredients</h3>
            <p className="text-sm text-gray-600">List any ingredients you have on hand (optional).</p>
            <Input
              type="text"
              placeholder="e.g., chicken, rice, vegetables"
              value={answers.availableIngredients}
              onChange={(e) => handleInputChange('availableIngredients', e.target.value)}
              className="border rounded-lg py-2 px-3 w-full focus:ring-0 focus:ring-offset-0"
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-orange-500 text-white py-6 px-8">
          <h2 className="text-3xl font-bold text-center">Recipe Finder Quiz</h2>
          <p className="text-md text-white/80 text-center mt-2">Answer a few questions to find the perfect recipe for you!</p>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait" initial={false}>
            {renderStepContent()}
          </AnimatePresence>
        </div>

        <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
          <Button onClick={handlePrevious} disabled={currentStep === 1} variant="outline" className="transition-transform hover:scale-105">
            <ChevronLeft size={20} className="mr-2" />
            Previous
          </Button>
          <div className="text-sm text-gray-600">Step {currentStep} of 5</div>
          {currentStep < 5 ? (
            <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105">
              Next
              <ChevronRight size={20} className="ml-2" />
            </Button>
          ) : (
            <Button onClick={handleFindRecipes} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 rounded-lg shadow-lg transition-transform hover:scale-105 flex items-center justify-center space-x-2">
              <Search size={20} />
              <span>Find Recipes</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeQuizForm;
