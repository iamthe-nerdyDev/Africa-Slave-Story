import React, { useEffect, useRef } from "react";
import { Home, Mobile } from "./components";
import { useWebContext } from "./context/ContextProvider";
import Audio from "./assets/background-audio.mp3";

import "./main.css";

const App: React.FC = () => {
  const { playAudio, isMuted } = useWebContext();

  const audioRef = useRef<HTMLAudioElement>(null);

  function handlePlay() {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.muted = isMuted;

      audioElement.play();
    }
  }

  useEffect(() => {
    if (playAudio) handlePlay();
  }, [isMuted, playAudio]);

  return (
    <React.Fragment>
      <main className="d-block d-md-none">
        {/** Show a different page for mobile users */}
        <Mobile />
      </main>

      <main className="d-none d-md-block">
        {/** Show a different page for tablet &> users */}
        <Home />
      </main>

      <audio className="audio" ref={audioRef} controls={true}>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </React.Fragment>
  );
};

export default App;
