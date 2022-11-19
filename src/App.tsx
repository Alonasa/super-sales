import React from 'react';
import './App.css';
import {Head} from './components/Head/Head';
import {Footer} from './components/Footer/Footer';
import {theme} from './components/Theme';
import {ThemeProvider} from '@mui/material';
import {Route, Switch} from 'react-router-dom';
import {DataType} from './components/MessagesPage/Dialogs/Dialogs';
import {AddType} from './components/Ads/Add';
import {DialogsType} from './components/MessagesPage/Dialog/Dialog';
import {PriceItemType} from './components/Pricing/Pricing';
import {DispatchACType} from './Redux/redux-store';
import {MessagesListType} from './components/MessagesPage/Message/Messages';
import BodyContainer from './components/Body/BodyContainer';
import PostAddContainer from './components/PostAdd/PostAddContainer';
import { Profile } from './components/Profile/Profile';
import {MyAccount} from './components/MyAccount/MyAccount';
import FavoritesContainer from './components/Favorites/FavoritesContainer';

export type AppType = {
  items: Array<AddType>
  dataId: Array<DataType>
  dialogs: DialogsType
  messages: MessagesListType
  prices: Array<PriceItemType>
}

export type AppDataType = {
  state: AppType
  dispatch: (action: DispatchACType) => void
}

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Switch>
          <Route path="/" exact render={()=><BodyContainer/>}/>
          <Route path="/super-sales" render={()=><BodyContainer/>}/>
          <Route path="/post-add" render={()=><PostAddContainer/>}/>
          <Route path="/profile" render={()=><Profile/>}/>
          <Route path="/my-account" render={()=><MyAccount/>}/>
          <Route path="/favorites" render={()=><FavoritesContainer/>}/>
        </Switch>
      
        {/*<Route path="/post-add" element={<PostAdd data={prices}/>}/>*/}
        {/*<Route path="/profile" element={<Profile/>}/>*/}
        {/*<Route path="/my-account" element={<MyAccount/>}/>*/}
        {/*<Route path="/messages"*/}
        {/*       element={<Dialogs data={dataId} dialogsData={dialogs} messages={messages} dispatch={dispatch}/>}/>*/}
        {/**/}
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
