import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 rounded-full mx-auto mb-6 flex items-center justify-center font-bold shadow-sm">
          <span className="text-4xl">V</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là{" "}
          <span className="text-emerald-600">Võ Lâm Chí Vĩnh</span>
        </h1>
        <div className="flex flex-col items-center gap-2 mb-8">
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">
            MSSV: 2212493 - Lớp: CTK46A
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sinh viên Khoa Công nghệ Thông tin tại Trường Đại học Đà Lạt. Đam mê
            xây dựng các ứng dụng web hiện đại và tối ưu hóa hệ thống.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:scale-95 font-semibold"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-semibold"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      <div className="mb-16 flex justify-center">
        <Counter />
      </div>

      {/* Skills section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Kỹ năng chuyên môn
          </h2>
          <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "Next.JS",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Node.js",
            "SQL",
            "Git",
            "PowerShell",
            "C# / .NET",
            "Gemini API",
            "Vite",
            "Framer Motion",
            "Batch Script",
            "Radix UI",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm rounded-xl p-4 text-center hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-10 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Đọc Blog của tôi</h2>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg">
          Nơi tôi chia sẻ những kiến thức mới học được về Next.JS, Supabase và
          kinh nghiệm tự học lập trình.
        </p>
        <Link
          href="/blog"
          className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all inline-block shadow-lg"
        >
          Khám phá ngay →
        </Link>
      </div>
    </div>
  );
}
