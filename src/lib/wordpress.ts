import { WordPressPost, WordPressPage } from "@/types/wordpress";

const WORDPRESS_API_URL = "https://demo.modifyed.xyz/wp-json/wp/v2";

export async function getPosts(): Promise<WordPressPost[]> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export async function getPost(id: string): Promise<WordPressPost> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
}

export async function getPages(): Promise<WordPressPage[]> {
  const response = await fetch(`${WORDPRESS_API_URL}/pages`);
  if (!response.ok) {
    throw new Error("Failed to fetch pages");
  }
  return response.json();
}

export async function getPage(id: string): Promise<WordPressPage> {
  const response = await fetch(`${WORDPRESS_API_URL}/pages/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch page");
  }
  return response.json();
}
