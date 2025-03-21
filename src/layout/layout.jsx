import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import GameTypeSelector from '../components/gameTypeSelector';
import ClueDisplay from '../components/clueDisplay';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

