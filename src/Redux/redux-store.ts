import {combineReducers, createStore} from 'redux';
import addMessageReducer from './add-message-reducer';
import addsReducer from './adds-reducer';
import dialogsReducer from './dialogs-reducer';
import pricesReducer from './prices-reducer';
import dataReducer from './data-reducer';

export type DispatchACType = AddMessageAT | MakeFavoriteAT

export type AddMessageAT = ReturnType<typeof AddMessageAC>

export const AddMessageAC = (value: string) => {
  return {
    type: 'ADD-MESSAGE',
    newMessage: value
  } as const
}

export type MakeFavoriteAT = ReturnType<typeof MakeFavoriteAC>

export const MakeFavoriteAC = (isFavorite: boolean, id: string) => {
  return {
    type: 'MAKE-FAVORITE',
    isFavorite: isFavorite,
    id: id
  } as const
}

let reducers = combineReducers({
  items: addsReducer,
  messages: addMessageReducer,
  dialogsData: dialogsReducer,
  data: pricesReducer,
  dataId: dataReducer
});

let store = createStore(reducers);

export default store