import React from 'react';
import s from './Profile.module.css'
import {Button, Container} from '@mui/material';
import {FavoriteBorder} from '@mui/icons-material';
import {HashLink} from 'react-router-hash-link';

export const Profile = () => {
  return (
	<Container>
	  <div className={s.profile__header}>
		<img className={s.profile__avatar}
			 alt={'this is my avatar'}
			 src={'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-1024.png'}/>
		<div>
		  <h2 className={s.profile__title}>My name or company name</h2>
		  <ul className={s.profile__activity}>
			<li>Last activity: <span>01/31/2022</span></li>
			<li>Date registration: <span>01/31/2022</span></li>
		  </ul>
		</div>
		<div className={s.profile__contact_data}>
		  <Button size={'small'}
				  variant={'outlined'}><FavoriteBorder/> Follow</Button>
		  <Button size={'small'} variant={'contained'}>Show phone</Button>
		</div>
	  </div>
	  <div className={s.profile__content}>
		<div className={s.profile__navigation_buttons}>
		  <HashLink to="/profile#all-ads">All Ads</HashLink>
		  <HashLink to="/profile#about">About Us</HashLink>
		  <HashLink to="/profile#contact">Contact Info</HashLink>
		</div>
		<div className={s.profile__data}>
		  <div id="all-ads">Ads
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
			Add Add Add Add Add Add Add Add Add Add Add
		  </div>
		  <div id="about">
			About UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
			UsAbout UsAbout UsAbout UsAbout Us
		  </div>
		  <div id="contact">
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info Heres Our Contact Info Heres Our Contact Info
			Heres Our Contact Info
		  </div>
		</div>
	  </div>
	  
	  
	</Container>
  );
};