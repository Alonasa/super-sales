import {addMessage, state, subscribe} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App, {AppType} from './App';
import './index.css';

let rerenderEntireTree = (state: AppType) => {
  ReactDOM.render(
	<BrowserRouter>
	  <App state={state} addMessage={addMessage}/>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)