import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Algorithms from './Algorithms/algorithms';
import Porfolio from './porfolio';
import Blog from './blog';
import Contact from './contact';
import WelcomePage from './welcomePage';
const Main = () => (
  <Switch>
    <Route exact path="/About" component={About} />
    <Route exact path="/Algorithms" component={Algorithms} />
    <Route exact path="/Porfolio" component={Porfolio} />
    <Route exact path="/Blog" component={Blog} />
    <Route exact path="/Contact" component={Contact} />
    <Route path="*" component={WelcomePage} />
  </Switch>
);
export default Main;
