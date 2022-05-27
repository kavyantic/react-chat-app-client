import './App.css';
import { Routes, Route } from "react-router-dom";
import { Fragment, useLayoutEffect, useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Layout from './Layout/Layout';
import socket from './socket/socket';
import Register from './pages/Register';




function App() {
  // const sendMsg =()=>{
  //   socket.emit('hel','dig')
  // }



  return (
  <Fragment>
    
     <Layout>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<AboutUs />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
     </Layout>
  </Fragment>
     
  );
}



export default App;
