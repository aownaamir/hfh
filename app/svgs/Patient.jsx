import React from "react";

const Patient = ({ color, size }) => {
  return (
    <svg
      fill={color}
      width={size}
      viewBox="0 0 32 32"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSerif="http://www.serif.com/"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M15.002,9l-2.003,0c-0.552,0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1l1.996,0l-0.006,1.997c-0.002,0.552 0.445,1.001 0.997,1.003c0.552,0.002 1.001,-0.445 1.003,-0.997l0.006,-2.003l2.004,0c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1.997,0l0.006,-1.997c0.002,-0.552 -0.445,-1.001 -0.997,-1.003c-0.551,-0.002 -1.001,0.445 -1.003,0.997l-0.006,2.003Z" />
      <path d="M5.992,23l0,2c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-2l16,0l0,2c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-2l1.008,-0c1.657,-0 3,-1.343 3,-3l0,-6c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,3l-17,-0l0,-1.019c0,-0.795 -0.316,-1.558 -0.879,-2.121c-0.562,-0.562 -1.325,-0.879 -2.121,-0.879l-4,0l0,-1.481c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l0,8.5c-0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879l0.992,0Zm22.008,-4l-24,-0l-0,1c-0,0.265 0.105,0.52 0.293,0.707c0.187,0.188 0.442,0.293 0.707,0.293c-0,0 22,-0 22,-0c0.552,-0 1,-0.448 1,-1l0,-1Zm-24,-4.019l-0,2.019l5,-0l0,-1.019c0,-0.265 -0.105,-0.519 -0.293,-0.707c-0.187,-0.187 -0.442,-0.293 -0.707,-0.293l-4,0Z" />
    </svg>
  );
};

export default Patient;
