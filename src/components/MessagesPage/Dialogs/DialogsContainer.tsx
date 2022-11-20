import React from 'react';
import {connect} from 'react-redux';
import {Dialogs, DialogsDatatype} from './Dialogs';


let mapStateToProps = (store: DialogsDatatype) => {
  return {
	dataId: store.dataId,
	dialogsData: store.dialogsData,
	messages: store.messages,
  }
}


const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer