import React from 'react';
import {Dialog} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {v1} from 'uuid';

const ID1 = v1();
const ID2 = v1();
const ID3 = v1();


type DataType = {
  id: string
}

export type MessageType = {
  id: string
  message: string
}

const data: Array<DataType> = [
  {id: ID1},
  {id: ID2},
  {id: ID3}
]

const messages:MessageType[][] = [
  [
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
  [
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
  [
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
]

const dialogsData = {
  [ID1]: [{
	firstName: 'Bob',
	secondName: 'Michael',
	isOnline: false,
	messages: messages[0]
  }],
  [ID2]: [{
	firstName: 'Anna',
	secondName: 'Michael',
	isOnline: true,
	messages: messages[1]
  }],
  [ID3]: [{
	firstName: 'Kate',
	secondName: 'Michael',
	isOnline: false,
	messages: messages[2]
  }],
}

export const Messages = () => {
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let data = dialogsData[d.id]
	 
		return (
		  <>
			<Dialog data={data} id={d.id}/>
		  </>
		)
	  })}
	</Container>
  );
};