import React from 'react';
import Header from '../componente/header';
import Footer from '../componente/footer';
import Menu from '../componente/menu';

const layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <Menu/>
      {children}
      <Footer></Footer>
    </>
  );
};

export default layout;