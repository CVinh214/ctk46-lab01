import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Võ Lâm Chí Vĩnh - 2212493",
  description: "Trang cá nhân của Võ Lâm Chí Vĩnh - MSSV: 2212493 - Lớp CTK46A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <Navbar />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
