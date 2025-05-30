import { getPages } from "@/lib/wordpress";
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
import { CurrentPage, SearchParams } from "../../types/types";
import { Suspense } from "react";

const PAGES_PER_PAGE = 5;

async function PagesList({ currentPage = 1 }: CurrentPage) {
  const pages = await getPages();

  if (pages.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No pages found.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(pages.length / PAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * PAGES_PER_PAGE;
  const paginatedPages = pages.slice(startIndex, startIndex + PAGES_PER_PAGE);

  return (
    <div>
      <div className="grid gap-6">
        {paginatedPages.map((page) => (
          <Card
            key={page.id}
            className="hover:shadow-lg transition-all duration-300 hover:bg-slate-50"
          >
            <CardHeader>
              <CardTitle>
                <Link href={`/pages/${page.id}`} className="hover:text-primary">
                  {page.title.rendered}
                </Link>
              </CardTitle>
              <CardDescription>
                Last updated on {new Date(page.modified).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
              />
              <Button variant="outline" className="mt-4" asChild>
                <Link href={`/pages/${page.id}`}>View Page</Link>
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

export default function PagesPage({ searchParams }: SearchParams) {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pages</h1>
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
        <PagesList currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
