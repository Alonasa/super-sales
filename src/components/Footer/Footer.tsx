import React from 'react';
import {FooterMenu} from './FooterMenu';

const color = 'primary'

export const Footer = () => {
  return (
    <footer style={{backgroundColor: color}}>
      <FooterMenu/>
    </footer>
  );
};