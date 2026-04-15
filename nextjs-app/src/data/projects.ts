export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  link: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "kat-management",
    title: "KAT Management",
    description: "Hệ thống quản lý cửa hàng Katinat giúp theo dõi và sắp xếp lịch làm việc, thông báo cho nhân viên.",
    fullDescription: `Hệ thống quản lý cửa hàng Katinat được xây dựng để giải quyết các vấn đề vận hành thực tế tại cửa hàng. 
    
Các tính năng chính:
- Quản lý lịch làm việc: Quản lý có thể dễ dàng sắp xếp ca làm và nhân viên có thể đăng ký ca trực tuyến.
- Thông báo nội bộ: Truyền đạt thông tin nhanh chóng đến toàn bộ nhân viên tại một nơi duy nhất.
- Kiểm soát công việc: Theo dõi tiến độ và hiệu quả làm việc của từng nhân viên.
- Lưu trữ dữ liệu: Mọi dữ liệu được lưu trữ an toàn trên Supabase, giúp dễ dàng tra cứu lại khi cần thiết.

Đây là dự án tôi tự phát triển để học hỏi về Next.JS và cách tích hợp cơ sở dữ liệu Supabase vào thực tế.`,
    tech: ["Next.JS", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://kat-management.vercel.app/",
    date: "2024",
  },
  {
    id: "eco-app",
    title: "EcoApp - Green Learning Platform",
    description: "Ứng dụng web với giao diện di động chuyên biệt cho việc phân loại rác thải bằng AI.",
    fullDescription: `EcoApp là kết quả của buổi workshop 5 ngày giữa sinh viên Đại học Đà Lạt và Đại học Hallym (Hàn Quốc). Dự án đã xuất sắc giành giải Nhất trong cuộc thi cuối kỳ workshop.

Đặc điểm nổi bật:
- Nhận diện rác thải bằng AI: Sử dụng Gemini API (gemini-2.5-flash) để phân tích hình ảnh và phân loại rác (Tái chế, Hữu cơ, Độc hại...).
- Hướng dẫn xử lý: Cung cấp các bước chi tiết để xử lý từng loại rác cụ thể.
- Hệ thống điểm thưởng: Khuyến khích người dùng tham gia bảo vệ môi trường thông qua bảng xếp hạng.
- Giao diện tối ưu: Thiết kế theo phong cách ứng dụng di động (Mobile-first) mang lại trải nghiệm mượt mà.

Dự án này giúp tôi rèn luyện kỹ năng làm việc nhóm quốc tế và khả năng tích hợp AI vào sản phẩm web.`,
    tech: ["React", "Gemini API", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/CVinh214/EcoApp/",
    date: "2024",
  },
  {
    id: "windows-search-optimizer",
    title: "Windows Search Optimizer",
    description: "Bộ công cụ tối ưu hóa trải nghiệm Windows giúp thu gọn thanh tìm kiếm và căn giữa Start Menu.",
    fullDescription: `Windows Search Optimizer là một bộ công cụ mã nguồn mở nhằm tối ưu hóa giao diện người dùng trên hệ điều hành Windows.

Công năng chính:
- Tối ưu Taskbar: Thu gọn thanh tìm kiếm cồng kềnh thành một biểu tượng tinh tế.
- Căn giữa giao diện: Tự động điều chỉnh vị trí Start Menu và cửa sổ tìm kiếm vào chính giữa màn hình.
- Gỡ bỏ Cortana: Loại bỏ các thành phần hệ thống không cần thiết để giải phóng tài nguyên.
- Giữ lại Web Search: Vẫn duy trì tính năng tìm kiếm web tích hợp của Windows.

Dự án sử dụng kết hợp PowerShell để xử lý hệ thống và C# (.NET 8.0) cho ứng dụng điều hướng giao diện.`,
    tech: ["PowerShell", "C#", ".NET 8.0", "Batch Script"],
    link: "https://github.com/CVinh214/WindowsSearchOptimizer",
    date: "2023",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
