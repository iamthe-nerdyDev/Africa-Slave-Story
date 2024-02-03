import React, { useEffect, useRef } from "react";
import { Mobile, Router } from "./components";
import { useWebContext } from "./context/ContextProvider";
import Audio from "./assets/background-audio.mp3";
import TypingAudio from "./assets/typing.mp3";

import "./main.css";

const App: React.FC<{}> = () => {
  const { playAudio, isMuted, page, value, volume } = useWebContext();

  const audioRef = useRef<HTMLAudioElement>(null);
  const typingAudio = useRef<HTMLAudioElement>(null);

  function handlePlay() {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.muted = isMuted;

      audioElement.volume = volume;

      if (playAudio) audioElement.play();
      else audioElement.pause();
    }
  }

  useEffect(() => {
    const typingElement = typingAudio.current;

    if (page == "/map" && !value) {
      if (typingElement) {
        typingElement.volume = 1;
        typingElement.play();
      }
    }

    if (page == "/map" && value && value.finishedTyping == true) {
      if (typingElement) typingElement.pause();
    }
  }, [page, value]);

  useEffect(() => handlePlay(), [isMuted, playAudio, volume]);

  return (
    <React.Fragment>
      <main className="d-block d-md-none">
        {/** Show a different page for mobile users */}
        <Mobile />
      </main>

      <main className="d-none d-md-block wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="mask">
          <Router />
        </div>
      </main>

      <audio className="audio" ref={audioRef} playsInline loop>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      <audio className="audio" ref={typingAudio} playsInline loop>
        <source src={TypingAudio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </React.Fragment>
  );
};

export default App;
