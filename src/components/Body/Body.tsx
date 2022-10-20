import React from 'react';
import {Ads} from '../Ads/Ads';
import {SearchBar} from '../Search/SearchBar';
import {Container} from '@mui/material';
import {AddsType} from '../Ads/Add';

export const Body = (props: AddsType) => {
  return (
    <section>
      <SearchBar/>
        <Container >
          <Ads items={props.items}/>
        </Container>
    </section>
  );
};