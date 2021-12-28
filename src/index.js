import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar'
import Footer from './components/footer/footer';


export {
  Navbar,
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
