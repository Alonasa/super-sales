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

export const Message = (props: MessagesType) => {
  console.log(props)
  let {data} = props
  return (
    <ul className={s.messages__list}>
      {data.map(m => m.messages.map(i => {return(
        <li key={i.id}>{i.message}</li>
      )}))}
    </ul>
  )
};