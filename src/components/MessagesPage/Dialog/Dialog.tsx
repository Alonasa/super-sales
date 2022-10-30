import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type DialogsType = {
  id: string
  firstName: string
  secondName: string
  isOnline: boolean
  messages: Array<string>
}

export type DialogsDataType = {
  data: Array<DialogsType>
}

export const Dialog = (props: DialogsDataType) => {
  return (
	<>
	  {props.data.map(d => {
		return (
		  <NavLink to={`/messages/message-${d.id.substr(0,8)}`} key={d.id} className={styles.dialog}>
			<img className={styles.dialog__avatar} alt={'this is my avatar'}
				 src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
			<div className={styles.dialog__info}>
			<span
			  className={styles.dialog__title}>{d.firstName} {d.secondName}</span>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur debitis dolor, ea eligendi eos, eum harum hic
				impedit,
				iure
				nesciunt quaerat ratione ut veniam voluptatem! Eum laudantium
				nihil
				vero.</p>
			</div>
		  </NavLink>
		)
	  })}
	</>
  );
};