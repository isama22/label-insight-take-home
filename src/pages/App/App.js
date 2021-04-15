import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PhotoList from "../PhotoList";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PhotoList} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;