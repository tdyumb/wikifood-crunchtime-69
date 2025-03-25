
import { GraduationCap, Globe, Trophy } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section className="bg-[#ff9933] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose WikiFoods</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of food enthusiasts who have transformed their cooking journey with WikiFoods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-wiki-800 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Expert-Led Learning",
    description: "Learn from professional chefs and culinary experts through detailed video tutorials and interactive lessons."
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Global Cuisine Library",
    description: "Access thousands of authentic recipes from different cultures and traditions around the world."
  },
  {
    icon: <Trophy className="w-8 h-8 text-white" />,
    title: "Skill Development",
    description: "Progress from basic to advanced cooking techniques with our structured learning paths."
  }
];

export default WhyChooseSection;
