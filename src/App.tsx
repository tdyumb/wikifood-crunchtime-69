
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FindRecipe from "./pages/FindRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RecipeProvider } from "./contexts/RecipeContext";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/find-recipe" element={<FindRecipe />} />
          <Route path="/find-recipes" element={<Navigate to="/find-recipe" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </RecipeProvider>
    </BrowserRouter>
  );
}

export default App;
