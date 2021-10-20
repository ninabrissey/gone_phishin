import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themes, setTheme] = useState({
    mode: false,
    party: {
      primaryText: '#A925E6',
      secondaryText: '#2A58F6',
      primaryBG:
        'linear-gradient(90deg, rgba(62,62,62,1) 0%, rgba(0,0,0,1) 50%, rgba(62,62,62,1) 100%)',
      secondaryBG: '#31E5F8',
    },
    basic: {
      primaryText: '#6d6f71',
      secondaryText: '#f2f3f5',
      primaryBG: '#D9DBDC',
      secondaryBG: '',
      radius: '10px',
      shadow: '',
    },
  });

  const toggleTheme = () => {
    setTheme({ ...themes, mode: !themes.mode });
  };

  return (
    <ThemeContext.Provider value={{ ...themes, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}

export { ThemeContextProvider, useTheme };
