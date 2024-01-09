import React from "react";
import { IconProps } from "./types";

const Africa: React.FC<IconProps> = ({ width, height, fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 200 200"
    >
      <path
        fill={fill || "#FCF8E8"}
        d="M78.734 7.615l-34.293 3.567-28.806 37.037v20.576l21.947 24.143 25.24-5.213 19.205 3.841-4.115 14.815 13.168 23.868-6.584 16.735 15.543 45.401 20.946-3.425 19.204-21.674 1.646-15.089 12.346-9.328-2.47-27.16 32.654-41.795-20.308 2.837-31.001-54.046-48.835-3.292-5.486-11.797zm98.573 124.922l-5.626 8.149-5.237.193c-4.629 9.501-4.921 14.851-5.433 25.995l6.791 1.747 8.536-20.37.969-15.714z"
      ></path>
    </svg>
  );
};

export default Africa;
