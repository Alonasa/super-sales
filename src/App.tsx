import React from 'react';
import './App.css';
import {Head} from './components/Head';
import {Body} from './components/Body';
import {Footer} from './components/Footer';
import {theme} from './components/Theme';
import {ThemeProvider} from '@mui/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Body/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
