import React from 'react';
import './App.css';
import {Head} from './components/Head/Head';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import {theme} from './components/Theme';
import {ThemeProvider} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {PostAdd} from './components/PostAdd/PostAdd';
import {Profile} from './components/Profile/Profile';
import {MyAccount} from './components/MyAccount/MyAccount';
import { Messages } from './components/MessagesPage/Messages/Messages';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/post-add" element={<PostAdd/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/messages" element={<Messages/>}></Route>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
