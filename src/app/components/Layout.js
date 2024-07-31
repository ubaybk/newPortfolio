import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-white'>
      
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;
