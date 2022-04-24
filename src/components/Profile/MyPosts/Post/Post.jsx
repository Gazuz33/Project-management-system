import s from "./Post.module.css";
import symbol from "../../../../assets/images/info.png"
const Post = (message) => {
  return (
    <div className={s.item}>
      <img
        src={symbol}
        alt=""
      />
      <span className={s.textPost}>{message.message}</span>
    </div>
  );
};
export default Post;
