import React from 'react';
import {Ads} from '../Ads/Ads';
import {SearchBar} from '../Search/SearchBar';
import {Container} from '@mui/material';

export const Body = () => {
  return (
    <section>
      <SearchBar/>
        <Container >
          <Ads/>
        </Container>
    </section>
  );
};