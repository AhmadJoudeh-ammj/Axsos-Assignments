
import React, { useState } from 'react';
import styles from './ColorBoxMaker.module.css';

export default function ColorBoxMaker() {
    const [boxes, setBoxes] = useState([]);
    const [newColor, setNewColor] = useState('');
    const [newSize, setNewSize] = useState(100);

    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (!newColor) {
            alert('Please enter a color.');
            return;
        }

        
        const newBox = {
            color: newColor,
            size: parseInt(newSize, 10) || 100,
        };

    
        setBoxes([...boxes, newBox]);

        setNewColor('');
        setNewSize(100);
    };

    
    const handleClearAll = () => {
        
        setBoxes([]);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="colorInput" className={styles.label}>Color</label>
                    <input
                        id="colorInput"
                        type="text"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        placeholder="e.g., orange"
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="sizeInput" className={styles.label}>Size (px)</label>
                    <input
                        id="sizeInput"
                        type="number"
                        value={newSize}
                        onChange={(e) => setNewSize(e.target.value)}
                        className={`${styles.input} ${styles.sizeInput}`}
                    />
                </div>

                
                <button type="submit" className={styles.button}>
                    Add Box
                </button>
            </form>

            
            {boxes.length > 0 && (
                <div className={styles.actionsContainer}>
                    <button
                        type="button" 
                        onClick={handleClearAll}
                        className={`${styles.button} ${styles.clearButton}`}
                    >
                        Clear All Boxes
                    </button>
                </div>
            )}

            <div className={styles.boxContainer}>
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: `${box.size}px`,
                            height: `${box.size}px`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}