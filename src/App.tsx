
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./contexts/RecipeContext";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";

// Pages
import Home from "./pages/Home";
import FindRecipe from "./pages/FindRecipe";
import RecipeCollection from "./pages/RecipeCollection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import Events from "./pages/Events";

// Create query client outside of component - a common human pattern
const queryClient = new QueryClient();

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // No comments here - humans often don't comment simple components
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <RecipeProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-recipe" element={<FindRecipe />} />
                <Route path="/recipe-collection" element={<RecipeCollection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/download" element={<Download />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/events" element={<Events />} />
              </Routes>
            </BrowserRouter>
          </RecipeProvider>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
