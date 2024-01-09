import React from "react";
import { Home, Mobile } from "./components";

import "./main.css";

const App: React.FC = () => {
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
    </React.Fragment>
  );
};

export default App;
