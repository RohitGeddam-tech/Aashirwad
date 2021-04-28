import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Desktop/Home/Contact";
import About from "./Pages/About";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Path from "./Pages/Path";

const Routing = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Aashirwad" exact component={Home} />
          <Route path="/Aashirwad/About" component={About} />
          <Route path="/Aashirwad/Path" component={Path} />
          <Route path="/Aashirwad/Contacts" component={Contact} />
          <Route path="/Aashirwad/Form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;