import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { isBrowser, isMobile } from 'react-device-detect';
import MenuMobile from './components/MenuMobile';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        {isBrowser ?
          <>
          <ToastContainer/>
            <Header />
            <Route exact path="/" component={Home} />

          </>
          : isMobile ?
            <>
            <ToastContainer/>
              <MenuMobile />
              <Route exact path="/" component={Home} />
            </>
            : 
            <>
            </>
        }



      </Router>
    </div>
  );
}

export default App;
