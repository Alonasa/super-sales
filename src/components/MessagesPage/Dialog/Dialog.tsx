import React from 'react';
import s from './Dialog.module.css';
import {Messages, MessageType} from '../Message/Messages';
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
  let {data, id} = props
  return (
	<NavLink to={id.substr(0, 8)} key={id} className={s.dialog}>
	  {data.map(d => {
	  
		return (
		  <div className={s.dialog__wrapper}>
			<>
			  <img className={s.dialog__avatar}
				   alt={'this is my avatar'}
				   src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
			  <div className={s.dialog__info}>
				<div className={s.dialog__header}>
				  <span
					className={s.dialog__title}>{d.firstName} {d.secondName}
				  </span>
				  <span className={s.dialog__online_status}>
				    {d.isOnline && ' Online'}
				  </span>
				</div>
			  </div>
			</>
		  </div>
		)
	  })}
      
        <Messages data={data}/>
	</NavLink>
  );
};