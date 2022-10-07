export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
