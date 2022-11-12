import React, {useState} from 'react';
import {Button, TextareaAutosize} from '@mui/material';
import s from './MessagesContent.module.css';
import {Send} from '@mui/icons-material';

type contentType = {
  addNewMessage: (value: string) => void
}

export const MessagesContent = (props: contentType) => {
  let [newMessage, setMessage] = useState('')
  
  
  const saveMessageHandler = (value: string) => {
	setMessage(value)
  }
  
  const sendMessageHandler = () => {
	if(newMessage) {
	  props.addNewMessage(newMessage)
	  setMessage('')
	}
  }
  
  return (
	<div className={s.messagesContent}>
	  <TextareaAutosize
		value={newMessage}
		onChange={(e) => saveMessageHandler(e.currentTarget.value)}
		minRows={4}
		className={s.messagesContent__textarea}
	  />
	  <Button onClick={sendMessageHandler}>
		Send
		<Send/>
	  </Button>
	</div>
  );
};