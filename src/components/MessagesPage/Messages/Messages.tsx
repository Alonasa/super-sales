import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {UsersList} from '../UsersList/UsersList';

export type DataType = {
  id: string
}

export type MessageType = {
  id: string
  message: string
}

export type MessagesListType = {
  [key: string]: Array<MessageType>
}

export type MessagesType = {
  data: Array<DataType>
  dialogsData: DialogsType
}

export const Messages = (props: MessagesType) => {
  const {data, dialogsData} = props
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let userData = dialogsData[d.id]
		
		return (
		  <>
            <UsersList userData={userData}/>
			<Dialog data={userData} id={d.id}/>
		  </>
		)
	  })}
	</Container>
  );
};