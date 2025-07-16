import React from 'react';

export default function ProductFormComponent({ formData, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
            <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={onChange}
            /><br />
            <input
                name="price"
                placeholder="Price"
                type="number"
                value={formData.price}
                onChange={onChange}
            /><br />
            <input
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={onChange}
            /><br />
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}
