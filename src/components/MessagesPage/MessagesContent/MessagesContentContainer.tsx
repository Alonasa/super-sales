import React from 'react';
import {MessagesContent} from './MessagesContent';
import {connect} from 'react-redux';

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