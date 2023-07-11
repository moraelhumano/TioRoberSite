import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import 'reactjs-popup/dist/index.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from "./pages/Bio";
import PepsiCenterBanner from "./components/PepsiCenterBanner";
import Collaborations from "./components/Collaborations";




function App() {

  return (
    <>
    <Router>
      <Switch>
        <React.Fragment>
            <div className="flex flex-col">
            <PepsiCenterBanner />
              <Route   path="/" component={Home} exact />
              {/* <Route path="/alumni" component={Alumni}  /> */}
              <Route path="/shows" component={Bio}  />
              <Route path="/colaboraciones" component={Collaborations}  />
            </div>
        </React.Fragment>
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;



