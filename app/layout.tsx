import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "القرآن الكريم يُسر",
  description: "تطبيق لقراءة القرآن الكريم بخط حفص الذكي مع تصميم يوافق صفحات المصحف",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
