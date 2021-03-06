import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import Textarea from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.message} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };

  return (
    <div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
        />
      </div>
      <button className={s.addPost}>Add post</button>
    </form>
  );
};
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
