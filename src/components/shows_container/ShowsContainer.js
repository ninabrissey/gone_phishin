import React, { useEffect, useContext, useCallback, useState } from 'react';
import Show from '../show_card/ShowCard';
import { ShowContext } from '../../contexts/ShowContext';
import { useTheme } from '../../contexts/ThemeContext';
import phishLogoLoading from '../../phishLogoLoading.png';
import './ShowsContainer.css';

const ShowsContainer = ({ year }) => {
  const { shows, getShows } = useContext(ShowContext);
  const [isLoading, setIsLoading] = useState(true);
  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;

  const memo = useCallback(() => {
    const renderShows = async () => {
      await getShows(year);
      setIsLoading(false)
    }
    renderShows()
  }, [year, getShows])

  useEffect(() => {
    memo()
  }, [year, getShows, memo]);

  const showCardComponents = shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return (
    <div 
      style={{
        background: theme.primaryBG,
        boxShadow: theme.shadow,
        borderRadius: theme.radius,
      }}
    className="show"> 
      {isLoading && (
        <img
          className="phish-logo-loading"
          alt="phish-logo-loading"
          src={phishLogoLoading}
        ></img>
      )}
      {!isLoading && showCardComponents}
    </div>
  );
};

export default ShowsContainer;
