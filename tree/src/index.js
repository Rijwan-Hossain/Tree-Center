import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/material-design-icons/iconfont/material-icons.css'
import '../node_modules/materialize-css/dist/css/materialize.css'
import * as M from "../node_modules/materialize-css/dist/js/materialize.js"

import { Provider } from 'react-redux'; 
import store from './Store/index'

export default M 

ReactDOM.render( 
    <Provider store={ store }> 
        <App /> 
    </Provider>, 
document.getElementById('root')); 

serviceWorker.unregister();

