import React from 'react';


export type MessageType = {
  id: string
  message: string
}

type MessagesList = {
  messages: Array<MessageType>
}

export const Message = (props: MessagesList) => {
  return (
	<ul>
	  {props.messages.map(m => {
		return (
		  <li key={m.id}>{m.message}</li>
		)
	  })}
	</ul>
  );
};