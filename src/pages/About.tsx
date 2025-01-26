import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About WikiFoods</h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              WikiFoods is your ultimate destination for discovering, learning, and mastering the art of cooking. 
              Our platform brings together food enthusiasts, home cooks, and professional chefs from around the world.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To make cooking accessible, enjoyable, and rewarding for everyone, 
                  regardless of their experience level.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To create a global community where culinary knowledge is shared, 
                  celebrated, and preserved for future generations.
                </p>
              </div>
            </div>

            {/* TSA Forms Section */}
            <div className="bg-white p-8 rounded-lg shadow-md my-12">
              <h2 className="text-2xl font-bold mb-6">TSA Forms</h2>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://pdf.ac/1n7WMi")}
                >
                  <Download className="mr-2" />
                  Copyright Checklist
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://pdf.ac/4dfRqT")}
                >
                  <Download className="mr-2" />
                  Plan of Work Log
                </Button>
              </div>
            </div>

            {/* Credits Section */}
            <div className="bg-white p-8 rounded-lg shadow-md my-12">
              <h2 className="text-2xl font-bold mb-6">Credits</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg">TSA Team</h3>
                  <p>Special thanks to our wonderful TSA team for their dedication and hard work in making this project possible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Images</h3>
                  <p>All images are provided by Unsplash - Beautiful, free images and photos that you can download and use for any project. These images are copyright-free and were carefully selected by our team.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hosting</h3>
                  <p>This website is proudly hosted on AWS Cloud Web Hosting Services, ensuring reliable and scalable performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;