import React from 'react';
import {MessagesContent} from './MessagesContent';
import {connect} from 'react-redux';
import {AppType} from '../../../App';

let mapStateToProps = (state: AppType) => {
  return {
	state: state
  }
}

let mapDispatchToProps = (dispatch: (dispatch: {type: string, newMessage: string})=>void) => {
  return {
	dispatch: (newMessage: string) => {
	  dispatch({type: 'ADD-MESSAGE', newMessage: newMessage.trim()})
	}
  }
}


const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent);

export default MessagesContentContainer