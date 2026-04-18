import Link from "next/link";
import { Post } from "@/types/post";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Tổng cộng {posts.length} bài viết từ API, hiển thị 10 bài mới để đọc
          nhanh.
        </p>
      </section>

      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <Card className="cursor-pointer border-gray-200/80 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:hover:border-emerald-800">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                  >
                    Tác giả #{post.userId}
                  </Badge>
                  <span className="text-sm text-gray-400">Bài #{post.id}</span>
                </div>
                <CardTitle className="capitalize text-gray-900 dark:text-gray-100">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 leading-relaxed">
                  {post.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
