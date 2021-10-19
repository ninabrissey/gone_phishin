import { Link } from 'react-router-dom';
import './ShowCard.css';
import { useTheme } from '../../contexts/ThemeContext';
import dayjs from 'dayjs';

const ShowCard = ({ show }) => {
  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;
  const { date, venue_name, venue, id } = show;
  return (
    <Link to={`/shows/${id}`} className="show-card-link">
      <article className="card">
        <p className="date" style={{ color: theme.primaryText }}>
          {' '}
          {dayjs(date).format('MMM D, YYYY')}{' '}
        </p>
        <p className="venue" style={{ color: theme.primaryText }}>
          {' '}
          {venue_name}{' '}
        </p>
        <p className="location" style={{ color: theme.primaryText }}>
          {' '}
          {venue.location}{' '}
        </p>
      </article>
    </Link>
  );
};

export default ShowCard;
