import React from 'react';
import Layout from '../components/Layout';

import '../css/styles.css';



const MyApp = ({ Component, pagePropos }) => {
  return (
  <Layout>    
   <Component {...pagePropos} />
  </Layout>    

  );
};

export default MyApp;
