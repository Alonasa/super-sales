import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

let rerenderEntireTree = () => {
  ReactDOM.render(
	<BrowserRouter>
	  <App state={store.getState()} addMessage={store.addMessage.bind(store)}/>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)