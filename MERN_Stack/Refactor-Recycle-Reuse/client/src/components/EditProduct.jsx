import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductFormComponent from './ProductFormComponent';

export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', price: '', description: '' });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setForm(res.data))
            .catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            ...form,
            price: parseFloat(form.price)
        }).then(() => navigate('/'))
            .catch(console.error);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Edit Product</h2>
            <ProductFormComponent formData={form} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
    );
}