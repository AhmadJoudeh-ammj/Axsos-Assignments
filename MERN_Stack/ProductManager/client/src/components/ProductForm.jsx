import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductForm() {
    const [form, setForm] = useState({ title: '', price: '', description: '' });
    const [products, setProducts] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const fetchProducts = () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            ...form,
            price: parseFloat(form.price)
        })
            .then(() => {
                setForm({ title: '', price: '', description: '' });
                fetchProducts();
            })
            .catch(err => console.error(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                setProducts(products.filter(p => p._id !== id)); // Update DOM
            })
            .catch(err => console.error("❌ Error deleting:", err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" value={form.title} onChange={handleChange} /><br />
                <input name="price" placeholder="Price" value={form.price} onChange={handleChange} /><br />
                <input name="description" placeholder="Description" value={form.description} onChange={handleChange} /><br />
                <button type="submit">Create</button>
            </form>

            <hr />
            <h2>All Products:</h2>
            {products.map(product => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}><strong>{product.title}</strong></Link>
                    &nbsp;|&nbsp;
                    <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    &nbsp;|&nbsp;
                    <button onClick={() => handleDelete(product._id)} style={{ color: 'red' }}>
                        Delete
                    </button>
                </div>
            ))}

        </div>
    );
}