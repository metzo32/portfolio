import type { Metadata } from "next";
import "../styling/styles.css";
// import CursorFollower from "@/components/CursorFollower/CursorFollower";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NameTag from "@/components/NameTag";

export const metadata: Metadata = {
  title: "개발자 오세연입니다.",
  description: "신입 프론트엔드 엔지니어 포트폴리오 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className="dark">
      <body>
        <div className="wrapper">
          <div className="wrapper-blur" />
          {/* <CursorFollower /> */}
          <Header />
          {children}
          <ScrollToTopButton />
          <NameTag />
          <Footer />
        </div>
      </body>
    </html>
  );
}
