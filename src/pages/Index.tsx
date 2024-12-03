import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wiki-100 to-wiki-50 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-wiki-600 bg-wiki-100 rounded-full text-sm font-medium">
              Welcome to WikiFoods
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-wiki-900">
              Discover the World of Food Knowledge
            </h1>
            <p className="text-xl text-wiki-600 mb-8">
              Your comprehensive guide to understanding food, nutrition, and culinary arts
            </p>
            <button className="px-8 py-4 bg-wiki-900 text-white rounded-lg hover:bg-wiki-800 transition-colors">
              Start Exploring
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
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

      {/* CTA Section */}
      <section className="py-24 bg-wiki-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Food Journey?
            </h2>
            <p className="text-wiki-100 mb-8">
              Join our community of food enthusiasts and experts today.
            </p>
            <button className="px-8 py-4 bg-white text-wiki-900 rounded-lg hover:bg-wiki-50 transition-colors">
              Get Started
            </button>
          </motion.div>
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