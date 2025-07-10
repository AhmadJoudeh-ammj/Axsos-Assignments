import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';

const LOCAL_STORAGE_KEY = 'react-todo-list-tasks';

export default function TodoList() {
    // State for the input field where the user types a new task
    const [newTaskText, setNewTaskText] = useState('');


    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTasks ? JSON.parse(storedTasks) : [];
    });


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]); 

    // --- Function to ADD a new task ---
    const handleAddTask = (e) => {
        e.preventDefault(); 
        if (newTaskText.trim() === '') return; 
        const newTask = {
            id: Date.now(), 
            text: newTaskText,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setNewTaskText(''); 
    };

    // --- Function to TOGGLE a task's completion status ---
    const handleToggleComplete = (taskId) => {
        setTasks(
           
            tasks.map(task => {
                // If this is the task we want to toggle...
                if (task.id === taskId) {
                    // ...create a NEW task object with the 'completed' property flipped.
                    return { ...task, completed: !task.completed };
                }
                // Otherwise, return the original, unchanged task object.
                return task;
            })
        );
    };

    // --- Function to REMOVE a task ---
    const handleRemoveTask = (taskId) => {
        setTasks(
            
            // containing only the elements that pass the test.
            tasks.filter(task => task.id !== taskId)
        );
    };

    return (
        <div className={styles.todoWrapper}>
            <form onSubmit={handleAddTask} className={styles.form}>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Add a new task..."
                    className={styles.input}
                />
                <button type="submit" className={styles.addButton}>Add</button>
            </form>

            <ul className={styles.list}>
                {tasks.map(task => (
                    <li key={task.id} className={styles.taskItem}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                            className={styles.checkbox}
                        />
                        <span
                            // Apply the 'completed' class for strikethrough styling
                            className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}
                            onClick={() => handleToggleComplete(task.id)} // Allow clicking text to toggle
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => handleRemoveTask(task.id)}
                            className={styles.deleteButton}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}