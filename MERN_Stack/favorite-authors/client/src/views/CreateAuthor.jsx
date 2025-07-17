import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import authorService from '../services/authorService';

const CreateAuthor = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleCreate = (authorData) => {
    console.log("2. CreateAuthor: handleCreate received data:", authorData); // <-- ADD THIS
    
    authorService.create(authorData)
        .then(() => {
            console.log("3. API call successful, navigating..."); // <-- ADD THIS
            navigate('/authors');
        })
        .catch(err => {
            console.error("4. API call failed:", err); // <-- ADD THIS
            if (err.response?.data?.messages) {
                setErrors(err.response.data.messages);
            }
        });
    };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/authors">Home</Link>
            <p>Add a new author:</p>
            <AuthorForm
                onSubmit={handleCreate}
                errors={errors}
                // Pass the navigation function to the form
                onCancel={() => navigate('/authors')}
            />
        </div>
    );
};

export default CreateAuthor;
