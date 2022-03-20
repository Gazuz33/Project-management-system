import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  UpdateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.message} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdateNewPostTextActionCreator(text));
  };
  return (
    <div>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};
export default MyPosts;
