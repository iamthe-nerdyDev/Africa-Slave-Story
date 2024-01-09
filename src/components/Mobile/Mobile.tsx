import React from "react";
import { MobileOff } from "../../icons";

const Mobile: React.FC = () => {
  return (
    <div className="mobile-screen px-2">
      <MobileOff />
      <h1>Oops! Mobile device not supported</h1>
      <p>Consider switching to a bigger screen to continue</p>
      <span>window.innerWidth &gt;= 768px</span>
    </div>
  );
};

export default Mobile;
