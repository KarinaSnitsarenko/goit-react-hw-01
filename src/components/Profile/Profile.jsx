// import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({
    image = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png/640x480/2a2a2a/ffffff&text=Profile+image+placeholder",
    name,
    tag,
    location,
    stats }) => {
    return (
        <div className={css.profileContainer}>
        <div className={css.userInfo}>
          <img
            src={image}
        alt={name}
        />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
        </div>

        <ul className={css.userStats}>
        <li>
         <span>Followers</span>
        <span>{stats.followers}</span>
        </li>
         <li>
         <span>Views</span>
         <span>{stats.views}</span>
        </li>
         <li>
         <span>Likes</span>
         <span>{stats.likes}</span>
         </li>
         </ul>
        </div>
    );
}
  

export default Profile;