import Navigation from "@/components/Navigation";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;