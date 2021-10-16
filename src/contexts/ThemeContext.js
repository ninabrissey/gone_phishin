import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themes, setTheme] = useState({
    dark: false,
    partyMode: {
      primaryText: '#A81AE5',
      secondaryText: '#2A58F6',
      primaryBG: 'black',
      secondaryBG: '#31E5F8',
      aquaGradient:
        'linear-gradient(90deg, rgba(49,229,248,1) 35%, rgba(42,88,246,1) 100%)',
      radius: '10%',
      shadow: '5px 5px 15px rgb(173 39 242)',
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
    setTheme({ ...themes, dark: !themes.dark });
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
