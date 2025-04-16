import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            WordPress Blog Viewer
          </Link>
          <div className="flex space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/posts">Posts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/pages">Pages</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
