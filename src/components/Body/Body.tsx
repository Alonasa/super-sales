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
      <Container sx={{}} style={{padding:'4vh', paddingLeft: 0,
        paddingRight: 0}} >
        <Ads items={items}/>
        <Button title={'Show more'} variant={'contained'}/>
      </Container>
    </section>
  );
};