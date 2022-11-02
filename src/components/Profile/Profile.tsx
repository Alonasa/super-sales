import React from 'react';
import s from '../MessagesPage/Dialog/Dialog.module.css';

export const Profile = () => {
  return (
	<div>
	  <div className={s.dialog__header}>
		<img className={s.dialog__avatar}
			 alt={'this is my avatar'}
			 src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
		<div>
		  <h2>My name or company name</h2>
		  <ul>
			<li>Last activity: <span></span></li>
			<li>Date registration: <span></span></li>
		  </ul>
		</div>
		<div className={s.dialog__contact_data}>
		  <button>Follow</button>
		  <button>Show phone</button>
		</div>
	  </div>
	  <div className={s.dialog__content}>
		<div className={s.dialog__navigation_buttons}>Nav buttons</div>
		<div className={s.dialog__data}>
		  <div>Ads</div>
		  <div>User description</div>
		  <div>Contact Info</div>
		</div>
	  </div>
	  
	  
	</div>
  );
};