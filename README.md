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
  /components
    Navigation.tsx      # Site navigation
  /lib
    wordpress.ts        # WordPress API utilities
  /types
    wordpress.ts        # TypeScript interfaces
```

## API Endpoint

The application fetches data from:

```
https://demo.modifyed.xyz/wp-json/wp/v2/
```
