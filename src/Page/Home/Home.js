import React from 'react';
import { Outlet } from 'react-router-dom';
import ExJobSection from '../../Component/Experienced/ExJobSection';
import Footer from '../../Component/Footer/Footer';
import AllFreshers from '../../Component/Freshers/AllFreshers';
import Header from '../../Component/Header/Header';
import Nav from '../../Component/Nav/Nav';
import TopCompanies from '../../Component/TopCompanies/TopCompanies';

const Home = () => {
    return (
        <div>
      <Nav></Nav>
      <Header></Header>
      <AllFreshers></AllFreshers>
      <ExJobSection></ExJobSection>
      <TopCompanies></TopCompanies>
      <Footer></Footer>
        </div>
    );
};

export default Home;