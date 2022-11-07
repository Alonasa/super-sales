import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

type SortingType = {
  onClick: () => void
}

export const Sorting = (props: SortingType) => {
  const {onClick} = props
  
  const [view, setView] = React.useState('list');
  
  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
	setView(nextView);
  };
  
  return (
	<ToggleButtonGroup
	  orientation="horizontal"
	  value={view}
	  exclusive
	  onChange={handleChange}
	  sx={{margin: '20px'}}
	>
	  <ToggleButton value="list" aria-label="list" onClick={onClick}>
		<ViewListIcon/>
	  </ToggleButton>
	  <ToggleButton value="module" aria-label="module" onClick={onClick}>
		<ViewModuleIcon/>
	  </ToggleButton>
	</ToggleButtonGroup>
  );
};