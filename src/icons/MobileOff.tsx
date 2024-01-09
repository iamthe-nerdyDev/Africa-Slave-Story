import React from "react";
import { IconProps } from "./types";

const MobileOff: React.FC<IconProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "currentColor"}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M18 20H7.828L6 21.828v.648A1.524 1.524 0 007.524 24h9.952A1.524 1.524 0 0019 22.476V8.828l-1 1zm0 2.477a.524.524 0 01-.524.523H14v-1h-3v1H7.524A.524.524 0 017 22.477V21h11zm4.4-19.17l-.354-.353-.354-.354L19 5.293v-2.77A1.524 1.524 0 0017.476 1H7.524A1.524 1.524 0 006 2.524v15.769l-3.4 3.4.354.353.354.353zM7 2.524A.524.524 0 017.524 2h9.952a.524.524 0 01.524.523V3H7zM7 4h11v2.293l-11 11z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  );
};

export default MobileOff;
