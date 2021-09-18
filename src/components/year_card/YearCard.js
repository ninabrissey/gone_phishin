import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './YearCard.css';

const YearCard = ({ year }) => {
  // const { years } = useContext(ShowContext);

  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;

  return (
    <div
      style={{
        background: theme.primaryBG,
        boxShadow: theme.shadow,
        borderRadius: theme.radius,
      }}
      className="year-card"
      id={year}
    >
      <h3
        style={{ color: theme.primaryText, background: theme.secondaryBG }}
        className="year-text"
      >
        {year}
      </h3>
    </div>
  );
};

export default YearCard;
