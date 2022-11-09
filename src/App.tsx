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
import {DataType, Messages} from './components/MessagesPage/Messages/Messages';
import {Favorites} from './components/Favorites/Favorites';
import {AddType} from './components/Ads/Add';
import {DialogsType} from './components/MessagesPage/Dialog/Dialog';
import {PriceItemType} from './components/Pricing/Pricing';

type AppType = {
  adsData: Array<AddType>
  data: Array<DataType>
  dialogsData: DialogsType
  pricesData: Array<PriceItemType>
}

function App(props: AppType) {
  const {adsData, data, dialogsData, pricesData} = props
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path="/" element={<Body items={adsData}/>}/>
          <Route path="/post-add" element={<PostAdd data={pricesData}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/messages"
                 element={<Messages data={data} dialogsData={dialogsData}/>}/>
          <Route path="/favorites"
                 element={<Favorites items={adsData}/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
