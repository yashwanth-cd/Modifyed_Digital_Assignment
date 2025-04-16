import { getPosts } from "@/lib/wordpress";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title.rendered}
              </h2>
            </Link>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <div className="mt-4 text-sm text-gray-500">
              Published on {new Date(post.date).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
