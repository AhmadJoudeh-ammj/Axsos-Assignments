import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the context

export default function Form() {
    // Access both the 'name' state and the 'setName' function from the context.
    const { name, setName } = useContext(UserContext);

    const formStyle = {
        padding: '20px',
    };

    const inputStyle = {
        padding: '8px',
        fontSize: 'small',
        width: '250px',
        height: '20px',
    };

    return (
        <div style={formStyle}>
            <label htmlFor="nameInput" id="name">Your Name: </label>
            <input
                id="nameInput"
                type="text"
                value={name}
                // When the input changes, call the setName function from the context.
                // This updates the state in the Wrapper component.
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
            />
        </div>
    );
}