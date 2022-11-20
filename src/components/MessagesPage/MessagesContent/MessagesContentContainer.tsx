import React from 'react';
import {ContentType, MessagesContent} from './MessagesContent';
import {connect} from 'react-redux';
import {AddMessageAT} from '../../../Redux/redux-store';


type contentType = {
  dispatch: (value: AddMessageAT) => void
}

export const MessagesContentContainer = (props: contentType) => {
  const sendMessageHandler = (newMessage: string) => {
	props.dispatch({type: 'ADD-MESSAGE', newMessage: newMessage.trim()})
  }
  
  return (
	<MessagesContent dispatch={sendMessageHandler}/>
  );
};


// let mapStateToProps = (store: any) => {
//   debugger
//   return {
// 	dispatch: store.messages
//   }
// }
//
// let mapDispatchToProps = (dispatch: any) => {
//   debugger
//   return {
//     addNewMessage: (newMessage: string)=> {
//       dispatch({type: 'ADD-MESSAGE', newMessage: newMessage.trim()})
// 	}
//   }
// }


// const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent);

export default MessagesContentContainer