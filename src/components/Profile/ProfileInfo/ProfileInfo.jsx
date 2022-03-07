import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUOs0o8HGnI3WL4T5TqFp4WRspfP6w1W99g&usqp=CAU"></img>
      </div>
      <div className={s.item}>Ava + descripton</div>
      <div className={s.item}><h3>My posts</h3></div>
    </div>
  );
};
export default ProfileInfo;
