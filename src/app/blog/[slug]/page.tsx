import { posts } from "@/data/posts";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

// Next.js 15+ requires params to be a Promise
type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  // 🚀 THE FIX: Await the params before using them
  const { slug } = await params;

  // Find the specific post data
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}