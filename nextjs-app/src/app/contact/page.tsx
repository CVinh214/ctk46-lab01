export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-3 border border-transparent dark:border-gray-800">
          <p>
            <strong>Họ và tên:</strong> Võ Lâm Chí Vĩnh
          </p>
          <p>
            <strong>MSSV:</strong> 2212493
          </p>
          <p>
            <strong>Lớp:</strong> CTK46A
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212493@dlu.edu.vn"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              2212493@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vlamchivinh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              github.com/vlamchivinh
            </a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương,
            Phường 8, Đà Lạt, Lâm Đồng
          </p>
        </div>
      </div>
    </div>
  );
}
