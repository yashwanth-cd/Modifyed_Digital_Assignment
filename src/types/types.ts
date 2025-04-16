interface RootLayoutProps {
  children: React.ReactNode;
}

interface SearchParams {
  searchParams: { page?: string };
}

interface CurrentPage {
  currentPage?: number;
}

interface PageProps {
  params: {
    id: string;
  };
}

export type { SearchParams, CurrentPage, PageProps, RootLayoutProps };
