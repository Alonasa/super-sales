import React from 'react';
import {connect} from 'react-redux';
import {Dialogs, DialogsDatatype} from './Dialogs';
import {AddMessageAT} from '../../../Redux/redux-store';

let mapStateToProps = (store: any) => {
  return {
	data: store.dataId,
	dialogsData: store.dialogs,
	messages: store.messages,
	dispatch: store.dispatch
  }
}

let mapDispatchToProps = (dispatch: AddMessageAT) => {
  return {
	dispatch
  }
}


const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer