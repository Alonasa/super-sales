import React from 'react';
import {Ads} from '../Ads/Ads';
import {SearchBar} from '../Search/SearchBar';
import {Button, Container} from '@mui/material';

export const Body = () => {
  return (
    <section>
      <SearchBar/>
      <Container style={{padding: '4vh 0',}}>
        <Ads/>
        <Button variant={'contained'} style={{width: '25vw', height: '5vh'}}>Show
          more</Button>
      </Container>
    </section>
  );
};