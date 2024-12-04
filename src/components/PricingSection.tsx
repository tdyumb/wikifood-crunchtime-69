import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
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
                  {plan.price === "0" ? (
                    <span>Free</span>
                  ) : (
                    <>
                      ${plan.price}<span className="text-base font-normal">/month</span>
                    </>
                  )}
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
                <Button
                  className={`w-full ${
                    plan.featured
                      ? 'bg-white text-wiki-900 hover:bg-wiki-100'
                      : 'bg-wiki-900 text-white hover:bg-wiki-800'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const pricingPlans = [
  {
    name: "Basic",
    price: "0",
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

export default PricingSection;