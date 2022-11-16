import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {MessagesContent} from '../MessagesContent/MessagesContent';
import {AddMessageAT} from '../../../Redux/redux-store';
import {MessagesListType} from '../Message/Messages';

export type DataType = {
  id: string
}

export type DialogsDatatype = {
  data: Array<DataType>
  dialogsData: DialogsType
  messages: MessagesListType
  dispatch: (value: AddMessageAT) => void
}

export const Dialogs = (props: DialogsDatatype) => {
  const {data, dialogsData, messages, dispatch} = props
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let userData = dialogsData[d.id]
		
		return (
			<Dialog key={d.id} data={userData} id={d.id} messages={messages[d.id]}/>
		)
	  })}
	  <MessagesContent addNewMessage={dispatch}/>
	</Container>
  );
};