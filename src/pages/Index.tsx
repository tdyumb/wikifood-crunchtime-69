import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RecipeFilter from "@/components/RecipeFilter";
import RecipeCard from "@/components/RecipeCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <HeroSection />

      {/* Recipe Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RecipeFilter />
        </div>
      </section>

      {/* Recipe Cards Section */}
      <section className="py-16 bg-wiki-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RecipeCard
              title="Easy Pancakes"
              description="Fluffy and delicious pancakes perfect for breakfast"
              image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800"
            />
            <RecipeCard
              title="Chicken Stir Fry"
              description="A quick and healthy stir-fry loaded with vegetables"
              image="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800"
            />
            <RecipeCard
              title="Vegetarian Pasta"
              description="Fresh and flavorful pasta with seasonal vegetables"
              image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose WikiFoods</h2>
            <p className="text-wiki-600 max-w-2xl mx-auto">
              Discover how we're revolutionizing food knowledge sharing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-delay">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-wiki-900 mb-4 text-2xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-wiki-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-wiki-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="About WikiFoods"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-wiki-600 mb-6">
                WikiFoods is dedicated to making food knowledge accessible to everyone.
                We believe in the power of shared culinary wisdom and its ability to
                bring people together.
              </p>
              <button className="px-6 py-3 bg-wiki-900 text-white rounded-lg hover:bg-wiki-800 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-wiki-50">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wiki-800 text-wiki-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">WikiFoods</h3>
              <p className="text-sm">
                Your trusted source for food knowledge and culinary inspiration.
              </p>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-wiki-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 WikiFoods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: "🔍",
    title: "Comprehensive Search",
    description: "Find exactly what you're looking for with our powerful search tools.",
  },
  {
    icon: "📚",
    title: "Expert Content",
    description: "Access verified information from food experts and professionals.",
  },
  {
    icon: "🌐",
    title: "Global Community",
    description: "Connect with food enthusiasts from around the world.",
  },
];

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
