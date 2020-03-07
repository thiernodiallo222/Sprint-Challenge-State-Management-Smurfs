import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from './reducers/reducer';

import { createStore } from 'redux';

import { Provider, connect } from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(reducer);


ReactDOM.render(
    <Provider store ={ store }>
      <App />  
    </Provider>
,document.getElementById("root"));
