
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, Star, LeafyGreen, Apple, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRecipes } from '@/contexts/RecipeContext';
import { toast } from '@/components/ui/use-toast';


interface RecipeQuizFormProps {
  onSubmit: (answers: any) => void;
  onSkip: () => void;
}

const quizSteps = [
  {
    id: 'timeToMake',
    question: 'How much time do you have?',
    icon: <Clock className="h-6 w-6 mr-2 text-orange-500" />,
    type: 'radio',
    options: ['5-15 minutes', '15-30 minutes', '30+ minutes'],
  },
  {
    id: 'skillLevel',
    question: 'What is your skill level?',
    icon: <Star className="h-6 w-6 mr-2 text-orange-500" />,
    type: 'radio',
    options: ['Easy', 'Intermediate', 'Advanced'],
  },
  {
    id: 'dietaryNeeds',
    question: 'Any dietary needs?',
    icon: <LeafyGreen className="h-6 w-6 mr-2 text-orange-500" />,
    type: 'checkbox',
    options: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Nut-Free', 'Dairy-Free'],
  },
  {
    id: 'flavorProfile',
    question: 'What flavor profile are you looking for?',
    icon: <Apple className="h-6 w-6 mr-2 text-orange-500" />, // Could use a more generic flavor icon
    type: 'checkbox',
    options: ['Sweet', 'Savory', 'Spicy', 'Fruity', 'Chocolatey', 'Umami'],
  },
  {
    id: 'availableIngredients',
    question: 'List any key ingredients you have (optional)',
    icon: <Search className="h-6 w-6 mr-2 text-orange-500" />,
    type: 'text',
    placeholder: 'e.g., chicken, tomatoes, pasta',
  },
];

const RecipeQuizForm: React.FC<RecipeQuizFormProps> = ({ onSubmit, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const { setFilters } = useRecipes();

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers((prev: any) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitQuiz = () => {
    // Apply dietary restrictions if any are selected
    if (answers.dietaryNeeds && Array.isArray(answers.dietaryNeeds) && answers.dietaryNeeds.length > 0) {
      setFilters(prevFilters => ({
        ...prevFilters,
        dietaryRestrictions: answers.dietaryNeeds,
      }));
      toast({
        title: "Filters Applied!",
        description: `Dietary needs filter has been updated based on your quiz answers.`,
      });
    } else {
       // Clear dietary restrictions if none selected or not applicable
       setFilters(prevFilters => ({
        ...prevFilters,
        dietaryRestrictions: [], 
      }));
       toast({
        title: "Quiz Completed!",
        description: "No specific dietary filters applied from the quiz.",
      });
    }
    onSubmit(answers);
  };

  const currentQuestion = quizSteps[currentStep];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        {currentQuestion.icon}
        <h3 className="text-lg font-semibold">{currentQuestion.question}</h3>
      </div>

      {currentQuestion.type === 'radio' && currentQuestion.options && (
        <RadioGroup
          value={answers[currentQuestion.id] || ''}
          onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          className="space-y-2"
        >
          {currentQuestion.options.map((option) => (
            <div key={option} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 transition-colors">
              <RadioGroupItem value={option} id={`${currentQuestion.id}-${option}`} />
              <Label htmlFor={`${currentQuestion.id}-${option}`} className="font-normal text-base cursor-pointer flex-grow">{option}</Label>
            </div>
          ))}
        </RadioGroup>
      )}

      {currentQuestion.type === 'checkbox' && currentQuestion.options && (
        <div className="space-y-2">
          {currentQuestion.options.map((option) => (
            <div key={option} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 transition-colors">
              <Checkbox
                id={`${currentQuestion.id}-${option}`}
                checked={answers[currentQuestion.id]?.includes(option) || false}
                onCheckedChange={(checked) => {
                  const currentAnswers = answers[currentQuestion.id] || [];
                  const newAnswers = checked
                    ? [...currentAnswers, option]
                    : currentAnswers.filter((item: string) => item !== option);
                  handleAnswerChange(currentQuestion.id, newAnswers);
                }}
              />
              <Label htmlFor={`${currentQuestion.id}-${option}`} className="font-normal text-base cursor-pointer flex-grow">{option}</Label>
            </div>
          ))}
        </div>
      )}

      {currentQuestion.type === 'text' && (
        <Input
          type="text"
          placeholder={currentQuestion.placeholder}
          value={answers[currentQuestion.id] || ''}
          onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
          className="text-base"
        />
      )}

      <div className="flex justify-between items-center mt-8 pt-4 border-t">
        <Button variant="outline" onClick={onSkip} className="text-sm">
          Skip Quiz
        </Button>
        <div className="flex gap-2">
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePrevious} className="text-sm">
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
          )}
          {currentStep < quizSteps.length - 1 ? (
            <Button onClick={handleNext} className="text-sm bg-orange-500 hover:bg-orange-600">
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmitQuiz} className="text-sm bg-green-500 hover:bg-green-600">
              Find Recipes
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeQuizForm;
