import React from 'react';
import {Button, TextareaAutosize} from '@mui/material';
import s from './MessagesContent.module.css';
import {Send} from '@mui/icons-material';

export const MessagesContent = () => {
  return (
	<div className={s.messagesContent}>
	  <TextareaAutosize
		minRows={4}
		className={s.messagesContent__textarea}
	  />
	  <Button>
		Send
		<Send/>
	  </Button>
	</div>
  );
};