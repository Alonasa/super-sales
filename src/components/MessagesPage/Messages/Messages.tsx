import React from 'react';
import {Dialog} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {v1} from 'uuid';

const dialogsData = [
  {
	id: v1(),
	firstName: 'Bob',
	secondName: 'Michael',
	isOnline: false,
	messages: ['Hi', 'What are you doing?', 'Will you join lesson today?']
  },
  {
	id: v1(),
	firstName: 'Anna',
	secondName: 'Michael',
	isOnline: true,
	messages: ['Hi', 'What are you doing?', 'Will you join lesson today?']
  },
  {
	id: v1(),
	firstName: 'Kate',
	secondName: 'Michael',
	isOnline: false,
	messages: ['Hi', 'What are you doing?', 'Will you join lesson today?']
  },
]

export const Messages = () => {
  return (
	<Container style={{padding: '0 5vw'}}>
	  <Dialog data={dialogsData}/>
	</Container>
  );
};