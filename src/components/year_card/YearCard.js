import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './YearCard.css';

const YearCard = ({ year }) => {
  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;

  return (
    <div className="card" id={year}>
      <h3 style={{ color: theme.primaryText }} className="year-text">
        {year}
      </h3>
    </div>
  );
};

export default YearCard;
