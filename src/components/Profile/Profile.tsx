import React, {MouseEvent, useState} from 'react';
import s from './Profile.module.css'
import {
  Button,
  Container, FormControl, InputLabel, MenuItem, Select,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import {FavoriteBorder} from '@mui/icons-material';
import {ViewMode} from '../Sorting/ViewMode';
import {Sorting} from '../Sorting/Sorting';

export const Profile = () => {
  const [selected, setSelected] = useState('all-ads');
  const [viewMode, setViewMode] = useState(s.profile__mode_list)
  
  const handleChange = (event: MouseEvent<HTMLElement>, selectedButton: string) => {
	setSelected(selectedButton);
  };
  
  const viewHandler = () => {
	switch (viewMode) {
	  case s.profile__mode_list : {
		return setViewMode(s.profile__mode_row)
	  }
	  case s.profile__mode_row : {
		return setViewMode(s.profile__mode_list)
	  }
	  default:
		return setViewMode(s.profile__mode_row)
	}
  }
  
  return (
	<>
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
	  </Container>
	  <div className={s.profile__content}>
		<Container>
		  <ToggleButtonGroup color={'secondary'} value={selected}
							 onChange={handleChange} exclusive
							 className={s.profile__navigation_buttons}>
			<ToggleButton value="all-ads" href="/profile#all-ads"
						  className={s.profile__navigation_button}>All
			  Ads</ToggleButton>
			<ToggleButton value="about" href="/profile#about"
						  className={s.profile__navigation_button}>About
			  Us</ToggleButton>
			<ToggleButton value="contact" href="/profile#contact"
						  className={s.profile__navigation_button}>Contact
			  Info</ToggleButton>
		  </ToggleButtonGroup>
		</Container>
		<div className={s.profile__data}>
		  <Container className={s.profile__data_content}>
			<div></div>
			<div>
			  <div className={s.profile__helpers_wrapper}>
				<ViewMode onClick={viewHandler}/>
				<Sorting/>
			  </div>
			  <div className={`${s.profile__mode} ${viewMode}`}>
				<div id="all-ads">
				  Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
				  Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
				  Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add Add
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
				  Add Add Add Add Add Add Add Add Add Add Add Add Add
				</div>
				<div id="about">
				  About UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
				  UsAbout
				  UsAbout UsAbout UsAbout UsAbout Us
				</div>
				<div id="contact">
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info Heres Our Contact Info Heres Our
				  Contact
				  Info
				  Heres Our Contact Info
				</div>
			  </div>
			</div>
		  </Container>
		</div>
	  </div>
	</>
  );
};