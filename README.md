# WordPress Blog Viewer

A Next.js application that fetches and displays blog posts and pages from a WordPress site using the WordPress REST API.

## Features

- View a list of blog posts and pages with pagination
- View individual post and page details
- Server-side rendering with Next.js App Router
- Responsive design with modern UI components
- Loading states with Suspense and animations
- Toast notifications for success/error states
- TypeScript for type safety
- Modern animations and transitions
- SEO-friendly with server components

## Tech Stack

### Core

- Next.js 14 (App Router)
- TypeScript
- React 19

### UI & Styling

- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
- Tailwind Typography (for blog content)

### Data Fetching

- WordPress REST API
- Native Fetch API

### State Management & Utilities

- React Hooks
- React Suspense
- Server Components
- Server Actions

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
  /lib
    wordpress.ts        # WordPress API utilities
    utils.ts            # Utility functions
  /types
    wordpress.ts        # TypeScript interfaces
    types.ts            # Common TypeScript types
```

## API Endpoint

The application fetches data from:

```
https://demo.modifyed.xyz/wp-json/wp/v2/
```

## Key Features Implementation

1. **Server Components**: Leverages Next.js 14's server components for optimal performance and SEO.

2. **Loading States**:

   - Uses React Suspense for loading states
   - Custom loading animations with Lucide React's Loader2
   - Smooth transitions between states

3. **UI Components**:

   - Built with Shadcn UI for consistent design
   - Responsive layout with Tailwind CSS
   - Interactive elements with hover effects
   - Toast notifications for user feedback

4. **Data Fetching**:

   - Server-side data fetching for better performance
   - Error handling with proper user feedback
   - Caching strategies with `no-store` for real-time data

5. **Pagination**:

   - Client-side pagination implementation
   - Smooth scroll behavior
   - Proper state management

6. **TypeScript Integration**:
   - Full type safety across the application
   - Interface definitions for WordPress data
   - Type checking for props and API responses

## Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "latest",
    "@radix-ui/react-toast": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "lucide-react": "latest",
    "next": "14.x",
    "react": "19.x",
    "react-dom": "19.x",
    "tailwind-merge": "latest",
    "tailwindcss": "latest",
    "tailwindcss-animate": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest",
    "@tailwindcss/typography": "latest"
  }
}
```

## Best Practices

1. Server Components are used by default for better performance
2. Client Components are marked with "use client" when needed
3. Loading indicators are implemented using Suspense
4. Error handling with proper user feedback
5. TypeScript for type safety
6. Responsive design principles
7. SEO-friendly structure
8. Proper code organization and modularity
