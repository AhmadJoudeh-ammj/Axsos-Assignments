import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import styles from './TodoList.module.css';

// This component provides the form for adding new tasks.
export default function AddTaskForm() {
    // This component has its own local state for the input field.
    const [text, setText] = useState('');
    // We only need the 'dispatch' function from the context here.
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;

        // Dispatch the ADD_TASK action with the input text as the payload.
        dispatch({ type: 'ADD_TASK', payload: text });
        setText(''); // Clear the input field
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className={styles.input}
            />
            <button type="submit" className={styles.addButton}>Add</button>
        </form>
    );
}