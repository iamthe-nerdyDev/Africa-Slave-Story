import React from "react";
import { useWebContext } from "../../context/ContextProvider";
import { AlgeriaMap } from "../Map/tools/countries";

const SingleCountry: React.FC<{}> = () => {
  const { toggleMute, isMuted, redirect, setParams, togglePlayAudio } = useWebContext();

  function goBack() {
    setParams({ isRedirect: true });

    redirect("/map");

    togglePlayAudio();
    toggleMute();
  }

  return (
    <React.Fragment>
      <div className="heros-box">
        <div className="controls">
          <div onClick={toggleMute}>
            <span>
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path
                    id="SVGRepo_iconCarrier"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12.611L8.923 17.5 20 6.5"
                  ></path>
                </svg>
              ) : null}
            </span>
            <p>Mute</p>
          </div>

          <div onClick={toggleMute}>
            <span>
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path
                    id="SVGRepo_iconCarrier"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12.611L8.923 17.5 20 6.5"
                  ></path>
                </svg>
              ) : null}
            </span>
            <p>Auto Scroll</p>
          </div>
        </div>

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

        <div className="heros-lost">
          <div className="active">
            <p>Oba Ovonramwen of Benin</p>
          </div>
          <div>
            <p>King Koko of Nembe</p>
          </div>
        </div>

        <div className="main-single-country">
          <AlgeriaMap />
        </div>

        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/D2NkA-7WILc?si=raEQwlJJJpelEJ0Z"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleCountry;
