import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
