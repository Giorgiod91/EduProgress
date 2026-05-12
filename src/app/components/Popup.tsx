"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => setShowPopup(false), 12000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ x: "120%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "120%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-3 rounded-xl border border-primary/30 bg-base-200/90 px-4 py-3 shadow-xl shadow-primary/10 backdrop-blur-sm"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-base">
            🌟
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Student Deal</p>
            <p className="text-xs text-base-content/60">50% off Pro plan!</p>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="ml-2 text-base-content/30 transition-colors hover:text-white"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Popup;
