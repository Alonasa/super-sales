import React, {KeyboardEvent, useState} from 'react';
import {Button, TextareaAutosize} from '@mui/material';
import s from './MessagesContent.module.css';
import {Send} from '@mui/icons-material';

export type ContentType = {
  addMessage: (value: string) => void
}

export const MessagesContent = (props: ContentType) => {
  let {addMessage} = props;
  
  let [newMessage, setMessage] = useState('')
  
  
  const saveMessageHandler = (value: string) => {
	setMessage(value)
  }
  
  const sendMessageHandler = () => {
	if (newMessage) {
	  addMessage(newMessage)
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