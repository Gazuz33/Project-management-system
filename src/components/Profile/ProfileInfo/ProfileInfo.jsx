import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile ){
    return <Preloader /> 
  }
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUOs0o8HGnI3WL4T5TqFp4WRspfP6w1W99g&usqp=CAU"></img>
      </div>
      <div className={s.item}>Ava + descripton</div>
      <img src={props.profile.photos.large}></img>
      <div className={s.item}><h3>My posts</h3></div>
    </div>
  );
};
export default ProfileInfo;
