import React, { useReducer } from 'react';
import styles from './ValidatedForm.module.css';

// 1. Define the initial state for our form.
// Each field has a value and an error property.
const initialState = {
    firstName: {
        value: '',
        error: null,
    },
    lastName: {
        value: '',
        error: null,
    },
    email: {
        value: '',
        error: null,
    },
};

// 2. Create the reducer function. This function is the heart of our state logic.
// It takes the current state and an action, and returns the new state.
function reducer(state, action) {
    switch (action.type) {
        // This single action type handles updates for any field.
        case 'UPDATE_FIELD': {
            const { field, value } = action.payload;
            let error = null;

            // --- Validation Logic ---
            // We run validation logic right here inside the reducer.
            if (field === 'firstName') {
                if (value.length > 0 && value.length < 2) {
                    error = 'First Name must be at least 2 characters.';
                }
            } else if (field === 'lastName') {
                if (value.length > 0 && value.length < 2) {
                    error = 'Last Name must be at least 2 characters.';
                }
            } else if (field === 'email') {
                // A simple regex for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value.length > 0 && !emailRegex.test(value)) {
                    error = 'Please enter a valid email address.';
                }
            }

            // Return a new state object. We use the spread syntax to copy the
            // existing state and then overwrite the specific field being updated.
            return {
                ...state,
                [field]: {
                    value,
                    error,
                },
            };
        }
        default:
            // In case of an unknown action type, return the current state.
            return state;
    }
}

export default function ValidatedForm() {
    // 3. Initialize useReducer.
    // It returns the current state and a 'dispatch' function.
    // We use 'dispatch' to send actions to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);

    // 4. Create a handler function for input changes.
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Dispatch an action to the reducer with all the necessary info.
        dispatch({
            type: 'UPDATE_FIELD',
            payload: {
                field: name,
                value: value,
            },
        });
    };

    return (
        <div className={styles.formWrapper} >
            <form >
                <div className={styles.formGroup} >
                    <label htmlFor="firstName" className={styles.label} id="color">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                        // Conditionally apply the error class
                        className={`${styles.input} ${state.firstName.error ? styles.error : ''}`}
                    />
                    {/* Conditionally render the error message */}
                    {state.firstName.error && (
                        <p className={styles.errorMessage}>{state.firstName.error}</p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}id="color">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                        className={`${styles.input} ${state.lastName.error ? styles.error : ''}`}
                    />
                    {state.lastName.error && (
                        <p className={styles.errorMessage}>{state.lastName.error}</p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label} id="color">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                        className={`${styles.input} ${state.email.error ? styles.error : ''}`}
                    />
                    {state.email.error && (
                        <p className={styles.errorMessage}>{state.email.error}</p>
                    )}
                </div>
            </form>
        </div>
    );
}