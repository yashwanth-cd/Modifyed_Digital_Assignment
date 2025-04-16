import { getPost } from "@/lib/wordpress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageProps } from "@/types/types";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <p className="text-muted-foreground">Post not found.</p>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/posts">Back to Posts</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[50vh]">
          <Loader2 className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/posts">← Back to Posts</Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{post.title.rendered}</CardTitle>
            <CardDescription>
              Published on {new Date(post.date).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="prose lg:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
}
