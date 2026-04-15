export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt: "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Võ Lâm Chí Vĩnh",
  },
  {
    slug: "ket-hop-nextjs-voi-supabase",
    title: "Kết hợp Next.JS với Supabase cho ứng dụng Realtime",
    excerpt: "Hướng dẫn xây dựng ứng dụng hiện đại với khả năng cập nhật dữ liệu thời gian thực sử dụng Next.JS và Supabase.",
    content: `Supabase là một giải pháp thay thế mã nguồn mở cho Firebase, cung cấp cơ sở dữ liệu PostgreSQL, Authentication, và Realtime subscriptions.

Tại sao nên chọn Supabase cho dự án Next.JS:
1. PostgreSQL mạnh mẽ: Tận dụng sức mạnh của SQL truyền thống.
2. Realtime Engine: Lắng nghe các thay đổi trong database và cập nhật giao diện ngay lập tức.
3. Row Level Security (RLS): Bảo mật dữ liệu trực tiếp từ database.

Các bước cơ bản để bắt đầu:
- Cài đặt thư viện @supabase/supabase-js.
- Cấu hình môi trường với URL và Anon Key.
- Sử dụng hook useEffect để lắng nghe sự thay đổi của bảng dữ liệu.`,
    date: "2025-02-10",
    category: "Công nghệ",
    author: "Võ Lâm Chí Vĩnh",
  },
  {
    slug: "quan-ly-xac-thuc-voi-supabase-auth",
    title: "Quản lý xác thực người dùng với Supabase Auth trong Next.JS",
    excerpt: "Triển khai hệ thống đăng ký, đăng nhập an toàn trong vài phút với Supabase Authentication.",
    content: `Xác thực là một phần quan trọng nhưng phức tạp của bất kỳ ứng dụng nào. Supabase Auth giúp đơn giản hóa quy trình này.

Ưu điểm của Supabase Auth:
- Hỗ trợ đăng nhập bằng Email/Password, OTP, và OAuth (Google, GitHub, Facebook).
- Tích hợp sẵn với Next.JS qua gói helper @supabase/auth-helpers-nextjs.
- Quản lý phiên làm việc (session) tự động qua Cookies.

Quy trình thực hiện:
1. Tạo Project trên Supabase Dashboard.
2. Sử dụng Component Auth của Supabase UI để tạo giao diện nhanh chóng.
3. Cấu hình Middleware trong Next.JS để bảo vệ các route riêng tư (protected routes).`,
    date: "2025-02-15",
    category: "Công nghệ",
    author: "Võ Lâm Chí Vĩnh",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt: "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Võ Lâm Chí Vĩnh",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Võ Lâm Chí Vĩnh",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
