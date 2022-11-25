import React from 'react';
import state from './Redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';

  ReactDOM.render(
	<BrowserRouter>
	  <Provider store={state}>
		<App/>
	  </Provider>
	</BrowserRouter>,
	document.getElementById('root')
  );