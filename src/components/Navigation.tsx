import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            WordPress Blog Viewer
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/posts"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Posts
            </Link>
            <Link
              href="/pages"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pages
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
