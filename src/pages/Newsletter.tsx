import Navigation from "@/components/Navigation";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Newsletter</h1>
          <p className="text-center text-gray-600">Subscribe to our newsletter for weekly recipe updates and cooking tips.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;