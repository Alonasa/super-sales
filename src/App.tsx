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
import {
  DataType,
  Messages,
  MessageType
} from './components/MessagesPage/Messages/Messages';
import {Favorites} from './components/Favorites/Favorites';
import {v1} from 'uuid';
import {DialogsType} from './components/MessagesPage/Dialog/Dialog';

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

const ID1 = v1();
const ID2 = v1();
const ID3 = v1();

const data: Array<DataType> = [
  {id: ID1},
  {id: ID2},
  {id: ID3}
]

const messages:MessageType[][] = [
  [
    {
      id: v1(),
      message: 'Hi'
    },
    {
      id: v1(),
      message: 'What are you doing?',
    },
    {id: v1(), message: 'Will you join lesson today?'},
  ],
  [
    {
      id: v1(),
      message: 'Hi'
    },
    {
      id: v1(),
      message: 'What are you doing?',
    },
    {id: v1(), message: 'Will you join lesson today?'},
  ],
  [
    {
      id: v1(),
      message: 'Hi'
    },
    {
      id: v1(),
      message: 'What are you doing?',
    },
    {id: v1(), message: 'Will you join lesson today?'},
  ],
]

const dialogsData: DialogsType = {
  [ID1]: [{
    firstName: 'Bob',
    secondName: 'Michael',
    isOnline: false,
    messages: messages[0]
  }],
  [ID2]: [{
    firstName: 'Anna',
    secondName: 'Michael',
    isOnline: true,
    messages: messages[1]
  }],
  [ID3]: [{
    firstName: 'Kate',
    secondName: 'Michael',
    isOnline: false,
    messages: messages[2]
  }],
}


const prices = [
  {header: 'Free',
    price: 'Free',
    features: ['Duration 10 days', 'Image gallery', 'Location',
      'Tags, keywords',
      'Phone number',]
  },
  {header: 'Basic',
    price: '5$',
    features: ['Duration 30 days', 'Image gallery', 'Location',
      'Tags, keywords',
      'Phone number', 'Top Listing', 'Home page 7 days']
  },
  {header: 'Premium',
    price: '10$',
    features: ['Duration 30 days', 'Image gallery', 'Location',
      'Tags, keywords',
      'Phone number', 'Top Listing', 'Home page 14 days', 'Multiple contacts', 'Messengers', 'Video']
  }
]


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path="/" element={<Body items={items}/>}/>
          <Route path="/post-add" element={<PostAdd data={prices}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/messages" element={<Messages data={data} dialogsData={dialogsData}/>}/>
          <Route path="/favorites" element={<Favorites items={items}/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
