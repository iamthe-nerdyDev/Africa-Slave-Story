import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { useWebContext } from "../../context/ContextProvider";
import AfricaMap from "./tools/AfricaMap";
import { MapData, mapData } from "./tools";

const Map: React.FC<{}> = () => {
  const [finishedTyping, setFinishedTyping] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [selectedCountryData, setSelectedCountryData] = useState<MapData>();
  const [displaySkip, setDisplaySkip] = useState<boolean>(false);

  useEffect(() => {
    setSelectedCountryData(mapData.find((country) => country.code == selectedCountry));
  }, [selectedCountry]);

  const { isMuted, toggleMute, value, setParams, setVolume } = useWebContext();

  // const delimeter = `<p class="type-u"><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span></p>`;
  const delimeter = "<br/><br/>";

  useEffect(() => {
    if (value && value.isRedirect == true) {
      setFinishedTyping(true);
      setDisplaySkip(false);
    }
  }, [value]);

  const divRef = useRef<any>(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 3000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <React.Fragment>
      {displaySkip ? (
        <div
          className="skipper"
          onClick={() => {
            setFinishedTyping(true);
            setParams({ finishedTyping: true });
            setVolume(1);
            setDisplaySkip(false);
          }}
        >
          <span>
            Skip <span>&raquo;</span>
          </span>
        </div>
      ) : null}

      <div className={`typewriter-box ${finishedTyping ? "d-none" : "d-block"}`} ref={divRef}>
        <Typewriter
          options={{ delay: 40 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<p class='type'>In the beginning, Africa stood proud, A land of untold tales, strong and loud. Under the vast sky, a continent&apos;s embrace, Rich cultures woven, each in its own grace. Savannas stretched with a golden hue, Mountains whispered tales, ancient and true. Rivers carved stories through the ancient land, Nature&apos;s masterpiece, crafted by a divine hand.</p>"
              )
              .callFunction(() => setDisplaySkip(true))
              .pasteString(delimeter, null)
              .typeString(
                "<p class='type'>In the heart, the drumbeats of a thousand tribes, Echoes of unity in diverse vibes. The sun painted patterns on the desert's face, A dance of resilience, a rhythmic trace. Forests whispered secrets to the open air, Where every creature found its haven and lair. Elephants roamed in majestic might, A symphony of life, a harmonious sight.</p>"
              )
              .pasteString(delimeter, null)
              .typeString(
                "<p class='type'>Great Zimbabwe rose with stones that speak, Of a civilization strong, not meek. Timbuktu&apos;s wisdom flowed in written streams, A wealth of knowledge, beyond wildest dreams. Great Benin rose with stones that speak, Of a kingdom strong, not meek. Ife&apos;s wisdom flowed in artistic streams, A wealth of culture, beyond wildest dreams.</p>"
              )
              .pasteString(delimeter, null)
              .typeString(
                "<p class='type'>But then, a shadow crept across the land, Foreign sails approached, a shifting sand. Colonial masters with a different claim, To alter destinies, to play a different game.</p>"
              )
              .pasteString(delimeter, null)
              .typeString(
                "<p class='type'>In the beginning, Africa knew its own tune, A continent dancing beneath the moon. Yet, the winds of change began to blow, As history unfolded, a tale of ebb and flow.</p>"
              )
              .pauseFor(2000)
              .callFunction(() => {
                setFinishedTyping(true);
                setParams({ finishedTyping: true });
                setDisplaySkip(false);
                setVolume(1);
              })
              .start();
          }}
        />
      </div>

      <div className={`map-box ${finishedTyping ? "d-flex" : "d-none"}`}>
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
        </div>

        <div className="selected-country">
          {selectedCountryData ? (
            <React.Fragment>
              <div>{selectedCountryData.logo}</div>
              <h1>{selectedCountryData.name}</h1>
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
