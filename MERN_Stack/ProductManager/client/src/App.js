import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
