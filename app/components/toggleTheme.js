'use client'
import { useEffect, useState } from 'react';
import SVGComponent from './SVGComponent';
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
        <label id="theme-toggle-button">
            <input
                type="checkbox"
                id="toggle"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <SVGComponent />
        </label>
    );
}