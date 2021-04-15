import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PhotoList from "./pages/PhotoList";
import Photo from "./pages/Photo";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PhotoList} exact />
          <Route path="/photos/:id" component={Photo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;