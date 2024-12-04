import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RecipeFilter from "@/components/RecipeFilter";
import RecipeCard from "@/components/RecipeCard";
import ContactForm from "@/components/ContactForm";
import { Check } from "lucide-react";

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

      {/* Value Proposition Section */}
      <section className="py-24 bg-wiki-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose WikiFoods</h2>
            <p className="text-wiki-300 max-w-2xl mx-auto">
              Join thousands of food enthusiasts who have transformed their cooking journey with WikiFoods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-wiki-800 rounded-full flex items-center justify-center">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{prop.title}</h3>
                <p className="text-wiki-300">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
            <p className="text-wiki-600 max-w-2xl mx-auto">
              Start your culinary journey today with our flexible subscription options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-2xl p-8 ${
                  plan.featured ? 'bg-wiki-900 text-white' : 'bg-wiki-50'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-6">
                    ${plan.price}<span className="text-base font-normal">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 mr-2" />
                        <span className={plan.featured ? 'text-wiki-100' : 'text-wiki-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg transition-colors ${
                      plan.featured
                        ? 'bg-white text-wiki-900 hover:bg-wiki-100'
                        : 'bg-wiki-900 text-white hover:bg-wiki-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
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

const valueProps = [
  {
    icon: "🎓",
    title: "Expert-Led Learning",
    description: "Learn from professional chefs and culinary experts through detailed video tutorials and interactive lessons.",
  },
  {
    icon: "🌍",
    title: "Global Cuisine Library",
    description: "Access thousands of authentic recipes from different cultures and traditions around the world.",
  },
  {
    icon: "💪",
    title: "Skill Development",
    description: "Progress from basic to advanced cooking techniques with our structured learning paths.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "9.99",
    features: [
      "Access to basic recipes",
      "Monthly newsletter",
      "Community forum access",
      "Basic cooking tutorials",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "19.99",
    features: [
      "All Basic features",
      "Premium video tutorials",
      "Live cooking sessions",
      "Personal recipe planner",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "49.99",
    features: [
      "All Pro features",
      "Team collaboration",
      "Custom recipe development",
      "Dedicated account manager",
      "API access",
    ],
    featured: false,
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