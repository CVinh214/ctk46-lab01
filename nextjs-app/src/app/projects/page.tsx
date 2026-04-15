const projects = [
  {
    title: "KAT Management",
    description:
      "Hệ thống quản lý cửa hàng Katinat giúp theo dõi và sắp xếp lịch làm việc, thông báo cho nhân viên. Nhân viên có thể đăng ký và theo dõi lịch làm việc trực tiếp trên nền tảng, giúp tối ưu hóa quy trình quản lý tại một nơi duy nhất.",
    tech: ["Next.JS", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://kat-management.vercel.app/",
  },
  {
    title: "EcoApp",
    description:
      "Ứng dụng web với giao diện di động chuyên biệt cho việc phân loại rác thải bằng AI. Đây là dự án đạt giải Nhất trong buổi workshop 5 ngày cùng sinh viên Đại học Hallym (Hàn Quốc). Ứng dụng tích hợp Gemini API để nhận diện hình ảnh rác thải và cung cấp hướng dẫn xử lý chi tiết.",
    tech: ["React", "Gemini API", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/CVinh214/EcoApp/",
  },
  {
    title: "Windows Search Optimizer",
    description:
      "Bộ công cụ tối ưu hóa trải nghiệm Windows giúp thu gọn thanh tìm kiếm, tự động căn giữa Start Menu và Search Window. Công cụ hỗ trợ đa màn hình, loại bỏ các thành phần không cần thiết như Cortana nhưng vẫn giữ lại tính năng tìm kiếm web tiện lợi.",
    tech: ["PowerShell", "C#", ".NET 8.0", "Batch Script"],
    link: "https://github.com/CVinh214/WindowsSearchOptimizer",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-balance mb-8 text-emerald-600">
        Dự án của tôi
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-snug">
        Dưới đây là một số dự án và bài tập tôi đã thực hiện trong quá trình học
        tập và làm việc.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 ring-1 ring-emerald-100 dark:ring-emerald-900/40 motion-safe:hover:-translate-y-1 will-change-transform"
          >
            <h2 className="text-xl font-bold leading-snug mb-3 text-gray-800 dark:text-gray-100">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed subpixel-antialiased">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-800 dark:hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 rounded-sm"
              >
                Xem dự án
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
