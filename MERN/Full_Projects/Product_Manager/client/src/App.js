import './App.css';
import Main from './components/Main';
import React from 'react';
import { Router } from '@reach/router';
import ProductView from './components/ProductView';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductView path="products/:id"/>
      </Router>
    </div>
  );
}

export default App;
