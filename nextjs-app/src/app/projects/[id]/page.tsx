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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm mb-8 inline-block"
      >
        ← Quay lại danh sách dự án
      </Link>

      <article>
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Dự án {project.date}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          {project.title}
        </h1>

        <div className="prose max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 whitespace-pre-line text-lg leading-relaxed mb-10">
          {project.fullDescription}
        </div>

        {project.link && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h3 className="text-xl font-bold mb-4">Liên kết hữu ích</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
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
