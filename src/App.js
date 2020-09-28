import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
