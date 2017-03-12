import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

//import Routes from './routes';

import App from './components/Greetings/index';
import './index.css';

ReactDOM.render(
//  <Routes history={browserHistory} />,
  <App />,
  document.getElementById('root')
);
