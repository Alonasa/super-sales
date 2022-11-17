import React from 'react';
import {AddMessageAT} from '../../../Redux/redux-store';
import {MessagesContent} from './MessagesContent';

type contentType = {
  addNewMessage: (value: AddMessageAT) => void
}

export const MessagesContentContainer = (props: contentType) => {
  const sendMessageHandler = (newMessage: string) => {
	props.addNewMessage({type: 'ADD-MESSAGE', newMessage: newMessage.trim()})
  }
  
  return (
	<MessagesContent addNewMessage={sendMessageHandler}/>
  );
};