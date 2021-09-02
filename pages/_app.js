import React from 'react';

import '../css/styles.css';

import Header from '../components/Header'

const MyApp = ({ Component, pagePropos }) => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto'>
       <Component {...pagePropos} />
      </div>
    </div>
  );
};

export default MyApp;
