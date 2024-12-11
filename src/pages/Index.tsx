import Navigation from "@/components/Navigation";
import RecipeFilter from "@/components/RecipeFilter";
import RecipeCard from "@/components/RecipeCard";
import { useRecipes } from "@/contexts/RecipeContext";
import NewsletterPopup from "@/components/NewsletterPopup";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const { filteredRecipes } = useRecipes();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      <NewsletterPopup />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Your Culinary Journey Starts Here
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Discover recipes, share your creations, and join our community of food lovers
        </p>
      </section>

      {/* Recipe Filter Section */}
      <section className="py-12 px-4">
        <RecipeFilter />
      </section>

      {/* Recipe Collection */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Recipe Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                cookTime={recipe.cookTime}
                servings={recipe.servings}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">A little bit about us</h2>
          <div className="max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="About WikiFoods"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">WikiFoods</h3>
              <p className="text-sm text-gray-400">
                Your trusted source for food knowledge and culinary inspiration.
              </p>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 WikiFoods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses"],
  },
];

export default Index;