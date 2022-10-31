import React from 'react';
import styles from './Dialog.module.css';
import {Message, MessageType} from '../Message/Message';

export type DialogType = {
  firstName: string
  secondName: string
  isOnline: boolean
  messages: Array<MessageType>
}

export type DialogsDataType = {
  id: string
  data: Array<DialogType>
  messagesList: (id: string) => void
  messagesState: boolean
  messages: Array<MessageType>
}

export type DialogsType = {
  [key: string]: Array<DialogType>
}


export const Dialog = (props: DialogsDataType) => {
  return (
    <>
      <Message messages={props.messages}/>
    
      {
        props.data.map(d => {
        
          const messagesHandler = (id: string) => {
            return props.messagesList(id)
          }
          return (
            <div key={props.id} onClick={() => messagesHandler(props.id)}
                 className={styles.dialog}>
              {props.messagesState ? <Message messages={props.messages}/> :
                <>
                  <img className={styles.dialog__avatar}
                       alt={'this is my avatar'}
                       src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
                  <div className={styles.dialog__info}>
                    <div className={styles.dialog__header}>
				<span
                  className={styles.dialog__title}>{d.firstName} {d.secondName}</span>
                      <span className={styles.dialog__online_status}>
				{d.isOnline && ' Online'}
			  </span>
                    </div>
                    <p>{d.messages[d.messages.length - 1].message}</p>
                  </div>
                </>
              }
            </div>
		  )
		})}
	</>
  );
};