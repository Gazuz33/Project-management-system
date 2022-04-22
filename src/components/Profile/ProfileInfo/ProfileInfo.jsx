import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = (props) => {
  if (!props.profile ){
    return <Preloader /> 
  }
  return (
    <div>
      <div className={s.item}><ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus} /></div>
      <img src={props.profile.photos.large}></img>
      <div className={s.item}><h3>My posts</h3></div>
    </div>
  );
};
export default ProfileInfo;
