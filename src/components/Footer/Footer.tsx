import React from 'react';
import {FooterMenu} from './FooterMenu';
import style from './Footer.module.css';


const color = 'primary'

export const Footer = () => {
  return (
    <footer className={style.footer} style={{backgroundColor: color}}>
      <FooterMenu/>
    </footer>
  );
};