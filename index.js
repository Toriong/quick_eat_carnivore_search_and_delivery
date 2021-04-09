import React from 'react';
import ReactDOM from 'react-dom';
import { Pages } from "./Pages"
import './index.css';
import './restaurants.css';
import './navBar.css';
import './meatItem.css'
import './menu.css'




ReactDOM.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
  document.getElementById('root')
);

