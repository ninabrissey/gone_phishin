import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../apiCalls';
const ShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [years, setYears] = useState([]);
  const [error, setError] = useState('');
  const [currentTrack, setCurrentTrack] = useState({});
  const [shows, setShows] = useState([]);

  const getYears = async () => {
    try {
      const years = await fetchData('years');
      setYears(years.data.reverse());
    } catch (error) {
      setError(error.message);
    }
  };

  const getCurrentTrack = async (id) => {
    try {
      const track = await fetchData(`tracks/${id}`);
      setCurrentTrack(track.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getYears();
  }, []);

  const getShows = async (year) => {
    try {
      const shows = await fetchData(`/years/${year}`);
      setShows(shows.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ShowContext.Provider
      value={{
        years,
        error,
        fetchData,
        getCurrentTrack,
        currentTrack,
        shows,
        getShows,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
