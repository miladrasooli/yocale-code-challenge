

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { initAxios } from './app/Services';


initAxios();

ReactDOM.render(

    <App />,
  document.getElementById('root'),
);
