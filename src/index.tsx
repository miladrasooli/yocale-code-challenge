

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { initAxios } from './app/Services';
import axios from 'axios'

initAxios();
let abortController: AbortController ;
const fetchTickets = () => {

  try {
    if (abortController) abortController.abort();
    abortController = new AbortController();

    axios.get('/tickets', { signal: abortController.signal })
  }
  catch (er) {

  }

};

try {
  fetchTickets();
 
}
catch (e) {

}


ReactDOM.render(

  <App />,
  document.getElementById('root'),
);
