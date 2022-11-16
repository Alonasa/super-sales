import {MessageType} from '../components/MessagesPage/Message/Messages';
import {v1} from 'uuid';
import {AddMessageAT, ID1, ID2, ID3} from './state';

let initialState = [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today? I need to check'},
  ]

let messages = {
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


const addMessageReducer = (state: any = messages, action: AddMessageAT) => {
    if (action.type === 'ADD-MESSAGE') {
	let message: MessageType = {
	  id: v1(),
	  message: action.newMessage
	}
	if (action.newMessage) {
	  return state.push(message)
	}
  } else {
	return state
  }
}

export default addMessageReducer