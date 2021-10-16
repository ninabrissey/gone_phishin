import React from 'react';
import './ErrorDisplay.css';
import underConstruction from '../../error.png';
import underConstructionParty from '../../error_party.png';
import { useTheme } from '../../contexts/ThemeContext';

const ErrorDisplay = ({ message }) => {
  const { dark } = useTheme();
  const errorImage = dark ? underConstructionParty : underConstruction;

  return (
    <div className="error-display">
      <h2>Uh oh. {message}</h2>
      <h3>The show has been delayed.</h3>
      <img
        src={errorImage}
        alt="under construction"
        className="error-background"
      ></img>
    </div>
  );
};

export default ErrorDisplay;
