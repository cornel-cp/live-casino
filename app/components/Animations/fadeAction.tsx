"use client";
import Image from "next/image";

export default function FadeImageLoop() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      {/* First Image */}
      <Image
        src="/assets/images/sofa.png"
        alt="image1"
        fill
        priority
        className="object-cover opacity-0 animate-[fade_8s_ease-in-out_infinite]"
      />

      {/* Second Image (delayed fade) */}
      <Image
        src="/assets/images/entertain.png"
        alt="image2"
        fill
        className="object-cover opacity-0 animate-[fade_8s_ease-in-out_infinite] [animation-delay:4s]"
      />

      {/* Keyframes definition (in Tailwind arbitrary style) */}
      <style jsx>{`
        @keyframes fade {
          0%,
          45% {
            opacity: 1;
          }
          50%,
          95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
