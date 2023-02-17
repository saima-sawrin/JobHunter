import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import AllFreshers from '../../Component/Freshers/AllFreshers';
import Header from '../../Component/Header/Header';
import Nav from '../../Component/Nav/Nav';

const Home = () => {
    return (
        <div>
      <Nav></Nav>
      <Header></Header>
      <AllFreshers></AllFreshers>
      <Footer></Footer>
        </div>
    );
};

export default Home;