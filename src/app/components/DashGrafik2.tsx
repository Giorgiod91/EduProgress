import React from "react";

type Props = {};

type StyleProps = {
  "--value": string;
  "--size": string;
  "--thickness": string;
} & React.CSSProperties;

function DashGrafik2({}: Props) {
  return (
    <div
      className="radial-progress border-primary bg-red-300 text-primary-content"
      style={
        {
          "--value": "70",
          "--size": "12rem",
          "--thickness": "2rem",
        } as StyleProps
      }
      role="progressbar"
    >
      70%
    </div>
  );
}

export default DashGrafik2;
