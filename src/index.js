import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from "./views/Home";
import Blog from "./views/Blog";
import Team from "./views/Team";

ReactDOM.render(<BrowserRouter>  
                <App />
                </BrowserRouter>,
                  document.getElementById('root'));
registerServiceWorker();
