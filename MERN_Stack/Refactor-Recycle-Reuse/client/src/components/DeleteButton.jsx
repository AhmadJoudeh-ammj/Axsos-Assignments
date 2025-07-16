import React from 'react';

export default function DeleteButton({ productId, onDelete }) {
    return (
        <button
            onClick={() => onDelete(productId)}
            style={{ color: 'red', marginLeft: '10px' }}
        >
            Delete
        </button>
    );
}