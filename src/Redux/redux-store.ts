import {combineReducers, createStore} from 'redux';
import addMessageReducer from './add-message-reducer';
import addsReducer from './adds-reducer';
import dialogsReducer from './dialogs-reducer';
import pricesReducer from './prices-reducer';
import dataReducer from './data-reducer';

let rootReducer = combineReducers({
  items: addsReducer,
  messages: addMessageReducer,
  dialogsData: dialogsReducer,
  data: pricesReducer,
  dataId: dataReducer
});

let state = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;
export default state;