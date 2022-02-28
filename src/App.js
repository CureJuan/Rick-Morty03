import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Totals from "./components/Totals";
import Footer from "./components/Footer";
import CustomHeader from "./components/CustomHeader";
import { CharacterDetailContainer } from "./containers/CharacterDetailContainer";
import { EpisodeDetailContainer } from "./containers/EpisodeDetailContainer";
import { HomeContainer } from "./containers/HomeContainer";
import { LocationDetailContainer } from "./containers/LocationDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="app">
      <Router>
        <CustomHeader />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route
            exact
            path="/characters/:id"
            component={CharacterDetailContainer}
          />
          <Route
            exact
            path="/episodes/:id"
            component={EpisodeDetailContainer}
          />
          <Route
            exact
            path="/locations/:id"
            component={LocationDetailContainer}
          />
        </Switch>
        <Totals />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
