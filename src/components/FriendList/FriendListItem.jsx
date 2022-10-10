import css from 'components/FriendList/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = friend => {
  return (
    <li key={friend.id} className={css.item}>
      <span
        className={friend.isOnline === true ? css.isOnline : css.isOfline}
      ></span>
      <img
        src={friend.avatar}
        alt="User avatar"
        width="48"
        className={css.avatar}
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
