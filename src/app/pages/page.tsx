import { getPages } from "@/lib/wordpress";
import Link from "next/link";

export default async function PagesPage() {
  const pages = await getPages();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pages</h1>
      <div className="grid gap-6">
        {pages.map((page) => (
          <article
            key={page.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/pages/${page.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {page.title.rendered}
              </h2>
            </Link>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
            <div className="mt-4 text-sm text-gray-500">
              Last updated on {new Date(page.modified).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
