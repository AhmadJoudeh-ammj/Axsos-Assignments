import React, { createContext, useReducer, useEffect } from 'react';

// A unique key for localStorage
const LOCAL_STORAGE_KEY = 'react-todo-list-tasks-v2';

// 1. Create the Context
// This context will provide both the 'tasks' state and the 'dispatch' function.
export const TodoContext = createContext();

// 2. Define the Reducer Function
// This function handles all the logic for updating the state.
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            // Return a new state array with the new task added.
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        }
        case 'TOGGLE_TASK': {
            // Return a new array by mapping over the old one.
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        }
        case 'REMOVE_TASK': {
            // Return a new array that excludes the task with the matching id.
            return state.filter(task => task.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}

// 3. Create the Provider Component
// This component will wrap parts of our app that need access to the todo state.
export function TodoProvider({ children }) {
    // Initialize useReducer. We get the state and the dispatch function.
    // We also initialize the state from localStorage for persistence.
    const [tasks, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return localData ? JSON.parse(localData) : [];
    });

    // Use useEffect to save the tasks to localStorage whenever they change.
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    // The Provider component makes the 'tasks' state and the 'dispatch' function
    // available to all of its children via the 'value' prop.
    return (
        <TodoContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}