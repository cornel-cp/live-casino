"use client";
import Image from "next/image";
import Footer from "./footer";
import Header from "./header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 relative bg-background overflow-x-hidden">
        <Header />
        {children}
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 text-white rounded-[50%] p-2 bg-white/20 cursor-pointer hover:bg-white hover:text-gray-600 transition-all duration-500"
        >
          <Image
            src={`/assets/images/Vector 41.png`}
            alt="Vector"
            width={8}
            height={3.33}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
