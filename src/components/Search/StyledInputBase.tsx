import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const StyledInputBase = styled(InputBase)(({theme}) => ({
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