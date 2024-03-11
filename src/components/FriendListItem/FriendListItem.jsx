import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendStatus, {
                [css.isOnline]: isOnline,
                [css.isOffline]: !isOnline,
            })}>{isOnline ? "Online" : "Offline"}</p >
            
        </>
    );
};

export default FriendListItem;
