import React from 'react';
import './App.css';
import Calculation from './features/Calculation/Calculation';
import ProductList from './features/ProductList/ProductList';

function App() {
  return (
    <>
    <header className='row'>
      <h1>Cash Bank</h1>
      <p>You can select the product from below list and the app will tell you how much amount you need to return to customer based on auto calculation.</p>
    </header>
    <div className='appWrapper'>
      <div className='col-sm-3'>
      <ProductList />
      </div>
      <div className='col-sm-9' style={{marginLeft: 20}}>
      <Calculation />
      </div>
    </div>
    </>
  );
}

export default App;
