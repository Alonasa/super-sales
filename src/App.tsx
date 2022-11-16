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
import {DispatchACType} from './Redux/redux-store';
import {MessagesListType} from './components/MessagesPage/Message/Messages';

export type AppType = {
  adds: Array<AddType>
  dataId: Array<DataType>
  dialogs: DialogsType
  messages: MessagesListType
  prices: Array<PriceItemType>
}

export type AppDataType = {
  state: AppType
  dispatch: (action: DispatchACType) => void
}

function App(props: AppDataType) {
  const  {dispatch} = props;
  const {adds, dataId, dialogs,messages, prices} = props.state;
  
  
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
                 element={<Dialogs data={dataId} dialogsData={dialogs} messages={messages} dispatch={dispatch}/>}/>
          <Route path="/favorites"
                 element={<Favorites items={adds}/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
