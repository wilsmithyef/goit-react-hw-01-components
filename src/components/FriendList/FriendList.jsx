import {FriendListItem} from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css';
export function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul className={css.friend_list}>{friendList}</ul>;
}