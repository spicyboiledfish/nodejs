import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../router/index';

ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));