import React from 'react';
import {Container} from '@mui/material';
import {Add, AddsType} from './Add';


export const Ads = (props: AddsType) => {
  let {items} = props
  return (
	<Container maxWidth="md" style={{paddingLeft: 0,
	  paddingRight: 0}}>
	  <Add items={items}/>
	</Container>
  );
};