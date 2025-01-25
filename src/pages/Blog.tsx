import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
          <p className="text-center text-gray-600">Coming soon! Stay tuned for our latest culinary articles and insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;