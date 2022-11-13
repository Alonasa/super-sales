import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';
import {MessagesContent} from '../MessagesContent/MessagesContent';
import {AddMessageAT} from '../../../Redux/state';

export type DataType = {
  id: string
}

export type DialogsDatatype = {
  data: Array<DataType>
  dialogsData: DialogsType
  dispatch: (value: AddMessageAT) => void
}

export const Dialogs = (props: DialogsDatatype) => {
  const {data, dialogsData, dispatch} = props
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let userData = dialogsData[d.id]
		
		return (
			<Dialog key={d.id} data={userData} id={d.id}/>
		)
	  })}
	  <MessagesContent addNewMessage={dispatch}/>
	</Container>
  );
};