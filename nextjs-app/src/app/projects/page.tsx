import Link from "next/link";
import { projects } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <section className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Dự án
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Bộ sưu tập các dự án cá nhân và nhóm, tập trung vào thực hành công
          nghệ hiện đại.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block h-full"
          >
            <Card className="h-full cursor-pointer border-gray-200/80 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:hover:border-emerald-800">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                  >
                    Dự án {project.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 transition-colors dark:text-gray-100">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-white dark:bg-gray-900"
                    >
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline">+{project.tech.length - 4}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
