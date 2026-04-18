import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }
  return res.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải bình luận");
  }
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // Chạy getPost và getComments song song
  const [post, comments] = await Promise.all([getPost(id), getComments(id)]);

  // Sau khi có post, lấy thông tin tác giả (vì cần post.userId)
  const author = await getUser(post.userId);

  return (
    <div className="space-y-6">
      <Link
        href="/blog"
        className="inline-block text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
      >
        ← Quay lại danh sách
      </Link>

      <article className="space-y-6">
        <section className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
          <h1 className="mb-4 text-3xl font-bold capitalize text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <span className="rounded-full bg-white px-3 py-1 font-medium dark:bg-gray-900">
              Bài #{post.id}
            </span>
            <span>
              Tác giả:{" "}
              <strong className="text-gray-800 dark:text-gray-100">
                {author.name}
              </strong>
            </span>
            <span>•</span>
            <span>{author.email}</span>
          </div>
        </section>

        <div className="prose max-w-none whitespace-pre-line rounded-2xl border bg-card p-6 leading-relaxed text-gray-700 shadow-sm dark:text-gray-300">
          {post.body}
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>{author.name}</strong> (@{author.username}) —
            {author.company.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {author.company.catchPhrase}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="mb-6 text-2xl font-bold">
            Bình luận ({comments.length})
          </h3>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/40"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                    {comment.name}
                  </span>
                  <span className="text-xs text-gray-500">{comment.email}</span>
                </div>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  &quot;{comment.body}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
