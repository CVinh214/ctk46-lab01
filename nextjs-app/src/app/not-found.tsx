import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Animation/Illustration SVG */}
      <div className="relative mb-8 group">
        <svg
          className="w-64 h-64 text-emerald-100 dark:text-emerald-900/40 animate-pulse group-hover:text-emerald-200 dark:group-hover:text-emerald-800/60 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl font-black text-emerald-600 dark:text-emerald-400 opacity-20 select-none">
            404
          </span>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Trang không tồn tại
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto">
        Rất tiếc, đường dẫn bạn đang tìm kiếm có thể đã bị thay đổi hoặc không
        còn tồn tại trên hệ thống.
      </p>

      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Quay về Trang chủ
        </Link>
        <Link
          href="/blog"
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          Xem Blog của tôi
        </Link>
      </div>

      <div className="mt-12 text-gray-400 dark:text-gray-500 text-sm italic">
        "Không phải tất cả những ai đi lạc đều là người mất phương hướng."
      </div>
    </div>
  );
}
