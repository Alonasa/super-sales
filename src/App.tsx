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
import {Messages} from './components/MessagesPage/Messages/Messages';
import {Favorites} from './components/Favorites/Favorites';

const items = [
  {
    id: 0,
    title: '1',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: true
  },
  {
    id: 1,
    title: '2',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: false
  },
  {
    id: 2,
    title: '3',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: true
  },
  {
    id: 3,
    title: '4',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: false
  },
  {
    id: 4,
    title: '5',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: false
  },
  {
    id: 5,
    title: '6',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 20,
    isFavorite: true
  },
]

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path="/" element={<Body items={items}/>}/>
          <Route path="/post-add" element={<PostAdd/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
