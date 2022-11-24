import React from 'react';
import {Ads} from '../Ads/Ads';
import {SearchBar} from '../Search/SearchBar';
import {Button, Container} from '@mui/material';
import {AddsType} from '../Ads/Add';

export const Body = (props: AddsType) => {
  let {items} = props;
  return (
    <section>
      <SearchBar/>
      <Container style={{padding:'4vh 0',}}>
        <Ads items={items}/>
        <Button variant={'contained'} style={{width: '25vw', height: '5vh'}}>Show more</Button>
      </Container>
    </section>
  );
};