export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Nội dung chính */}
        <div className="flex-1">{children}</div>
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="rounded-2xl border border-emerald-100 bg-linear-to-b from-emerald-50 to-white p-5 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
              Danh mục
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="cursor-pointer rounded-lg px-2 py-1.5 hover:bg-emerald-100/70 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300">
                Công nghệ
              </li>
              <li className="cursor-pointer rounded-lg px-2 py-1.5 hover:bg-emerald-100/70 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300">
                Học tập
              </li>
              <li className="cursor-pointer rounded-lg px-2 py-1.5 hover:bg-emerald-100/70 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300">
                Dự án cá nhân
              </li>
              <li className="cursor-pointer rounded-lg px-2 py-1.5 hover:bg-emerald-100/70 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300">
                Cuộc sống
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
