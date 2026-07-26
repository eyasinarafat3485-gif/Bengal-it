"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070A13]/90 backdrop-blur-md transition-all duration-300">
            {/* Outer Glowing Animated Ring */}
            <div className="relative flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-20 h-20 rounded-full border-4 border-transparent border-t-tech-cyan border-r-purple-500 border-b-cyan-500 shadow-lg shadow-tech-cyan/20"
                />

                {/* Inner Counter-Rotating Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                    className="absolute w-12 h-12 rounded-full border-4 border-transparent border-b-tech-cyan border-t-purple-400 border-l-blue-500"
                />

                {/* Center Glowing Pulse Core */}
                <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="absolute w-4 h-4 bg-gradient-to-r from-tech-cyan to-purple-500 rounded-full shadow-md shadow-tech-cyan/50"
                />
            </div>

            {/* Professional Brand Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
            >
                <p className="text-sm font-semibold tracking-widest text-white uppercase">
                    Bengal<span className="text-tech-cyan">-IT</span>
                </p>
                <p className="text-xs text-gray-400 mt-1 animate-pulse">
                    Loading ...
                </p>
            </motion.div>
        </div>
    );
}