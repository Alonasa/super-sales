import React, {useState} from 'react';
import {Dialog, DialogType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {v1} from 'uuid';
import {Message, MessagesListType, MessageType} from '../Message/Message';

const ID1 = v1();
const ID2 = v1();
const ID3 = v1();


type DataType = {
  id: string
}
const data:Array<DataType> = [
  {id: ID1},
  {id: ID2},
  {id: ID3}
]

const dialogsData = {
  [ID1]: [{
	firstName: 'Bob',
	secondName: 'Michael',
	isOnline: false,
	messages: [
	  {
		id: v1(),
		message: 'Hi'
	  },
	  {
		id: v1(),
		message: 'What are you doing?',
	  },
	  {id: v1(), message: 'Will you join lesson today?'},
	]
  }],
  [ID2]: [{
	firstName: 'Anna',
	secondName: 'Michael',
	isOnline: true,
	messages: [
	  {
		id: v1(),
		message: 'Hi'
	  },
	  {
		id: v1(),
		message: 'What are you doing?',
	  },
	  {
		id: v1(),
		message: 'Will you join lesson today?'
	  },
	]
  }],
  [ID3]: [{
	firstName: 'Kate',
	secondName: 'Michael',
	isOnline: false,
	messages: [
	  {id: v1(), message: 'Hi'},
	  {id: v1(), message: 'What are you doing?',},
	  {id: v1(), message: 'Will you join lesson today???'},
	]
  }],
}
let myMess:Array<MessagesListType>


export const Messages = () => {
  let [messages, setMessages] = useState<Array<MessageType>>()
  let [messagesList, setMessagesList] = useState<boolean>(false)
  
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
	 
		let dialog: Array<DialogType> = dialogsData[d.id]
		
		const messagesData = (id: string) => {
		  if (d.id === id) {
			myMess = dialogsData[id].map(d => d.messages)
			setMessagesList(true)
			//setMessages(data)
		  }
		}
		
		return (
		  <>
			<Dialog data={dialog} id={d.id} messagesList={messagesData}
					messagesState={messagesList} messages={messages}/>
			<Message messages={myMess}/>
		  </>
		)
	  })}
	</Container>
  );
};