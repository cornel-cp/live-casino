import React from "react";
interface BorderBoxProps {
  children: React.ReactNode;
}

const BorderBox: React.FC<BorderBoxProps> = ({ children }) => {
  return (
    <div className="relative mx-8 md:mx-[88px] lg:mx-auto lg:max-w-[1020px] px-4 md:px-10 pt-[25px] pb-[33.5px] mt-2.5 border-4 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.9)] rounded-xs">
      {children}
    </div>
  );
};

export default BorderBox;
