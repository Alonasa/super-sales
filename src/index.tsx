import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';

let rerenderEntireTree = () => {
  ReactDOM.render(
	<BrowserRouter>
	  <Provider store={store}>
		<App/>
	  </Provider>
	</BrowserRouter>,
	document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(()=>{rerenderEntireTree()})