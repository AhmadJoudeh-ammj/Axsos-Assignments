import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authorService from '../services/authorService';

const Dashboard = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        authorService.getAll()
            .then(setAuthors)
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        authorService.delete(id)
            .then(() => {
                setAuthors(prevAuthors => prevAuthors.filter(author => author._id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/authors/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;