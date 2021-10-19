import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Footer.css';
import { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import { useTheme } from '../../contexts/ThemeContext';
import dayjs from 'dayjs';

export default function Footer() {
  const { currentTrack } = useContext(ShowContext);
  const { mp3, title, show_date, venue_name, venue_location } = currentTrack;

  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;

  return (
    <footer className="footer" style={{ background: theme.primaryBG }}>
      <p
        className="venue-text venue-title"
        style={{ color: theme.primaryText }}
      >
        {title}
      </p>
      <p className="venue-text" style={{ color: theme.primaryText }}>
        {show_date && dayjs(show_date).format('M-D-YYYY')}
      </p>
      <p className="venue-text" style={{ color: theme.primaryText }}>
        {venue_name}
      </p>
      <p className="venue-text" style={{ color: theme.primaryText }}>
        {venue_location}
      </p>
      <ReactAudioPlayer
        className="audio-player"
        src={mp3}
        autoPlay={true}
        controls={true}
      />
    </footer>
  );
}
