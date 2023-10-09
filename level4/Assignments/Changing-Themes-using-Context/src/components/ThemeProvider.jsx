import React, { useState } from 'react';

const ThemeProvider = React.createContext()

function ThemeContextProvider(props) {

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }
    return (
        <ThemeProvider.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeProvider.Provider>
    );
}

export {ThemeProvider, ThemeContextProvider}