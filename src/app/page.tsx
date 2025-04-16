import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to WordPress Blog Viewer
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore posts and pages from our WordPress site. Browse through our
          collection of articles and discover interesting content.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/posts"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Posts
          </Link>
          <Link
            href="/pages"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Pages
          </Link>
        </div>
      </div>
    </div>
  );
}
