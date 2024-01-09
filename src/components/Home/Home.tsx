import React from "react";
import { Africa, Headphone } from "../../icons";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="main">
        <div className="header d-flex align-items-center pt-5 pt-lg-3 pt-xl-5">
          <h1>Voices of Liberation in</h1>
          <Africa />
        </div>

        <div className="intro">
          <p>
            Whispers from the shadows beckon...
            <br />
            Dare to listen? <span>Click to Start</span>
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
