import React from "react";
//Components and Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
