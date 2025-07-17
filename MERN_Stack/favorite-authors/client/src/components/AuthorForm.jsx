import React, { useState } from 'react';
// 1. REMOVE useHistory import. We don't need Link here either if the parent handles it.

// 2. Accept an onCancel function as a prop
const AuthorForm = ({ initialName = '', onSubmit, errors, onCancel }) => {
    const [name, setName] = useState(initialName);

const handleSubmit = (e) => {
    e.preventDefault();
    // Is the form itself submitting?
    console.log('[AuthorForm] Submitting...');
    onSubmit({ name });
};

    return (
        <form onSubmit={handleSubmit} className="author-form">
            {errors && errors.length > 0 && (
                <div className="error-box">
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-actions">
                {/* 3. Use the onCancel prop for the Cancel button's onClick event */}
                <button type="button" onClick={onCancel} className="btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AuthorForm;