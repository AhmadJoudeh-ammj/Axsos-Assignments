import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error("❌ Error:", err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate('/products'))
            .catch(err => console.error("❌ Error deleting:", err));
    };

    if (!product) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>

            <br />

            <Link to={`/products/${id}/edit`}>
                <button>Edit</button>
            </Link>
            &nbsp;
            <button onClick={handleDelete} style={{ color: 'red' }}>Delete</button>
        </div>
    );
}