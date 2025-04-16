// "use client";

import { WordPressPost, WordPressPage } from "@/types/wordpress";

const WORDPRESS_API_URL = "https://demo.modifyed.xyz/wp-json/wp/v2";

async function handleResponse<T>(
  response: Response,
  errorMessage: string
): Promise<T> {
  if (!response.ok) {
    const error = new Error(errorMessage);
    throw error;
  }
  return response.json();
}

export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
      cache: "no-store",
    });
    const posts = await handleResponse<WordPressPost[]>(
      response,
      "Failed to fetch posts"
    );
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPost(id: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}`, {
      cache: "no-store",
    });
    const post = await handleResponse<WordPressPost>(
      response,
      "Failed to fetch post"
    );
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function getPages(): Promise<WordPressPage[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages`, {
      cache: "no-store",
    });
    const pages = await handleResponse<WordPressPage[]>(
      response,
      "Failed to fetch pages"
    );
    return pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

export async function getPage(id: string): Promise<WordPressPage | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages/${id}`, {
      cache: "no-store",
    });
    const page = await handleResponse<WordPressPage>(
      response,
      "Failed to fetch page"
    );
    return page;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
