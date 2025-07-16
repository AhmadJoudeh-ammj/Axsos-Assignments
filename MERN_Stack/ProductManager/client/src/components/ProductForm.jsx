import React, { useState } from 'react';
import axios from 'axios';

export default function ProductForm() {
    const [form, setForm] = useState({ title: '', price: '', description: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

 const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/products', {
        ...form,
        price: parseFloat(form.price) 
    })
    .then(res => {
        console.log("✅ Product created", res.data);
        setForm({ title: '', price: '', description: '' });
    })
    .catch(err => console.error("❌ Error:", err.response?.data || err.message));
};

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name="price"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    />
                </div>
                                <br/>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}