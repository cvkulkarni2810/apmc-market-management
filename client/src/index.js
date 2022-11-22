import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './index.css';
import FarmerDash from './FarmerDash';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { about } from './about/about';
import { Dashboard } from './Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
                 <Route exact path='/' element={< App />}></Route>
                 <Route exact path='/farmer' element={< FarmerDash />}></Route>
                 <Route exact path='/dashboard' element={< Dashboard/>}></Route>
                 <Route exact path='/about' element={< about/>}></Route>

      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

