import React from 'react';
import styles from './Dialog.module.css';
import {Message} from '../Message/Message';
import {MessageType} from '../Messages/Messages';
import {NavLink} from 'react-router-dom';

export type DialogType = {
  firstName: string
  secondName: string
  isOnline: boolean
  messages: Array<MessageType>
}

export type DialogsDataType = {
  id: string
  data: Array<DialogType>
}

export type DialogsType = {
  [key: string]: Array<DialogType>
}


export const Dialog = (props: DialogsDataType) => {
  return (
    <>
    
      {
        props.data.map(d => {
        
          const messagesHandler = (id: string) => {
            return
          }
          return (
            <NavLink to={props.id.substr(0,8)} key={props.id} onClick={() => messagesHandler(props.id)}
                     className={styles.dialog}>
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
                  <Message messages={d.messages}/>
                </div>
              </>
            </NavLink>
		  )
		})}
	</>
  );
};