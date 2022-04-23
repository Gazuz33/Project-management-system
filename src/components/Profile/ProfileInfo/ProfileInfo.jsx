import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";

const ProfileInfo = (props) => {
  if (!props.profile ){
    return <Preloader /> 
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div className={s.item}><ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus} /></div>
      <img src={props.profile.photos.large || userPhoto}></img>
      <div>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      </div>
      <div className={s.item}><h3>My posts</h3></div>
    </div>
  );
};
export default ProfileInfo;
