import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import LikeButton from "@/components/like-button";
import CopyButton from "@/components/copy-button";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Lấy slug thực tế từ mảng (phần tử cuối cùng) để tìm bài viết
  const actualSlug = slug[slug.length - 1];
  const post = getPostBySlug(actualSlug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="text-violet-600 dark:text-violet-400 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <div className="mb-6">
        <CopyButton
          textToCopy={`${post.title}\n/blog/${slug.join("/")}`}
          label="Copy bài viết này"
        />
      </div>

      <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded text-sm">
        <strong>Quan sát Catch-all Route:</strong>
        <p>
          Đường dẫn hiện tại:{" "}
          <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1">
            /blog/{slug.join("/")}
          </code>
        </p>
        <p>
          Giá trị params.slug (mảng):{" "}
          <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1">
            {JSON.stringify(slug)}
          </code>
        </p>
      </div>

      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            {post.date}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            · Tác giả: {post.author}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div className="prose max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {post.content}
        </div>
        <div className="border-t pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: [post.slug],
  }));
}
