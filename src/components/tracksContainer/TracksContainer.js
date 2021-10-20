import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import { useTheme } from '../../contexts/ThemeContext';
import TrackCard from '../track_card/TrackCard';
import ErrorDisplay from '../error_display/ErrorDisplay';
import phishLogoLoading from '../../phishLogoLoading.png';
import dayjs from 'dayjs';
import './TracksContainer.css';

const TracksContainer = ({ id }) => {
  const { fetchData } = useContext(ShowContext);
  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;
  const [tracks, setTracks] = useState([]);
  const [show, setShow] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const memo = useCallback(() => {
    const getShow = async (id) => {
      try {
        const show = await fetchData(`shows/${id}`);
        setTracks(show.data.tracks);
        setShow(show.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getShow(id);
  }, [id, fetchData, setTracks, setShow, setError]);

  useEffect(() => {
    memo(id);
  }, [id, memo]);

  const filterBySet = (setNumber) => {
    return tracks
      .filter((track) => track.set_name === setNumber)
      .map((track) => <TrackCard key={track.id} id={track.id} track={track} />);
  };

  return (
    <section
      className="tracks-container"
      style={{
        background: theme.primaryBG,
      }}
    >
      {isLoading && !error && (
        <div className="loading-image-container">
          <img
            className="phish-logo-loading"
            alt="phish-logo-loading"
            src={phishLogoLoading}
          ></img>
        </div>
      )}
      {error && <ErrorDisplay message={error} />}
      {show.date && show.venue_name && show.venue.location && (
        <div className="show-info" style={{ color: theme.primaryText }}>
          <h3>{dayjs(show.date).format('MMM D, YYYY')}</h3>
          <h3>{show.venue_name}</h3>
          <h3>{show.venue.location}</h3>
        </div>
      )}

      {tracks.length > 0 && (
        <div className="tracks-container">
          <h4 style={{ color: theme.primaryText }}>-- SET I --</h4>
          <div className="set-1">{filterBySet('Set 1')}</div>
          <h4 style={{ color: theme.primaryText }}>-- SET II --</h4>
          <div className="set-2">{filterBySet('Set 2')}</div>
          {/* need to conditionally render set 3 */}
          {filterBySet('Set 3').length > 0 && (
            <div className="set-3">
              <h4 style={{ color: theme.primaryText }}>-- SET III --</h4>
              <div className="set-3">{filterBySet('Set 3')}</div>
            </div>
          )}
          <h4 style={{ color: theme.primaryText }}>-- ENCORE --</h4>
          <div className="encore">{filterBySet('Encore')}</div>
        </div>
      )}
    </section>
  );
};

export default TracksContainer;
