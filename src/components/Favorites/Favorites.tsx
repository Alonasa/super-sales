import React from 'react';
import {Add, AddsType} from '../Ads/Add';
import {Container} from '@mui/material';

export const Favorites = (props: AddsType) => {
  return (
	<Container style={{padding: '2vh 5vw'}}>
	  <Add items={props.items.filter(i => i.isFavorite)}/>
	</Container>
  );
};