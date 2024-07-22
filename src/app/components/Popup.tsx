"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 12000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div>
      {" "}
      {showPopup && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="text-red w-61 fixed top-0 mt-2 h-[70px] translate-x-1/4 rounded-lg border-4 border-primary bg-gray-600 p-2 shadow-lg duration-500 group-hover:translate-x-0"
        >
          <p>For students: 50% off the Pro plan! 🌟😃🌟</p>
        </motion.div>
      )}
    </div>
  );
}

export default Popup;
