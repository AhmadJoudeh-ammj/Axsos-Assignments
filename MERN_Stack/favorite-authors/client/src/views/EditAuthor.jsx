import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import authorService from '../services/authorService';


const EditAuthor = () => {
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const updateAuthor = async () => {
            try {
                const data = await authorService.getOne(id);
                setAuthor(data);
            } catch (err) {
                if (err.response?.data?.messages) {
                    setErrors(err.response.data.messages);
                }
                console.error('[EditAuthor] Error fetching author:', err);
            }
        }
        if (id) {
            updateAuthor();
        }
        // if (id) {
        //     authorService.getOne(id)
        //         .then((data) => {

        //             setAuthor(data);

        //         })
        //         .catch(err => {
        //             // Is there an error fetching the author data?
        //             console.error('[EditAuthor] Error fetching author:', err);
        //             if (err.response?.data?.messages) {
        //                 setErrors(err.response.data.messages);
        //             }
        //         });
        // }


    }, [id]);
    const handleUpdate = (authorData) => {
        // Is the correct handler in EditAuthor being called?
        console.log('[EditAuthor] handleUpdate called with:', authorData);

        // What is the ID we are trying to update? Is it defined?
        console.log('[EditAuthor] ID to update:', id);

        authorService.update(id, authorData)
            .then((response) => {
                // Did the API call succeed?
                console.log('[EditAuthor] API call successful. Response:', response);
                navigate('/authors');
            })
            .catch(err => {
                // Did the API call fail?
                console.error('[EditAuthor] API call FAILED. Error:', err);
                if (err.response?.data?.messages) {
                    setErrors(err.response.data.messages);
                }
            });
    };
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/authors">Home</Link>
            <p>Edit this author:</p>
            {author !== null &&
                <AuthorForm
                    initialName={author.name}
                    onSubmit={handleUpdate}
                    errors={errors}

                    // Pass the navigation function to the form
                    onCancel={() => navigate('/authors')}
                />
            }
        </div>
    );
};

export default EditAuthor;