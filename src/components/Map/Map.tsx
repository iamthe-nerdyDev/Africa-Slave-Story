import React from "react";
import Typewriter from "typewriter-effect";
import { useWebContext } from "../../context/ContextProvider";

const Map: React.FC = () => {
  const { togglePlayAudio } = useWebContext();

  function init() {
    // show the map from this fn
  }

  return (
    <div className="typewriter-box">
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
            .pauseFor(3500)
            .callFunction(init)
            .start();
        }}
      />
    </div>
  );
};

export default Map;
