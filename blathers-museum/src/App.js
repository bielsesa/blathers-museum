import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/fish">Fish</Link></li>
          <li><Link to="/insects">Insects</Link></li>
          <li><Link to="/fossils">Fossils</Link></li>
          <li><Link to="/art">Art</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/fish" component={Fish} />
        <Route exact path="/insects" component={Insects} />
        <Route exact path="/fossils" component={Fossils} />
        <Route exact path="/art" component={Art} />
      </div>
    </HashRouter>
  );
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
