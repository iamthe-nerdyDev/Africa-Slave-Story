import React, { useEffect, useState } from "react";
import { useWebContext } from "../../context/ContextProvider";
import { herosInfo } from "../Map/tools";

const SingleCountry: React.FC<{}> = () => {
  type Heros = { name: string; videoURL: string };
  type Data = { code: string; map: JSX.Element; data: Heros[] };

  const { toggleMute, isMuted, redirect, setParams, togglePlayAudio, value } = useWebContext();

  function goBack() {
    setParams({ isRedirect: true });

    redirect("/map");

    togglePlayAudio();
    toggleMute();
  }

  const [data, setData] = useState<Data>();
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [selectedVideoURL, setSelectedVideoURL] = useState<string>();

  useEffect(() => {
    if (value && value.code) setData(herosInfo.find((item) => item.code == value.code));
    else redirect("/map");
  }, [value]);

  useEffect(() => {
    if (data?.data && data.data.length > 0) setSelectedVideoURL(data.data[0].videoURL);
  }, [data]);

  useEffect(() => {
    if (data && data.data[selectedIndex - 1]) {
      setSelectedVideoURL(data.data[selectedIndex - 1].videoURL);
    }
  }, [selectedIndex]);

  return (
    <React.Fragment>
      <div className="heros-box">
        <div className="controls">
          <div onClick={toggleMute}>
            <span>
              {!isMuted ? (
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
          {data?.data.map((item, i) => (
            <div
              onClick={() => setSelectedIndex(i + 1)}
              className={selectedIndex == i + 1 ? "active" : ""}
              key={`hero-${i}`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="main-single-country">{data?.map}</div>

        <div className="video">
          <iframe
            src={selectedVideoURL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleCountry;
