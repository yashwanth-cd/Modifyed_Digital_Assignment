"use client";

import { useEffect, useState } from "react";
import { getPages } from "@/lib/wordpress";
import { WordPressPage } from "@/types/wordpress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

const PAGES_PER_PAGE = 5;

interface PagesListProps {
  currentPage: number;
}

export default function PagesList({ currentPage }: PagesListProps) {
  const [pages, setPages] = useState<WordPressPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPages() {
      try {
        setIsLoading(true);
        const fetchedPages = await getPages();
        setPages(fetchedPages);
        toast({
          title: "Success",
          description: "Pages fetched successfully",
          variant: "default",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch pages",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchPages();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Loading pages...</p>
      </div>
    );
  }

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
            className="hover:shadow-lg transition-all duration-300 hover:scale-[1.005] hover:bg-slate-50"
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
