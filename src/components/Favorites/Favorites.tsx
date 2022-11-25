import React from 'react';
import {Add, AddsType} from '../Ads/Add';
import {Container} from '@mui/material';

export const Favorites = (props: AddsType) => {
  let {items, dispatch} = props;
  return (
	<Container style={{padding: '2vh 5vw'}}>
	  
	  <Add items={items.filter(i => i.isFavorite)}/>
	</Container>
  );
};