import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


export const Sorting = () => {
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
	>
	  <ToggleButton value="list" aria-label="list">
		<ViewListIcon/>
	  </ToggleButton>
	  <ToggleButton value="module" aria-label="module">
		<ViewModuleIcon/>
	  </ToggleButton>
	</ToggleButtonGroup>
  );
};