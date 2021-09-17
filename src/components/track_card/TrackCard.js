import React, { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import './TrackCard.css';

const TrackCard = ({ track }) => {
  const { getCurrentTrack } = useContext(ShowContext);
  const {
    id,
    // mp3,
    // show_date,
    // show_id,
    title,
    // venue_location,
    // venue_name,
    // waveform_image,
  } = track;

  return (
    <article className="track-card" id={id} onClick={() => getCurrentTrack(id)}>
      <p className="song-title">{title}</p>
      {/* <iframe src={mp3}>{waveform_image}</iframe> */}
    </article>
  );
};

export default TrackCard;
