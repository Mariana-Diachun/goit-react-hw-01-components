import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.wrap}>
      <div className={css.box}>
        <img src={avatar} alt={username} width="150" height="150" />
        <p className={css.title}>{username}</p>
        <p className={css.email}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
