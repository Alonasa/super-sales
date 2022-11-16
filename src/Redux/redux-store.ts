import {combineReducers, createStore} from 'redux';
import addMessageReducer from './add-message-reducer';
import addsReducer from './adds-reducer';
import dialogsReducer from './dialogs-reducer';
import pricesReducer from './prices-reducer';

let reducers = combineReducers({
  messages: addMessageReducer,
  adds: addsReducer,
  dialogs: dialogsReducer,
  prices: pricesReducer
});

let store = createStore(reducers);

export default store