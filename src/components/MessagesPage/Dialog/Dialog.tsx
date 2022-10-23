import React from 'react';
import styles from './Dialog.module.css'

export const Dialog = () => {
  return (
	<div className={styles.dialog}>
	  <img className={styles.dialog__avatar} alt={'this is my avatar'}
		   src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
	  <div className={styles.dialog__info}>
		<span className={styles.dialog__title}>My Name</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
		  consequuntur debitis dolor, ea eligendi eos, eum harum hic impedit, iure
		  nesciunt quaerat ratione ut veniam voluptatem! Eum laudantium nihil
		  vero.</p>
	  </div>
	</div>
  );
};