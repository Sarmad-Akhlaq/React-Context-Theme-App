import React from 'react';
import Button from './components/Button'
import { useTheme, useThemeUpdate } from './components/ThemeContext';

function App() {
  const darkTheme = useTheme();

  return (
    // <ThemeProvider>
    <div>
        <Button />
        {darkTheme.toString()}
    </div>
    // </ThemeProvider>
  );
}

export default App;
