import React from "react";
import { Africa } from "../../icons";
import { useWebContext } from "../../context/ContextProvider";

const References: React.FC<{}> = () => {
  const { value, redirect } = useWebContext();

  function goBack() {
    if (value && value.previous) redirect(value.previous);
    else redirect("/");
  }

  return (
    <section className="home">
      <div className="back-arrow" onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
          >
            <path d="M244 400L100 256 244 112"></path>
            <path d="M120 256L412 256"></path>
          </g>
        </svg>
      </div>

      <div className="main r">
        <div className="header d-flex align-items-center pt-4 pt-lg-3 pt-xl-5">
          <h1>Voices of Liberation in</h1>
          <Africa />
        </div>

        <p className="title mb-4">References</p>

        <div className="refs">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={`ref-${index}`}>
              <img src={`/references/${index + 1}.png`} alt="xx-ref" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
