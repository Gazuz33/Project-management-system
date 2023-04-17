import React, { useContext } from "react";
import s from "./ProfileInfo.module.css";
import { AuthContext } from "../../../context/AuthContext";

const ProfileInfo = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={s.content}>
      <div className={s.ava_description}>
        <div className={s.info}>
          <div>Имя: {currentUser.displayName}</div>
          <br />
        </div>
        <div>
          <h3>Информационный раздел</h3>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;


