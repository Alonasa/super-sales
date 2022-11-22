import React, {useState} from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

export const Sorting = () => {
  const [sort, setSort] = useState('newest');
  const handleSortingChange = (e:  SelectChangeEvent)=> {
    setSort(e.target.value)
  }
  
  
  return (
	<FormControl>
	  <InputLabel id="select-label">Sort by</InputLabel>
	  <Select
		labelId="select-label"
		id="select"
		value={sort}
		label="Sort by"
		onChange={handleSortingChange}
		size={'small'}
	  >
		<MenuItem value={'cheap'}>Cheap</MenuItem>
		<MenuItem value={'expensive'}>Expensive</MenuItem>
		<MenuItem value={'newest'}>Newest</MenuItem>
		<MenuItem value={'oldest'}>Oldest</MenuItem>
	  </Select>
	</FormControl>
  );
};