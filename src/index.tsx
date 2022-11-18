import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
	<BrowserRouter>
	  <StoreContext.Provider value={state}>
		<App/>
	  </StoreContext.Provider>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state)})