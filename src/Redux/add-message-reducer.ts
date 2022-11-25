import {MessageType} from '../components/MessagesPage/Message/Messages';
import {v1} from 'uuid';
import {ID1, ID2, ID3} from './state';

export type AddMessageAT = ReturnType<typeof AddMessageAC>

export const AddMessageAC = (value: string) => {
  return {
	type: 'ADD-MESSAGE',
	newMessage: value
  } as const
}

type InitialStateType = {
  [key: string]: Array<MessageType>
}


let messages: InitialStateType = {
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

const addMessageReducer = (state = messages, action: AddMessageAT): InitialStateType | undefined => {
  if (action.type === 'ADD-MESSAGE') {
	let message: MessageType = {
	  id: v1(),
	  message: action.newMessage
	}
	
	if (action.newMessage) {
	  return {...state, [ID3]: [...state[ID3], message]}
	}
  } else {
	return state
  }
}

export default addMessageReducer