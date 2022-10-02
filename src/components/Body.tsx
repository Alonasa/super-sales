import React from 'react';
import {Ads} from './Ads';
import {SearchBar} from './SearchBar';
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