import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
	<BrowserRouter>
	  <Provider store={state}>
		<App/>
	  </Provider>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state)})