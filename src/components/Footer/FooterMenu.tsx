import React from 'react';
import Box from '@mui/material/Box';
import {Container, Typography} from '@mui/material';

export const FooterMenu = () => {
  return (
	<Box style={{backgroundColor: '#52374a', padding:'2%'}}>
		<Container>
		  <Typography color='secondary'>All rights reserved</Typography>
		</Container>
	</Box>
  );
};