import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <span className={css.status}>
              {friend.isOnline === true ? (
                <span className={css.isOnline}></span>
              ) : (
                <span className={css.isOfline}></span>
              )}
            </span>
            <img
              src={friend.avatar}
              alt="User avatar"
              width="48"
              className={css.avatar}
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};
