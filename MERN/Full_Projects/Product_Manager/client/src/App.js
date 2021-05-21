import './App.css';
import Main from './components/Main';
import React from 'react';
import { Router } from '@reach/router';
import ProductView from './components/ProductView';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductView path="products/:id"/>
        <Update path="products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
