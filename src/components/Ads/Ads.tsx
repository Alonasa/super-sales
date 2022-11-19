import React from 'react';
import {Container} from '@mui/material';
import {Add, AddsType} from './Add';


export const Ads = (props: AddsType) => {
  let {items} = props
  return (
	<Container maxWidth="md">
	  <Add items={items}/>
	</Container>
  );
};