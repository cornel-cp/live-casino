"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Delay slightly to allow smooth transition
            setTimeout(() => setIsLoading(false), 500);
        };

        // If the page is already fully loaded (e.g., after fast reload)
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            // Otherwise, wait until load event fires
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
            {/* Spinning circle */}
            <div className="relative w-20 h-20">
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
        <div className="relative">
            {/* Main content */}
            <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                {children}
            </div>

            {/* Text */}
            <motion.p
                className="mt-8 text-xl tracking-wide text-gray-300"
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

            {/* Optional subtle glow */}
            <motion.div
                className="absolute bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                }}
            />
            {/* Loading screen */}
            {isLoading && (
                <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
                    {/* Spinning circle */}
                    <div className="relative w-20 h-20">
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

                    {/* Text */}
                    <motion.p
                        className="mt-8 text-xl tracking-wide text-gray-300"
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

                    {/* Optional subtle glow */}
                    <motion.div
                        className="absolute bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            )}
        </div>
        </div>
        </div>
    );
}