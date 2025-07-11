import React, { useState } from 'react';
import UserContext from './UserContext'; // Import the context we created

// The Wrapper component accepts 'children' as a prop, which will be
// the Navbar and FormWrapper components passed from App.js.
export default function Wrapper({ children }) {
    // 1. Hold the shared state here at the top level.
    const [name, setName] = useState('please enter your name');

    return (
        // 2. Use the Provider component of our context.
        // The 'value' prop is crucial: it's an object containing the data
        // and functions we want to share with any consuming components.
        <UserContext.Provider value={{ name, setName }}>
            {/* Render the children that are nested inside this component */}
            {children}
        </UserContext.Provider>
    );
}