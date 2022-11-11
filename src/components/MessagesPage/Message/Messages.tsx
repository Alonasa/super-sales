import React from 'react';
import s from './Message.module.css';
import {DialogType} from '../Dialog/Dialog';

export type MessageType = {
  id: string
  message: string
}

export type MessagesListType = {
  [key: string]: Array<MessageType>
}

type MessagesType = {
  data: Array<DialogType>
}

export const Messages = (props: MessagesType) => {
  let {data} = props
  
  return (
    <ul className={s.messages__list}>
      {data.map(d => {
        return(
          <li key={d.messages[d.messages.length-1].id}>{d.messages[d.messages.length - 1].message}</li>
        )
      })}
    </ul>
  )
};