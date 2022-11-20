import React from 'react';
import {ContentType, MessagesContent} from './MessagesContent';
import {connect} from 'react-redux';
import {AddMessageAT} from '../../../Redux/redux-store';

let mapStateToProps = (state: any) => {
  return {
	state: state
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: (newMessage: string)=> {
      dispatch({type: 'ADD-MESSAGE', newMessage: newMessage.trim()})
	}
  }
}


const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent);

export default MessagesContentContainer