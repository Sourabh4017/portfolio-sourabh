import React, { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * AnimatedBackground component
 * - moving gradient background
 * - floating particles
 * - interactive cursor glow
 */
export default function AnimatedBackground() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "cursor-glow";
    Object.assign(cursor.style, {
      position: "fixed",
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      transition: "transform 0.05s linear",
    });
    document.body.appendChild(cursor);

    const handleMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Moving gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, #00c6ff, #0072ff, #ff6ec4, #7873f5)",
          backgroundSize: "800% 800%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/10 blur-sm"
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
