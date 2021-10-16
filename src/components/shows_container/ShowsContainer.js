import React, { useEffect, useContext, useCallback, useState } from 'react';
import Show from '../show_card/ShowCard';
import { useTheme } from '../../contexts/ThemeContext';
import { ShowContext } from '../../contexts/ShowContext';
import ErrorDisplay from '../error_display/ErrorDisplay';
import phishLogoLoading from '../../phishLogoLoading.png';
import './ShowsContainer.css';

const ShowsContainer = ({ year }) => {
  const { shows, getShows, error } = useContext(ShowContext);
  const [isLoading, setIsLoading] = useState(true);
  const { dark, partyMode, basic } = useTheme();
  const theme = dark ? partyMode : basic;

  const memo = useCallback(() => {
    const fetchShows = async () => {
      await getShows(year);
      setIsLoading(false);
    };
    fetchShows();
  }, [year]);

  useEffect(() => {
    memo();
  }, [memo]);

  const showCardComponents = shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return (
    <div
      className="show"
      style={{
        background: theme.primaryBG,
      }}
    >
      {error && <ErrorDisplay message={error} />}
      {isLoading && !error && (
        <img
          className="phish-logo-loading"
          alt="phish-logo-loading"
          src={phishLogoLoading}
        ></img>
      )}
      {!isLoading && !error && showCardComponents}
    </div>
  );
};

export default ShowsContainer;
