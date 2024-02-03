import React from "react";
import { useWebContext } from "../../context/ContextProvider";
import { Home, Map, References, SingleCountry } from "..";

const Router: React.FC<{}> = () => {
  const { page, value } = useWebContext();

  return page === "/" ? (
    <Home />
  ) : page === "/map" ? (
    <Map />
  ) : page === "/single-country" && value ? (
    <SingleCountry />
  ) : page === "/references" ? (
    <References />
  ) : (
    "how did you get here?????"
  );
};

export default Router;
