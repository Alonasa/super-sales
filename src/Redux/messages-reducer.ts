import {MessageType} from '../components/MessagesPage/Message/Messages';
import {v1} from 'uuid';
import {AddMessageAT} from './state';
import {DialogType} from '../components/MessagesPage/Dialog/Dialog';

const messagesReducer = (state: Array<DialogType>, action: AddMessageAT) => {
  if (action.type === 'ADD-MESSAGE') {
	let message: MessageType = {
	  id: v1(),
	  message: action.newMessage
	}
	if (action.newMessage) {
	  return state.map(v => v.messages.push(message))
	}
  } else {
	return state
  }
}

export default messagesReducer