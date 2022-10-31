import React from 'react';


export type MessageType = {
  id: string
  message: string
}

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