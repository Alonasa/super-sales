import {
  MessagesListType,
  MessageType
} from '../components/MessagesPage/Message/Messages';
import {v1} from 'uuid';
import {AddMessageAT} from './redux-store';
import {ID1, ID2, ID3} from './state';

let messages:MessagesListType = {
  	[ID1]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today?'},
  ],
	[ID2]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today?'},
  ],
	[ID3]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today? I need to check'},
  ],
}


const addMessageReducer = (state = messages, action: AddMessageAT) => {
  if (action.type === 'ADD-MESSAGE') {
	let message: MessageType = {
	  id: v1(),
	  message: action.newMessage
	}
 
	if (action.newMessage) {
	  let newState = {...state}
	  return {...newState, [ID3]:[...messages[ID3],message]}
	}
  } else {
	return state
  }
}

export default addMessageReducer