"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let progress = 0;

    const updateProgress = (value: number) => {
      if (mounted) {
        progress = value;
        setLoadingProgress(Math.min(progress, 100));
      }
    };

    const checkAssetsLoaded = async () => {
      try {
        // List of critical images to preload
        const criticalImages = [
          "/assets/images/about.jpg",
          "/assets/images/cardacadamy.jpg",
          "/assets/images/sofa.png",
          "/assets/images/entertain.png",
          "/assets/images/visit.png",
          "/assets/images/carousel1.jpg",
          "/assets/images/carousel2.jpg",
          "/assets/images/carousel3.jpg",
          "/assets/images/Cards.png",
        ];

        // Start loading fonts
        updateProgress(10);

        // Wait for fonts to load (including Google Fonts and custom fonts)
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
          updateProgress(40);
        } else {
          // Fallback: wait a bit for fonts
          await new Promise((resolve) => setTimeout(resolve, 500));
          updateProgress(40);
        }

        // Preload critical images
        const imagePromises = criticalImages.map((src) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              updateProgress(40 + (50 * criticalImages.indexOf(src)) / criticalImages.length);
              resolve();
            };
            img.onerror = () => {
              // Even if image fails, continue
              updateProgress(40 + (50 * criticalImages.indexOf(src)) / criticalImages.length);
              resolve();
            };
            img.src = src;
          });
        });

        await Promise.all(imagePromises);
        updateProgress(90);

        // Wait for any remaining assets and ensure DOM is ready
        if (document.readyState === "complete") {
          updateProgress(100);
          // Small delay for smooth transition
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 300);
        } else {
          const handleLoad = () => {
            updateProgress(100);
            setTimeout(() => {
              if (mounted) {
                setIsLoading(false);
              }
            }, 300);
          };
          window.addEventListener("load", handleLoad);
          return () => window.removeEventListener("load", handleLoad);
        }
      } catch (error) {
        console.error("Error loading assets:", error);
        // If there's an error, still show content after a delay
        setTimeout(() => {
          if (mounted) {
            setIsLoading(false);
          }
        }, 1000);
      }
    };

    checkAssetsLoaded();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {/* Loading screen */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-b from-gray-900 via-black to-gray-900 text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Spinning circles */}
          <div className="relative w-20 h-20 mb-8">
            <motion.span
              className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "linear",
              }}
            />
            <motion.span
              className="absolute inset-3 rounded-full border-4 border-t-transparent border-indigo-400 opacity-70"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "linear",
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="text-xl tracking-wide text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            Loading<span className="text-blue-400">...</span>
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-blue-500 to-indigo-400"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Subtle glow effect */}
          <motion.div
            className="absolute bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
