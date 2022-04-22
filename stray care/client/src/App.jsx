import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>

  <Route exact path = "/" component = {Home}


      </Router>
    </div>
  );
};

export default App;
