import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';

export type DataType = {
  id: string
}

export type MessageType = {
  id: string
  message: string
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