'use client'
import { useEffect, useState } from 'react';
import './toggleTheme.css';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <div className="toggle" title="toggle dark mode">
            <label>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <span></span>
            </label>
        </div>
    );
}