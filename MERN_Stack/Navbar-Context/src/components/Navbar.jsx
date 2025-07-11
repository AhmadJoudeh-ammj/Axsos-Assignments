// src/components/Navbar.jsx

import React, { useContext } from 'react';
import UserContext from './UserContext';

// This line imports the styles from the file we just made.
import styles from './Navbar.module.css';

export default function Navbar() {
    const { name } = useContext(UserContext);

    return (
        // This uses the 'navbar' class from our CSS module file.
        <nav className={styles.navbar}>
            <h1 className={styles.greeting}>Hi, {name}!</h1>
        </nav>
    );
}