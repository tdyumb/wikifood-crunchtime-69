import Navigation from "@/components/Navigation";
import { QrCode, Apple, Android } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Download Our App</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get WikiFoods on Mobile</h2>
                  <p className="text-gray-600 mb-8">
                    Take your cooking journey anywhere with our mobile app. 
                    Access recipes, create shopping lists, and track your progress on the go.
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                      <Apple className="w-6 h-6" />
                      Download for iOS
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                      <Android className="w-6 h-6" />
                      Download for Android
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-6 rounded-xl">
                    <QrCode className="w-48 h-48" />
                    <p className="text-center mt-4 text-sm text-gray-600">
                      Scan to download
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;