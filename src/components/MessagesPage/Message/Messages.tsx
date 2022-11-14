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
  data: Array<MessageType>
  isMessengerOpen: boolean
  addNewMessage?: (value: string) => void
}

export const Messages = (props: MessagesType) => {
  let {data, isMessengerOpen, addNewMessage} = props
  
  
  const MessengerOpen = () => {
    return (
            <li key={data[data.length - 1].id}>
              {data[data.length - 1].message}
            </li>
    )
  }
  
  const MessengerClosed = () => {
    return (
      <>
        {data.map(m => {
          return (
            <li key={m.id}>{m.message}</li>
          )
        })}
      </>
    )
  }
  
  return (
    <ul className={s.messages__list}>
      {isMessengerOpen ? <MessengerOpen/> : <MessengerClosed/>}
    </ul>
  )
};