import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React, { useContext } from 'react'
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from "react-router";
const Profile = (props) => {
  const {currentUser} = useContext(AuthContext)
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  console.log(currentUser.photoURL);
  return (
    <div className={s.content}>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
      </div>
      <ProfileInfo
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
