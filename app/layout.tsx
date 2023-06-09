import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div style={{ border: "5px solid blueviolet" }}>
          <header>
            헤더영역 <Link href={"/"}>메인으로 이동</Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
