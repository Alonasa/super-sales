import React from 'react';
import {Container} from '@mui/material';
import AddContainer from './AddContainer';


export const Ads = () => {
  return (
	<Container maxWidth="md" style={{padding: 0, paddingBottom: '4vh'}}>
	  <AddContainer/>
	</Container>
  );
};