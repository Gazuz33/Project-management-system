import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={s.content}>
      <div className={s.ava_description}>
      <img
        src={props.profile.photos.large || userPhoto}
      ></img>
     
      <div className={s.info}>
      <div>Имя: {props.profile.fullName}</div>
      <br />
      <div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      /></div>
      </div>
      </div> 
      <div className={s.load}>
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
      </div>
      <div>
        <h3>Информационный раздел</h3>
      </div>
    </div>
  );
};
export default ProfileInfo;




