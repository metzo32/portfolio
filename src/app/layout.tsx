import type { Metadata } from "next";
import "../styling/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NameTag from "@/components/NameTag";

export const metadata: Metadata = {
  title: "Frontend Engineer 오세연입니다.",
  description: "프론트엔드 엔지니어 포트폴리오 페이지",
  openGraph: {
    title: "Frontend Engineer 오세연입니다.",
    description: "프론트엔드 엔지니어 포트폴리오 페이지",
    url: "https://metzportfolio.vercel.app/", 
    siteName: "FE 오세연 포트폴리오",
    images: [
      {
        url: "/public/image/profile.jpg",  
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
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
