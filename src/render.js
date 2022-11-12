import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage} from "./Redux/state";
import './index.css';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addMessage={addMessage}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}