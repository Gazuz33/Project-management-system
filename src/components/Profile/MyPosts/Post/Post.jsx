import s from "./Post.module.css";
const Post = (message) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg6D46rycYNRiLV7xW_1Dt_pOBie445Pgjg&usqp=CAU"
        alt=""
      />
      {message.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
export default Post;
