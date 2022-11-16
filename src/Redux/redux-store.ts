import {combineReducers, createStore} from 'redux';
import addMessageReducer from './add-message-reducer';
import addsReducer from './adds-reducer';
import dialogsReducer from './dialogs-reducer';
import pricesReducer from './prices-reducer';
import dataReducer from './data-reducer';

export type DispatchACType = AddMessageAT

export type AddMessageAT = {
  type: 'ADD-MESSAGE'
  newMessage: string
}

let reducers = combineReducers({
  messages: addMessageReducer,
  adds: addsReducer,
  dialogs: dialogsReducer,
  prices: pricesReducer,
  dataId: dataReducer
});

let store = createStore(reducers);

export default store
