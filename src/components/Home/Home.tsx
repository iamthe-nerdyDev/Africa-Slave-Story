import React from "react";
import { Africa, Headphone } from "../../icons";
import { useWebContext } from "../../context/ContextProvider";

const Home: React.FC<{}> = () => {
  const { redirect, togglePlayAudio } = useWebContext();

  return (
    <section className="home">
      <div className="main">
        <div className="header d-flex align-items-center pt-4 pt-lg-3 pt-xl-5">
          <h1>Voices of Liberation in</h1>
          <Africa />
        </div>

        <div className="intro">
          <p>
            Whispers from the shadows beckon...
            <br />
            Dare to listen?&nbsp;
            <span
              onClick={() => {
                togglePlayAudio();
                redirect("/map");
              }}
            >
              Click to Start
            </span>
          </p>
        </div>

        <div className="bottom d-flex flex-column align-items-center">
          <div className="headphone">
            <Headphone />
          </div>
          <p>Audio inclusive, please put on headphone</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
