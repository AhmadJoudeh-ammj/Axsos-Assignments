import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(console.error);
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate('/products'))
            .catch(console.error);
    };
    

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Link to={`/products/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <DeleteButton productId={id} onDelete={handleDelete} />
        </div>
    );
}