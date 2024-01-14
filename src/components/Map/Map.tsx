import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useWebContext } from "../../context/ContextProvider";
import AfricaMap from "./tools/AfricaMap";
import { MapData, mapData } from "./tools";

const Map: React.FC = () => {
  const [finishedTyping, setFinishedTyping] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [selectedCountryData, setSelectedCountryData] = useState<MapData>();

  useEffect(() => {
    setSelectedCountryData(mapData.find((country) => country.code == selectedCountry));
  }, [selectedCountry]);

  const { togglePlayAudio, isMuted, toggleMute } = useWebContext();

  return (
    <React.Fragment>
      <div className={`typewriter-box ${finishedTyping ? "d-none" : "d-flex"}`}>
        <Typewriter
          options={{ delay: 200 }}
          onInit={(typewriter) => {
            typewriter
              .typeString("IN THE BEGINNING")
              .pauseFor(200)
              .callFunction(togglePlayAudio)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .callFunction(() => setFinishedTyping(true))
              .start();
          }}
        />
      </div>

      <div className={`map-box ${finishedTyping ? "d-flex" : "d-none"}`}>
        <div className="mute" onClick={toggleMute}>
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

        <div className="selected-country">
          {selectedCountryData ? (
            <React.Fragment>
              <div>{selectedCountryData.logo}</div>
              <h1>
                {selectedCountryData.name} <span>({selectedCountryData.code})</span>
              </h1>
            </React.Fragment>
          ) : (
            <p>
              Hover or Click on any country for <span>interaction</span>
            </p>
          )}
        </div>

        <div className="map">
          <AfricaMap setSelectedCountry={setSelectedCountry} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map;
