import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
    return (
        <div className={css.friendsContainer}>
            <ul className={css.friendsList}>
                {friends.map(friend => (
                    <li className={css.friendsListItem} key={friend.id}>
                        <FriendListItem {...friend} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;