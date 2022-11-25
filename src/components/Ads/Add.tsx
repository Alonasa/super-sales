import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import Typography from '@mui/material/Typography';
import {AddShoppingCart, Favorite, FavoriteBorder} from '@mui/icons-material';

export type AddType = {
  id: string
  title: string
  description: string
  price: number
  isFavorite: boolean
  isAddedToCart: boolean
}

export type AddsType = {
  items: Array<AddType>
  dispatch: (isFavorite: boolean, id: string) => void
}

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Add = (props: AddsType) => {
  let {items, dispatch} = props;
  
  const changeStatusHandler = (isFavorite: boolean, id: string) => {
    if (id) {
      dispatch(!isFavorite, id)
    }
  }
  
  return (
	<Box sx={{flexGrow: 1}}>
	  <Grid container spacing={2}>
		{items.map(p => {
		  return (
			<Grid key={p.id} xs={12} sm={6} md={4}>
			  <Item>
				<Card>
				  <CardMedia
					component="img"
					height="250"
					alt="basic picture"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/600px-Gull_portrait_ca_usa.jpg"/>
				  <CardContent>
					<Typography gutterBottom variant="h3" component="div">
					  {p.title}
					</Typography>
					<Typography component="span">
                      {`${p.price} $`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={()=>changeStatusHandler(p.isFavorite, p.id)}>
                      {!p.isFavorite ? <FavoriteBorder color={'primary'}/> :
                        <Favorite color={'primary'}/>}
                    </IconButton>
                    <IconButton>
                      <AddShoppingCart color={'primary'}/>
                    </IconButton>
                  </CardActions>
				</Card>
			  </Item>
			</Grid>
		  )
		})}
	  </Grid>
	</Box>
  );
}
