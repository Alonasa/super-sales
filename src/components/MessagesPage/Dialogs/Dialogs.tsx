import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {MessagesContent} from '../MessagesContent/MessagesContent';

export type DataType = {
  id: string
}

export type DialogsDatatype = {
  data: Array<DataType>
  dialogsData: DialogsType
  addNewMessage: (value: string) => void
}

export const Dialogs = (props: DialogsDatatype) => {
  const {data, dialogsData, addNewMessage} = props
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let userData = dialogsData[d.id]
		
		return (
			<Dialog key={d.id} data={userData} id={d.id}/>
		)
	  })}
	  <MessagesContent addNewMessage={addNewMessage}/>
	</Container>
  );
};