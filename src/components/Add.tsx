import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Card, CardMedia} from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type AddType = {
  id: number
  title: string
}

export type AddsType = {
  items: Array<AddType>
}

export const Add = (props: AddsType) => {
  return (
	<Box sx={{flexGrow: 1}}>
	  <Grid container spacing={2}>
		{props.items.map(p => {
		  return (
			<Grid key={p.id} xs={12} sm={6} md={4}>
			  <Item>
				<Card>
				  <CardMedia
					component="img"
					height="250"
					alt="basic picture"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/600px-Gull_portrait_ca_usa.jpg"/>
				</Card>
			  </Item>
			</Grid>
		  )
		})}
	  </Grid>
	</Box>
  );
}
