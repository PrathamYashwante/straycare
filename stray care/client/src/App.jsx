import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PostDetails from "./routes/PostDetails";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/posts/:id/update"
            element={<PostDetails />}
          ></Route>
          <Route exact path="/posts/:id" element={<UpdatePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
