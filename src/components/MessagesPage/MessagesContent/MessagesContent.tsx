import React, {useState, KeyboardEvent} from 'react';
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
	  props.addNewMessage(newMessage.trim())
	  setMessage('')
	}
  }
  
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === 'Enter' && sendMessageHandler()
  }
  
  return (
	<div className={s.messagesContent}>
	  <TextareaAutosize
		value={newMessage}
		onChange={(e) => saveMessageHandler(e.currentTarget.value)}
		minRows={4}
		className={s.messagesContent__textarea}
		onKeyPress={(e)=>onKeyPressHandler(e)}
	  />
	  <Button onClick={sendMessageHandler} >
		Send
		<Send/>
	  </Button>
	</div>
  );
};