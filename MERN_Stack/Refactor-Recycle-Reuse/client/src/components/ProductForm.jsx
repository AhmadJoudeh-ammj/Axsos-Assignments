import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductFormComponent from './ProductFormComponent';
import DeleteButton from './DeleteButton';

export default function ProductForm() {
    const [form, setForm] = useState({ title: '', price: '', description: '' });
    const [products, setProducts] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            ...form,
            price: parseFloat(form.price)
        }).then(() => {
            setForm({ title: '', price: '', description: '' });
            fetchProducts();
        }).catch(console.error);
    };

    const fetchProducts = () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(console.error);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => setProducts(products.filter(p => p._id !== id)))
            .catch(console.error);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Product Manager</h1>
            <ProductFormComponent formData={form} onChange={handleChange} onSubmit={handleSubmit} />

            <h2>All Products:</h2>
            {products.map(product => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    &nbsp;|&nbsp;
                    <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    <DeleteButton productId={product._id} onDelete={handleDelete} />
                </div>
            ))}
        </div>
    );
}