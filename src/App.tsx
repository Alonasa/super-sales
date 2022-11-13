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
import {DataType, Dialogs} from './components/MessagesPage/Dialogs/Dialogs';
import {Favorites} from './components/Favorites/Favorites';
import {AddType} from './components/Ads/Add';
import {DialogsType} from './components/MessagesPage/Dialog/Dialog';
import {PriceItemType} from './components/Pricing/Pricing';

export type AppType = {
  adds: Array<AddType>
  dataId: Array<DataType>
  dialogs: DialogsType
  prices: Array<PriceItemType>
}

type AppDataType = {
  state: AppType
  addMessage: (newMessage: string) => void
}

function App(props: AppDataType) {
  const  {addMessage} = props;
  const {adds, dataId, dialogs, prices} = props.state;
  
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path="/" element={<Body items={adds}/>}/>
          <Route path="/post-add" element={<PostAdd data={prices}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/messages"
                 element={<Dialogs data={dataId} dialogsData={dialogs} addNewMessage={addMessage}/>}/>
          <Route path="/favorites"
                 element={<Favorites items={adds}/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;