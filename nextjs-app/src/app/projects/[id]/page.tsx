import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <Link
        href="/projects"
        className="inline-block text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
      >
        ← Quay lại danh sách dự án
      </Link>

      <article className="space-y-6">
        <div className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
              Dự án {project.date}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-emerald-200 bg-white px-2.5 py-1 text-xs text-emerald-700 dark:border-emerald-900 dark:bg-gray-900 dark:text-emerald-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
            {project.title}
          </h1>
        </div>

        <div className="prose max-w-none whitespace-pre-line rounded-2xl border bg-card p-6 text-lg leading-relaxed text-gray-700 shadow-sm dark:prose-invert dark:text-gray-300">
          {project.fullDescription}
        </div>

        {project.link && (
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Liên kết hữu ích</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-emerald-700 hover:shadow-lg"
            >
              Truy cập Dự án / Source Code
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
