import React from 'react';
import Header from '../../components/Header';

import { HomeContainer } from './style.js';

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <div className="col-1">
          <h1>Home</h1>
        </div>
        <div className="col-2">
          <h1>Imagem</h1>
        </div>
      </HomeContainer>
    </>
  );
}
