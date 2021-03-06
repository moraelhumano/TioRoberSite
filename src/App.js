import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import 'reactjs-popup/dist/index.css';
import NavBar from './components/Navbar';

import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from "./pages/Bio";




function App() {

  return (
    <>
    <Router>
      <Switch>
        <React.Fragment>
            <div>
            <NavBar />
              <Route   path="/" component={Home} exact />
              {/* <Route path="/alumni" component={Alumni}  /> */}
              <Route path="/calendario" component={Bio}  />
            </div>
        </React.Fragment>
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;



