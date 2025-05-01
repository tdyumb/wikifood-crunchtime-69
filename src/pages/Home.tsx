
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RecipeFilter from "@/components/RecipeFilter";
import RecipeCard from "@/components/RecipeCard";
import { useRecipes } from "@/contexts/RecipeContext";
import ContactForm from "@/components/ContactForm";
import WhyChooseSection from "@/components/WhyChooseSection";
import { motion } from "framer-motion";

const Home = () => {
  const { filteredRecipes } = useRecipes();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Recipe Filter Section */}
      <motion.section 
        id="recipe-filter-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 px-4"
      >
        <RecipeFilter />
      </motion.section>

      {/* Recipe Collection */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 px-4 bg-white"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            variants={container}
            initial="hidden"
            animate="show"
            key={filteredRecipes.length} // Re-animate when recipes change
          >
            {filteredRecipes.map((recipe, index) => (
              <motion.div key={recipe.id} variants={item} custom={index}>
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  image={recipe.image}
                  cookTime={recipe.cookTime}
                  servings={recipe.servings}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Contact Form Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ContactForm />
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#ff9933] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-4">WikiFoods</h3>
              <p className="text-sm text-white/80">
                Your trusted source for food knowledge and culinary inspiration.
              </p>
            </motion.div>
            {footerLinks.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <span className="text-sm text-white/80 cursor-pointer hover:text-white">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80"
          >
            <p>&copy; 2024 WikiFoods. All rights reserved.</p>
          </motion.div>
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

export default Home;
