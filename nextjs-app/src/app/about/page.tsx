import LikeButton from "@/components/like-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <section className="rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-white px-6 py-8 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-gray-950">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="h-32 w-32 cursor-help border-2 border-emerald-600">
                <AvatarImage src="" alt="Võ Lâm Chí Vĩnh" />
                <AvatarFallback className="bg-emerald-100 text-3xl text-emerald-700">
                  V
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Đây là tôi!</p>
            </TooltipContent>
          </Tooltip>

          <div className="text-center md:text-left">
            <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Võ Lâm Chí Vĩnh
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sinh viên Công nghệ Thông tin, tập trung vào xây dựng web app hiện
              đại và trải nghiệm người dùng.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-gray-900 dark:text-emerald-300">
              MSSV 2212493 • CTK46A
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Giới thiệu bản thân</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Xin chào! Tôi là <strong>Võ Lâm Chí Vĩnh</strong>, sinh viên năm 4
            ngành Công nghệ Thông tin tại Đại học Đà Lạt. Tôi có niềm đam mê lớn
            với việc xây dựng các ứng dụng web hiện đại và tối ưu hóa trải
            nghiệm người dùng.
          </p>
        </section>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-emerald-50 p-1 dark:bg-emerald-950/20">
            <TabsTrigger value="skills">Kỹ năng chuyên môn</TabsTrigger>
            <TabsTrigger value="education">Học vấn & Bằng cấp</TabsTrigger>
          </TabsList>
          <TabsContent
            value="skills"
            className="mt-3 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.JS",
                "Tailwind CSS",
                "Git",
                "SQL",
                "PostgreSQL",
                "PowerShell",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 hover:border-emerald-200 hover:bg-emerald-50/70 dark:hover:border-emerald-900 dark:hover:bg-emerald-900/10"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent
            value="education"
            className="mt-3 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <p className="font-bold text-lg">Đại học Đà Lạt</p>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  Cử nhân Công nghệ Thông tin (2022 — 2026)
                </p>
                <p className="mt-2 text-sm">Chuyên ngành: Kỹ thuật phần mềm.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between border-t pt-6">
          <p className="text-sm italic text-gray-500">
            Cảm ơn bạn đã ghé thăm trang của tôi!
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <LikeButton />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nhấn để bày tỏ sự yêu thích!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
