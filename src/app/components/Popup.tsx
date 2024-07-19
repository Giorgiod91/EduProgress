"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Popup({}: Props) {
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
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div>
      {" "}
      {showPopup && (
        <motion.div className="text-red w-61 fixed top-0 mt-2 h-[70px] translate-x-1/4 bg-white p-2 shadow-lg duration-500 group-hover:translate-x-0">
          <p>For students: 50% off the Pro plan!</p>
        </motion.div>
      )}
    </div>
  );
}

export default Popup;
