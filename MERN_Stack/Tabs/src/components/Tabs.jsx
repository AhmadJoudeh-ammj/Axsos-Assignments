import React, { useState, useRef, useEffect } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.classList.remove(styles.contentFadeIn);

            void contentRef.current.offsetWidth;

            contentRef.current.classList.add(styles.contentFadeIn);
        }
    }, [activeIndex]); 

    const handleTabClick = (index) => {
        setActiveIndex(index);

        
        if (tabs[index] && typeof tabs[index].callback === 'function') {
            tabs[index].callback(tabs[index].label, index);
        }
    };

    if (!tabs || tabs.length === 0) {
        return <div>No tabs to display.</div>;
    }

    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabHeaders}>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        className={`${styles.tabHeader} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div ref={contentRef} className={styles.tabContent}>
                {tabs[activeIndex].content}
            </div>
        </div>
    );
}