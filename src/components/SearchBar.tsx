import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {AddLocation} from '@mui/icons-material';
import {Button, Container} from '@mui/material';
import {purple} from '@mui/material/colors';

const color = purple[50];


const Search = styled('div')(({theme}) => ({
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
	marginLeft: theme.spacing(3),
	width: 'auto',
  },
}));

const SearchWrapper = styled('div')(({theme}) => ({
  [theme.breakpoints.up('xs')]: {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
  },
  [theme.breakpoints.up('sm')]: {
	flexDirection: 'row',
	alignItems: 'baseline',
  }
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  height: '100%',
  marginBottom: '10px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  backgroundColor: alpha(theme.palette.common.white, 1),
  '& .MuiInputBase-input': {
	padding: theme.spacing(1, 1, 1, 0),
	paddingLeft: '1em',
	transition: theme.transitions.create('width'),
	width: '100%',
	[theme.breakpoints.up('md')]: {
	  width: '20ch',
	},
  },
}));

export const SearchBar = () => {
  return (
	<div style={{padding: '2%', backgroundColor: color}}>
	  <Search>
		<Container>
		  <SearchWrapper>
			<SearchIconWrapper>
			  <SearchIcon/>
			  <StyledInputBase
				placeholder="What you are looking for?"
				inputProps={{'aria-label': 'search'}}
			  />
			</SearchIconWrapper>
			<SearchIconWrapper>
			  <AddLocation/>
			  <StyledInputBase
				placeholder="Where"
				inputProps={{'aria-label': 'Where you looking'}}
			  />
			</SearchIconWrapper>
			<Button variant={'contained'}>
			  <SearchIcon/>
			  Search
			</Button>
		  </SearchWrapper>
		</Container>
	  </Search>
	</div>
  );
};