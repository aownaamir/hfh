import React from "react";

const Gynecology = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18H10M12 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C13.1256 3 14.1643 3.37194 15 3.99963"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gynecology;
