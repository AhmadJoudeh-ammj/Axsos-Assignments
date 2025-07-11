import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import styles from './TodoList.module.css'; // We'll reuse the CSS from the previous assignment

// This component displays the list of tasks.
export default function TodoList() {
    // Consume the context to get the list of tasks and the dispatch function.
    const { tasks, dispatch } = useContext(TodoContext);

    if (tasks.length === 0) {
        return <p className={styles.emptyMessage}>No tasks yet. Add one above!</p>;
    }

    return (
        <ul className={styles.list}>
            {tasks.map(task => (
                <li key={task.id} className={styles.taskItem} id="list">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        // Dispatch an action to toggle the task
                        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                        className={styles.checkbox}
                    />
                    <span
                        id='list'
                        className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}
                        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                    >
                        {task.text}
                    </span>
                    <button
                        // Dispatch an action to remove the task
                        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                        className={styles.deleteButton}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}