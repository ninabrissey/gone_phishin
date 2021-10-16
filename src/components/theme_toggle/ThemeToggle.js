import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import partyModeIcon from '../../party-mode-icon.png';
import standardModeIcon from '../../standard-mode-icon.png';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();
  // return <button onClick={toggleTheme}>Change Theme</button>;
  return (
    // <div></div>
    <img
      className="mode-icon"
      src={dark ? partyModeIcon : standardModeIcon}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
