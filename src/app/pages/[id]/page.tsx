import { getPage } from "@/lib/wordpress";
import Link from "next/link";

interface PagePageProps {
  params: {
    id: string;
  };
}

export default async function PagePage({ params }: PagePageProps) {
  const page = await getPage(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/pages"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Pages
      </Link>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4">{page.title.rendered}</h1>
        <div className="text-sm text-gray-500 mb-8">
          Last updated on {new Date(page.modified).toLocaleDateString()}
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </article>
    </div>
  );
}
