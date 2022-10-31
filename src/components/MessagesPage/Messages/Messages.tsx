import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {v1} from 'uuid';

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
		{
		  id: v1(),
		  message: 'Will you join lesson today?'
		},
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

type MessagesType = {
  id: (id: string) => void
}


export const Messages = () => {
  
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
	    let dialog = dialogsData[d.id]
		let shortenId = d.id.substr(0,8)
	    
		return <Dialog data={dialog} id={shortenId}/>
	  })}
	</Container>
  );
};