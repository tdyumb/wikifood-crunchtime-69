import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
            <div className="bg-white p-8 rounded-lg shadow-md mt-12">
              <h2 className="text-2xl font-bold mb-6">TSA Forms & Documentation</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">TSA Safety Guidelines</span>
                  </div>
                  <Button variant="outline">Download</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Food Safety Certification</span>
                  </div>
                  <Button variant="outline">Download</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Compliance Documentation</span>
                  </div>
                  <Button variant="outline">Download</Button>
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