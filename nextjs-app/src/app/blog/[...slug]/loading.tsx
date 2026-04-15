export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      {/* Skeleton cho link quay lại */}
      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>

      <article>
        {/* Skeleton cho hàng thông tin (category, date, author) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-20 bg-emerald-100 dark:bg-emerald-900/40 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>

        {/* Skeleton cho tiêu đề bài viết */}
        <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>

        {/* Skeleton cho nội dung bài viết (nhiều dòng) */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded"></div>

          <div className="pt-4 space-y-4">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </article>
    </div>
  );
}
