import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactForm from "@/components/ContactForm";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <NewsletterPopup />
      <HeroSection />
      <WhyChooseSection />
      <PricingSection />
      <div className="py-24 bg-white">
        <ContactForm />
      </div>
      
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