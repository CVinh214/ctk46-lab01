import Link from "next/link";
import { posts } from "@/data/posts";
import CopyButton from "@/components/copy-button";
export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1
rounded"
              >
                {post.category}
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {post.date}
              </span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2
                className="text-xl font-semibold mb-2 hover:text-violet-600 dark:hover:text-violet-400
transition-colors"
              >
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            <div className="mt-3 flex items-center gap-3">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-violet-600 dark:text-violet-400 text-sm hover:underline"
              >
                Đọc thêm →
              </Link>
              <CopyButton
                textToCopy={`${post.title}\n/blog/${post.slug}`}
                label="Copy bài viết"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
