import React from 'react';
import s from './Message.module.css';
import {DialogType} from '../Dialog/Dialog';
import {v1} from 'uuid';

export type MessageType = {
  id: string
  message: string
}

export type MessagesListType = {
  [key: string]: Array<MessageType>
}

type MessagesType = {
  data: Array<DialogType>
  isMessengerOpen: boolean
  addNewMessage?: (value: string) => void
}

export const Messages = (props: MessagesType) => {
  let {data, isMessengerOpen, addNewMessage} = props
  
  
  const MessengerOpen = () => {
    return (
      <>
        {data.map(d => {
          return (
            <li key={d.messages[d.messages.length - 1].id}>
              {d.messages[d.messages.length - 1].message}
            </li>
          )
        })}
      </>
    )
  }
  
  const MessengerClosed = () => {
    return (
      <>
        {data.map(d => d.messages.map(m => {
          return (
            <li key={m.id}>{m.message}</li>
          )
        }))}
      </>
    )
  }
  
  return (
    <ul className={s.messages__list}>
      {isMessengerOpen ? <MessengerOpen/> : <MessengerClosed/>}
    </ul>
  )
};