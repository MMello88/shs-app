import Link from 'next/link';
import React from 'react';

const menu = () => {
  return (
    <div>
      <h2>MENU</h2>
      
      <Link href="/">Voltar página proncipal</Link>
      <br/>
      <Link href="/sobre">Sobre Mim</Link>
    </div>
  );
};

export default menu;