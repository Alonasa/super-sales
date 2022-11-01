import React from 'react';
import { MessageType } from '../Messages/Messages';

export type MessagesListType = {
  messages: Array<MessageType>
}

export const Message = (props: MessagesListType) => {
  return (
    <ul>
      {props.messages.map(m=> {
        return (
          <li>{m.message}</li>
        )
      })}
    </ul>
  )
};