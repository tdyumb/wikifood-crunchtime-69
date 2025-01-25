import Navigation from "@/components/Navigation";

const Events = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Events</h1>
          <p className="text-center text-gray-600">Join our upcoming cooking events and food festivals.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;