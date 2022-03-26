import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
