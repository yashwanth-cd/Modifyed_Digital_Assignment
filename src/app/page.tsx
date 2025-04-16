import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">
            Welcome to WordPress Blog Viewer
          </CardTitle>
          <CardDescription className="text-xl">
            Explore posts and pages from our WordPress site. Browse through our
            collection of articles and discover interesting content.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center space-x-4">
          <Button asChild variant={"outline"}>
            <Link href="/posts">View Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/pages">View Pages</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
