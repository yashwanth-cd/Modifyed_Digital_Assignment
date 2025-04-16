"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {currentPage > 1 ? (
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`?page=${currentPage - 1}`}
            className="flex items-center gap-1"
            onClick={scrollToTop}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          <span className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </span>
        </Button>
      )}

      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`?page=${currentPage + 1}`}
            className="flex items-center gap-1"
            onClick={scrollToTop}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          <span className="flex items-center gap-1">
            Next
            <ChevronRight className="h-4 w-4" />
          </span>
        </Button>
      )}
    </div>
  );
}
