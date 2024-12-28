import Navigation from "@/components/Navigation";
import { QrCode, Apple, Smartphone } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Download Our App</h1>
          <p className="text-xl text-gray-600 mb-12">Get our recipe app on your device</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              <Apple className="w-6 h-6" />
              Download for iOS
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              <Smartphone className="w-6 h-6" />
              Download for Android
            </button>
          </div>
          
          <div className="flex justify-center">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <QrCode className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-600">Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;