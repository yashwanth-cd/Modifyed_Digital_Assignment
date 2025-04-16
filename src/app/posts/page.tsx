import { getPosts } from "@/lib/wordpress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { CurrentPage } from "../../types/types";
import { Suspense } from "react";

const POSTS_PER_PAGE = 5;

async function PostsList({ currentPage = 1 }: CurrentPage) {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No posts found.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <div className="grid gap-6">
        {paginatedPosts.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-all duration-300 hover:bg-slate-50"
          >
            <CardHeader>
              <CardTitle>
                <Link href={`/posts/${post.id}`} className="hover:text-primary">
                  {post.title.rendered}
                </Link>
              </CardTitle>
              <CardDescription>
                Published on {new Date(post.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Button variant="outline" className="mt-4" asChild>
                <Link href={`/posts/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}

interface PostsPageProps {
  searchParams: { page?: string };
}

export default function PostsPage({ searchParams }: PostsPageProps) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button variant="outline" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </Button>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loader2 className="h-12 w-12 animate-spin" />
          </div>
        }
      >
        <PostsList currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
