import { getPost } from "@/lib/wordpress";
import Link from "next/link";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/posts"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Posts
      </Link>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
        <div className="text-sm text-gray-500 mb-8">
          Published on {new Date(post.date).toLocaleDateString()}
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}
