"use client";
import React, { useEffect, useState } from "react";

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
        <div className="text-red fixed top-0 mt-2 w-48 rounded bg-white p-4 shadow-lg">
          <p>For students: 50% off the Pro plan!</p>
        </div>
      )}
    </div>
  );
}

export default Popup;
