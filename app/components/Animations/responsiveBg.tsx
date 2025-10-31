"use client";
import React, { useEffect, useState } from "react";

interface ResponsiveBgProps {
  children: React.ReactNode;
}

const ResponsiveBg: React.FC<ResponsiveBgProps> = ({ children }) => {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth >= 768); // Tailwind's md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full bg-[url('/assets/images/bg_tower_image.jpg')] bg-cover bg-center transition-all duration-700 ease-in-out  flex flex-col justify-end`}
      style={{
        height: isMedium ? "100%" : "300px",
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveBg;
