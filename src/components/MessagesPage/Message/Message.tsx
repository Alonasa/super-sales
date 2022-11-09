import React from 'react';
import { MessagesListType } from '../Messages/Messages';
import s from './Message.module.css';

export type MessagesType = {
  messages: Array<MessagesListType>
}


export const Message = (props: MessagesListType) => {
  return (
    <ul className={s.messages__list}>
      {props.messages.map(m=> {
        return (
          <li key={m.id}>{m.message}</li>
        )
      })}
    </ul>
  )
};