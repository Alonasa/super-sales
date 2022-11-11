import React from 'react';
import {Dialog, DialogsType} from '../Dialog/Dialog';
import {Container} from '@mui/material';

export type DataType = {
  id: string
}

export type DialogsDatatype = {
  data: Array<DataType>
  dialogsData: DialogsType
}

export const Dialogs = (props: DialogsDatatype) => {
  const {data, dialogsData} = props
  return (
	<Container style={{padding: '0 5vw'}}>
	  {data.map(d => {
		let userData = dialogsData[d.id]
		
		return (
		  <>
			<Dialog data={userData} id={d.id}/>
		  </>
		)
	  })}
	</Container>
  );
};