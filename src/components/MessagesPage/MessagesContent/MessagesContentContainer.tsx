import React from 'react';
import {MessagesContent} from './MessagesContent';
import {connect} from 'react-redux';
import {AddMessageAC} from '../../../Redux/add-message-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../Redux/redux-store';
import {MessagesListType} from '../Message/Messages';

type MapDispatchPropsType = {
  addMessage: (newMessage: string) => void
}

export type MapStatePropsType = {
  state: MessagesListType | undefined
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
	state: state.messages
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
	addMessage: (newMessage: string) => {
	  dispatch(AddMessageAC(newMessage.trim()))
	}
  }
}


const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent);

export default MessagesContentContainer