import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT 북스 파인더",
  description: "키워드 검색을 통해 찾고 계신 IT도서 정보를 검색해보세요.",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col m-auto pb-10 max-w-4xl h-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
