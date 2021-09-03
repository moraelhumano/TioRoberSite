import React from "react";
import ImageUploading from 'react-images-uploading';



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
import AlumniRegister from './pages/AlumniRegister';
import Bio from "./pages/Bio";
import Alumni from "./components/Alumni";




function App() {

  return (
    <>
    <Router>
      <Switch>
        <React.Fragment>
          <NavBar />
            <div>
              <Route  className="container p-4 col-md-10"  path="/" component={Home} exact />
              {/* <Route path="/alumni" component={Alumni}  /> */}
              <Route path="/bio" component={Bio}  />
            </div>
        </React.Fragment>
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;



