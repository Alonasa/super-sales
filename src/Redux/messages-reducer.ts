import {MessageType} from '../components/MessagesPage/Message/Messages';
import {v1} from 'uuid';
import {AddMessageAT} from './state';

const messagesReducer = (state: Array<MessageType>, action: AddMessageAT) => {
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

export default messagesReducer