import React, { useEffect, useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList';
import API from './services/api';

const App = () => {
  const [products,setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await API.get('/');
    console.log(res.data);
    setProducts(res.data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  const addProducts = async (data) => {
    await API.post('/',data)
    fetchProducts();
  }
  const deleteProduct = async (id) => {
    await API.delete(`/${id}`)
    fetchProducts();
  }
  return (
    <div>
      <h1>Simple MERN E-Commerce Application</h1>
      <ProductForm addProducts = {addProducts}/>
      <ProductList products = {products} deleteProduct = {deleteProduct}/>
    </div>
  )
}

export default App

