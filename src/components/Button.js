import React from 'react';
import {useTheme, useThemeUpdate} from './ThemeContext';

export default function ThemeColor() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return(
        <>
            <button onClick={toggleTheme}>Toggle Theme {JSON.stringify(darkTheme)}</button>
            <div style={themeStyle}>Theme</div>
        </>
    )
};