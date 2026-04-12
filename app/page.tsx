export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Võ Lâm Chí Vĩnh</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212493</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46A</strong>
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="bg-blue-100 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>

        <div className="bg-green-100 rounded-lg p-4 mb-6 text-left">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            🎯 Mục tiêu học tập
          </h2>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>Nắm vững các công nghệ mới trong phát triển phần mềm</li>
            <li>Thành thạo Next.js và React</li>
            <li>Xây dựng được ứng dụng web hoàn chỉnh</li>
          </ul>
        </div>

        <div className="bg-purple-100 rounded-lg p-4 text-left">
          <h2 className="text-2xl font-bold text-purple-800 mb-3">
            ❤️ Sở thích
          </h2>
          <ul className="list-disc list-inside text-purple-700 space-y-1">
            <li>Lập trình và khám phá công nghệ mới</li>
            <li>Chơi game</li>
            <li>Nghe nhạc</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
