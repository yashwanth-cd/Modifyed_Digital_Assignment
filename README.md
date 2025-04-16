# WordPress Blog Viewer

A Next.js application that fetches and displays blog posts and pages from a WordPress site using the WordPress REST API.

## Features

- View a list of blog posts
- View a list of pages
- View individual post and page details
- Responsive design with TailwindCSS
- TypeScript support
- Server-side rendering for optimal performance

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- WordPress REST API

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd wordpress-blog-viewer
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/src
  /app
    /posts
      page.tsx          # List of blog posts
      [id]/page.tsx     # Post detail
    /pages
      page.tsx          # List of pages
      [id]/page.tsx     # Page detail
    layout.tsx          # Root layout
    globals.css         # Global styles
  /components
    /ui                 # UI components
      button.tsx        # Button component
      card.tsx          # Card component
      loading.tsx       # Loading component
      pagination.tsx    # Pagination component
      toaster.tsx       # Toast notifications
  /hooks
    use-toast.ts        # Custom hook for toast notifications
  /lib
    wordpress.ts        # WordPress API utilities
    utils.ts            # Utility functions
  /types
    wordpress.ts        # TypeScript interfaces
    types.ts            # Common TypeScript types and interfaces
```

## API Endpoint

The application fetches data from:

```
https://demo.modifyed.xyz/wp-json/wp/v2/
```

## Information from developer

1. This application is completely built using `Server Components` feature of `Nextjs` unlike old method of using `useEffect()` hook and `useState()` to fetch and store the data from an endpoint.

2. This application is built using a react based component library i.e. `ShadCn`, leveraging `Tailwindcss` for better UI/UX design, and User-friendliness.

3. `Loading indicators` are also implemented.

4. `Pagination` is implemented in the `posts` and `pages` components.

5. `Error handling` is done with best practices using `try-catch` blocks.

6. `TypeScript` is also used for better typing system and less prone to any bugs.
