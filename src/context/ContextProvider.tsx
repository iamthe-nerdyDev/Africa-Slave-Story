import React, { createContext, useContext, useState } from "react";

export type ContextProps = {
  page: string;
  playAudio: boolean;
  value?: { [key: string]: any };
  isMuted: boolean;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  toggleMute: () => void;
  redirect: (to: string) => void;
  setParams: (param: { [key: string]: any }) => void;
  togglePlayAudio: () => void;
};

const WebContext = createContext<ContextProps>({
  page: "/",
  playAudio: false,
  isMuted: false,
  volume: 1,
  setVolume() {},
  toggleMute() {},
  redirect() {},
  setParams() {},
  togglePlayAudio() {},
});

export const useWebContext = () => useContext(WebContext);

type Props = { children?: React.ReactNode };

const WebProvider: React.FC<Props> = (props) => {
  const [page, setPage] = useState<string>("/");
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [value, setValue] = useState<ContextProps["value"]>();
  const [playAudio, setPlayAudio] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  const toggleMute = () => setIsMuted(!isMuted);
  const redirect = (to: string) => setPage(to);
  const setParams = (param: { [key: string]: any }) => setValue(param);
  const togglePlayAudio = () => setPlayAudio(!playAudio);

  return (
    <WebContext.Provider
      value={{
        page,
        value,
        isMuted,
        playAudio,
        volume,
        setVolume,
        toggleMute,
        redirect,
        setParams,
        togglePlayAudio,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
};

export default WebProvider;
