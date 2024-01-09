import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WebProvider from "./context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WebProvider>
      <App />
    </WebProvider>
  </React.StrictMode>
);
