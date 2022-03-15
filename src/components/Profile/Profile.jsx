import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        dispatch={props.dispatch}
        newPostText={props.state.newPostText}
      />
    </div>
  );
};
export default Profile;
