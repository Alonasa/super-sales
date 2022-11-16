import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
	<BrowserRouter>
	  <App state={state} dispatch={store.dispatch.bind(store)}/>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state)})